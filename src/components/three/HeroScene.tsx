import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import {
    BufferAttribute,
    BufferGeometry,
    Color,
    DoubleSide,
    MeshPhysicalMaterial,
    Shape,
    type Group,
} from "three";

/** Smooth interpolation between silhouette control points. */
const smooth = (t: number) => {
    const clamped = Math.min(1, Math.max(0, t));
    return clamped * clamped * (3 - 2 * clamped);
};

/** Elliptical torso radius at a given height. */
const torsoProfile = (y: number) => {
    const keys: Array<[number, number, number]> = [
        [-1.15, 0.86, 0.44],
        [-0.85, 0.8, 0.41],
        [-0.25, 0.76, 0.39],
        [0.35, 0.84, 0.43],
        [0.86, 0.96, 0.47],
    ];

    for (let i = 0; i < keys.length - 1; i++) {
        const [y0, rx0, rz0] = keys[i];
        const [y1, rx1, rz1] = keys[i + 1];
        if (y <= y1) {
            const t = smooth((y - y0) / (y1 - y0));
            return {
                rx: rx0 + (rx1 - rx0) * t,
                rz: rz0 + (rz1 - rz0) * t,
            };
        }
    }

    return { rx: 0.96, rz: 0.47 };
};

/** Builds a closed, indexed surface from a parametric point function. */
const createSurface = (
    uSteps: number,
    vSteps: number,
    point: (u: number, v: number) => [number, number, number]
) => {
    const positions: number[] = [];
    const indices: number[] = [];

    for (let j = 0; j <= vSteps; j++) {
        const v = j / vSteps;
        for (let i = 0; i <= uSteps; i++) {
            positions.push(...point(i / uSteps, v));
        }
    }

    for (let j = 0; j < vSteps; j++) {
        for (let i = 0; i < uSteps; i++) {
            const a = j * (uSteps + 1) + i;
            const b = a + 1;
            const c = a + (uSteps + 1);
            const d = c + 1;
            indices.push(a, c, b, b, c, d);
        }
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
};

/** A fully modelled T-shirt with torso, shoulders, sleeves and subtle cloth motion. */
const Shirt = () => {
    const group = useRef<Group>(null);

    const torso = useMemo(
        () =>
            createSurface(56, 36, (u, v) => {
                const angle = u * Math.PI * 2;
                const y = -1.15 + v * 2.01;
                const { rx, rz } = torsoProfile(y);
                const fold = 0.012 * Math.sin(angle * 8 + y * 3.2) +
                    0.007 * Math.sin(angle * 13 - y * 6.4);

                return [
                    Math.cos(angle) * rx * (1 + fold),
                    y,
                    Math.sin(angle) * rz * (1 + fold),
                ];
            }),
        []
    );

    const shoulders = useMemo(
        () =>
            createSurface(56, 10, (u, v) => {
                const angle = u * Math.PI * 2;
                const rx = 0.96 + (0.32 - 0.96) * v;
                const rz = 0.47 + (0.27 - 0.47) * v;
                const y = 0.86 + 0.14 * v - 0.015 * Math.sin(v * Math.PI);
                const fold = 0.008 * Math.sin(angle * 9 + v * 4);

                return [
                    Math.cos(angle) * rx * (1 + fold),
                    y,
                    Math.sin(angle) * rz * (1 + fold),
                ];
            }),
        []
    );

    const heart = useMemo(() => {
        const shape = new Shape();
        shape.moveTo(0, -0.13);
        shape.bezierCurveTo(-0.24, -0.32, -0.3, -0.04, 0, 0.14);
        shape.bezierCurveTo(0.3, -0.04, 0.24, -0.32, 0, -0.13);
        return shape;
    }, []);

    const fabric = useMemo(
        () =>
            new MeshPhysicalMaterial({
                color: "#fff9f3",
                roughness: 0.84,
                metalness: 0,
                sheen: 0.75,
                sheenColor: new Color("#fff0e4"),
                sheenRoughness: 0.9,
                side: DoubleSide,
            }),
        []
    );

    const trim = useMemo(
        () =>
            new MeshPhysicalMaterial({
                color: "#E01E31",
                roughness: 0.72,
                metalness: 0,
                sheen: 0.4,
                sheenColor: new Color("#ff8b96"),
            }),
        []
    );

    const emblem = useMemo(
        () =>
            new MeshPhysicalMaterial({
                color: "#E3A13C",
                roughness: 0.45,
                metalness: 0.35,
                emissive: new Color("#E3A13C"),
                emissiveIntensity: 0.18,
            }),
        []
    );

    const baseTorso = useMemo(
        () => Float32Array.from(torso.attributes.position.array as Float32Array),
        [torso]
    );

    useEffect(
        () => () => {
            torso.dispose();
            shoulders.dispose();
            fabric.dispose();
            trim.dispose();
            emblem.dispose();
        },
        [torso, shoulders, fabric, trim, emblem]
    );

    useFrame((state, delta) => {
        const t = state.clock.elapsedTime;

        if (group.current) {
            group.current.rotation.y += delta * 0.14;
            group.current.rotation.z = Math.sin(t * 0.5) * 0.035;
            group.current.position.y = Math.sin(t * 0.8) * 0.07;
        }

        // Gentle cloth ripple: displace the torso radially without changing its silhouette.
        const attribute = torso.attributes.position as BufferAttribute;
        const points = attribute.array as Float32Array;
        for (let i = 0; i < points.length; i += 3) {
            const x = baseTorso[i];
            const y = baseTorso[i + 1];
            const z = baseTorso[i + 2];
            const angle = Math.atan2(z, x);
            const wave =
                0.011 * Math.sin(angle * 6 + y * 4 + t * 1.05) +
                0.006 * Math.sin(angle * 11 - y * 7 + t * 0.7);

            points[i] = x * (1 + wave);
            points[i + 2] = z * (1 + wave);
        }
        attribute.needsUpdate = true;
        torso.computeVertexNormals();
    });

    const sleeveAngle = 2.18;

    return (
        <Float speed={1.1} rotationIntensity={0.14} floatIntensity={0.28}>
            <group ref={group} rotation={[0.08, 0.2, -0.03]}>
                {/* Body + shoulder shelf */}
                <mesh geometry={torso} material={fabric} castShadow />
                <mesh geometry={shoulders} material={fabric} castShadow />

                {/* Sleeves */}
                <mesh
                    material={fabric}
                    castShadow
                    position={[1.19, 0.43, 0]}
                    rotation={[0, 0, -sleeveAngle]}
                    scale={[1, 1, 0.82]}
                >
                    <cylinderGeometry args={[0.29, 0.35, 0.96, 28, 1, true]} />
                </mesh>
                <mesh
                    material={fabric}
                    castShadow
                    position={[-1.19, 0.43, 0]}
                    rotation={[0, 0, sleeveAngle]}
                    scale={[1, 1, 0.82]}
                >
                    <cylinderGeometry args={[0.29, 0.35, 0.96, 28, 1, true]} />
                </mesh>

                {/* Ribbed cuffs */}
                <mesh
                    material={trim}
                    position={[1.54, 0.14, 0]}
                    rotation={[0, 0, -sleeveAngle]}
                    scale={[1, 1, 0.82]}
                >
                    <cylinderGeometry args={[0.3, 0.3, 0.09, 28, 1, true]} />
                </mesh>
                <mesh
                    material={trim}
                    position={[-1.54, 0.14, 0]}
                    rotation={[0, 0, sleeveAngle]}
                    scale={[1, 1, 0.82]}
                >
                    <cylinderGeometry args={[0.3, 0.3, 0.09, 28, 1, true]} />
                </mesh>

                {/* Hem band */}
                <mesh material={trim} position={[0, -1.12, 0]} scale={[1, 1, 0.52]}>
                    <cylinderGeometry args={[0.88, 0.88, 0.09, 56, 1, true]} />
                </mesh>

                {/* Collar */}
                <mesh
                    material={trim}
                    position={[0, 1.0, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[1, 0.84, 1]}
                >
                    <torusGeometry args={[0.32, 0.05, 12, 56]} />
                </mesh>

                {/* Small embroidered heart */}
                <mesh
                    material={emblem}
                    position={[0.36, 0.22, 0.43]}
                    rotation={[0, -0.12, 0]}
                    scale={0.62}
                >
                    <shapeGeometry args={[heart, 16]} />
                </mesh>
            </group>
        </Float>
    );
};

/** Iridescent soap bubbles with individual drifting motion. */
const Bubbles = () => {
    const group = useRef<Group>(null);
    const bubbleRefs = useRef<Array<Group | null>>([]);

    const bubbles = useMemo(
        () =>
            Array.from({ length: 18 }, (_, i) => {
                const angle = (i / 18) * Math.PI * 2 + (i % 3) * 0.15;
                const radius = 1.1 + (i % 5) * 0.13;

                return {
                    position: [
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius * 0.82,
                        0.32 + Math.sin(angle * 2) * 0.42,
                    ] as [number, number, number],
                    scale: 0.07 + (i % 4) * 0.028,
                    tint: i % 3 === 0 ? "#ffe8c8" : i % 3 === 1 ? "#dff4ff" : "#ffdde4",
                    speed: 0.45 + (i % 5) * 0.11,
                    phase: i * 0.9,
                };
            }),
        []
    );

    useFrame((state, delta) => {
        const t = state.clock.elapsedTime;

        if (group.current) {
            group.current.rotation.z -= delta * 0.04;
            group.current.rotation.y = state.pointer.x * 0.2;
            group.current.rotation.x = -state.pointer.y * 0.15;
        }

        bubbles.forEach((bubble, index) => {
            const el = bubbleRefs.current[index];
            if (!el) return;
            el.position.x = bubble.position[0] + Math.cos(t * bubble.speed + bubble.phase) * 0.05;
            el.position.y = bubble.position[1] + Math.sin(t * bubble.speed + bubble.phase) * 0.09;
        });
    });

    return (
        <group ref={group}>
            {bubbles.map((bubble, index) => (
                <group
                    key={index}
                    ref={(el) => {
                        bubbleRefs.current[index] = el;
                    }}
                    position={bubble.position}
                >
                    <mesh scale={bubble.scale}>
                        <sphereGeometry args={[1, 28, 28]} />
                        <meshPhysicalMaterial
                            color={bubble.tint}
                            transparent
                            opacity={0.32}
                            roughness={0.03}
                            metalness={0.02}
                            clearcoat={1}
                            clearcoatRoughness={0.05}
                            iridescence={1}
                            iridescenceIOR={1.34}
                            depthWrite={false}
                        />
                    </mesh>
                    <mesh
                        position={[-bubble.scale * 0.32, bubble.scale * 0.36, bubble.scale * 0.6]}
                        scale={bubble.scale * 0.16}
                    >
                        <sphereGeometry args={[1, 12, 12]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
                    </mesh>
                </group>
            ))}
        </group>
    );
};

/** Whole scene leans gently toward the pointer for a parallax feel. */
const Sculpture = () => {
    const group = useRef<Group>(null);

    useFrame((state, delta) => {
        if (!group.current) return;
        const ease = Math.min(1, delta * 2.2);
        group.current.rotation.y += (state.pointer.x * 0.22 - group.current.rotation.y) * ease;
        group.current.rotation.x += (-state.pointer.y * 0.15 - group.current.rotation.x) * ease;
    });

    return (
        <group ref={group}>
            <Shirt />
            <Bubbles />
        </group>
    );
};

const HeroScene = () => (
    <Canvas
        shadows="basic"
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 5.6], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
        <ambientLight intensity={1.05} />
        <directionalLight position={[3.5, 4.5, 4]} intensity={2.3} castShadow />
        <pointLight position={[-3.5, -2, 2.5]} color="#E01E31" intensity={3} distance={9} />
        <pointLight position={[2.5, -1.5, 3]} color="#E3A13C" intensity={2.2} distance={8} />
        <Sculpture />
        <ContactShadows position={[0, -1.85, 0]} opacity={0.2} scale={7} blur={2.6} far={4} />
    </Canvas>
);

export default HeroScene;
