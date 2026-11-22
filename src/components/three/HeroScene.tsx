import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Sparkles } from "@react-three/drei";
import { DoubleSide, Shape, type Group } from "three";

/** The floating centrepiece: an extruded, beveled linen T-shirt. */
const Shirt = () => {
    const group = useRef<Group>(null);

    const shirtShape = useMemo(() => {
        const shape = new Shape();

        // Collar -> shoulder -> sleeve -> underarm -> hem -> mirror.
        shape.moveTo(-0.62, 1.05);
        shape.lineTo(-1.18, 1.2);
        shape.lineTo(-1.64, 0.7);
        shape.lineTo(-1.3, 0.24);
        shape.lineTo(-0.94, 0.5);
        shape.lineTo(-0.92, -1.1);
        shape.quadraticCurveTo(0, -1.3, 0.92, -1.1);
        shape.lineTo(0.94, 0.5);
        shape.lineTo(1.3, 0.24);
        shape.lineTo(1.64, 0.7);
        shape.lineTo(1.18, 1.2);
        shape.lineTo(0.62, 1.05);
        shape.quadraticCurveTo(0, 0.68, -0.62, 1.05);

        return shape;
    }, []);

    useFrame((state, delta) => {
        if (!group.current) return;
        group.current.rotation.y += delta * 0.16;
        group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.55) * 0.045;
        group.current.position.y = Math.sin(state.clock.elapsedTime * 0.85) * 0.09;
    });

    return (
        <Float speed={1.15} rotationIntensity={0.16} floatIntensity={0.32}>
            <group ref={group} rotation={[0.1, 0.22, -0.04]}>
                {/* Main linen body */}
                <mesh castShadow position={[0, 0, -0.09]}>
                    <extrudeGeometry
                        args={[
                            shirtShape,
                            {
                                depth: 0.18,
                                bevelEnabled: true,
                                bevelThickness: 0.05,
                                bevelSize: 0.05,
                                bevelSegments: 4,
                                curveSegments: 24,
                            },
                        ]}
                    />
                    <meshStandardMaterial
                        color="#fff8f2"
                        side={DoubleSide}
                        roughness={0.62}
                        metalness={0.02}
                    />
                </mesh>

                {/* Ribbed collar */}
                <mesh position={[0, 0.93, 0.145]} scale={[1, 0.44, 1]}>
                    <torusGeometry args={[0.44, 0.05, 12, 56]} />
                    <meshStandardMaterial color="#E01E31" roughness={0.5} metalness={0.08} />
                </mesh>

                {/* Small chest emblem */}
                <mesh position={[0.46, 0.3, 0.15]}>
                    <torusGeometry args={[0.15, 0.045, 10, 36]} />
                    <meshStandardMaterial
                        color="#E3A13C"
                        emissive="#E3A13C"
                        emissiveIntensity={0.32}
                        metalness={0.4}
                        roughness={0.3}
                    />
                </mesh>

                {/* Soft fabric folds */}
                <mesh position={[-0.36, -0.12, 0.145]} rotation={[0, 0, 0.42]}>
                    <planeGeometry args={[0.018, 1.05]} />
                    <meshBasicMaterial color="#e6c8b8" transparent opacity={0.32} />
                </mesh>
                <mesh position={[0.3, -0.2, 0.145]} rotation={[0, 0, -0.3]}>
                    <planeGeometry args={[0.016, 0.82]} />
                    <meshBasicMaterial color="#e6c8b8" transparent opacity={0.26} />
                </mesh>
            </group>
        </Float>
    );
};

/** Iridescent soap bubbles drifting around the shirt. */
const Bubbles = () => {
    const group = useRef<Group>(null);

    const bubbles = useMemo(
        () =>
            Array.from({ length: 15 }, (_, i) => {
                const angle = (i / 15) * Math.PI * 2 + (i % 2) * 0.22;
                const radius = 1.12 + (i % 4) * 0.16;

                return {
                    position: [
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius * 0.82,
                        0.35 + Math.sin(angle * 2) * 0.45,
                    ] as [number, number, number],
                    scale: 0.085 + (i % 3) * 0.035,
                    tint: i % 3 === 0 ? "#ffe6c4" : i % 3 === 1 ? "#d9f2ff" : "#ffd9e0",
                };
            }),
        []
    );

    useFrame((state, delta) => {
        if (!group.current) return;
        group.current.rotation.z -= delta * 0.055;
        group.current.rotation.y = state.pointer.x * 0.24;
        group.current.rotation.x = -state.pointer.y * 0.18;
    });

    return (
        <group ref={group}>
            {bubbles.map((bubble, index) => (
                <group key={index}>
                    <mesh position={bubble.position} scale={bubble.scale}>
                        <sphereGeometry args={[1, 28, 28]} />
                        <meshPhysicalMaterial
                            color={bubble.tint}
                            transparent
                            opacity={0.34}
                            roughness={0.04}
                            metalness={0.02}
                            clearcoat={1}
                            clearcoatRoughness={0.06}
                            iridescence={1}
                            iridescenceIOR={1.32}
                            depthWrite={false}
                        />
                    </mesh>
                    <mesh
                        position={[
                            bubble.position[0] - bubble.scale * 0.32,
                            bubble.position[1] + bubble.scale * 0.36,
                            bubble.position[2] + bubble.scale * 0.62,
                        ]}
                        scale={bubble.scale * 0.15}
                    >
                        <sphereGeometry args={[1, 12, 12]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
                    </mesh>
                </group>
            ))}
        </group>
    );
};

/** A repeating dash-and-dot halo instead of a plain torus. */
const PatternRing = () => {
    const ring = useRef<Group>(null);

    const dashes = useMemo(
        () =>
            Array.from({ length: 36 }, (_, i) => {
                const angle = (i / 36) * Math.PI * 2;
                const radius = 1.78;
                const color = i % 4 === 0 ? "#E01E31" : i % 2 === 0 ? "#E3A13C" : "#fff2e4";

                return {
                    position: [
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius,
                        0,
                    ] as [number, number, number],
                    rotation: angle + Math.PI / 2,
                    length: i % 3 === 0 ? 0.2 : 0.1,
                    color,
                };
            }),
        []
    );

    const dots = useMemo(
        () =>
            Array.from({ length: 24 }, (_, i) => {
                const angle = (i / 24) * Math.PI * 2 + Math.PI / 24;
                const radius = 1.58;

                return {
                    position: [
                        Math.cos(angle) * radius,
                        Math.sin(angle) * radius,
                        0,
                    ] as [number, number, number],
                };
            }),
        []
    );

    useFrame((state) => {
        if (!ring.current) return;
        ring.current.rotation.z = state.clock.elapsedTime * 0.1;
        ring.current.rotation.x = Math.PI / 7 + Math.sin(state.clock.elapsedTime * 0.45) * 0.1;
        ring.current.rotation.y = state.pointer.x * 0.15;
    });

    return (
        <group ref={ring} rotation={[Math.PI / 7, 0, 0]}>
            {dashes.map((dash, index) => (
                <mesh key={index} position={dash.position} rotation={[0, 0, dash.rotation]}>
                    <boxGeometry args={[dash.length, 0.036, 0.036]} />
                    <meshStandardMaterial
                        color={dash.color}
                        emissive={dash.color}
                        emissiveIntensity={0.28}
                        metalness={0.45}
                        roughness={0.3}
                    />
                </mesh>
            ))}

            {dots.map((dot, index) => (
                <mesh key={index} position={dot.position}>
                    <sphereGeometry args={[0.024, 10, 10]} />
                    <meshStandardMaterial color="#E3A13C" emissive="#E3A13C" emissiveIntensity={0.4} />
                </mesh>
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
        group.current.rotation.y += (state.pointer.x * 0.24 - group.current.rotation.y) * ease;
        group.current.rotation.x += (-state.pointer.y * 0.16 - group.current.rotation.x) * ease;
    });

    return (
        <group ref={group}>
            <PatternRing />
            <Shirt />
            <Bubbles />
            <Sparkles count={30} scale={[5, 3.4, 2.4]} size={1.9} speed={0.3} color="#E3A13C" opacity={0.38} />
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
        <ambientLight intensity={1} />
        <directionalLight position={[3.5, 4.5, 4]} intensity={2.2} castShadow />
        <pointLight position={[-3.5, -2, 2.5]} color="#E01E31" intensity={3.2} distance={9} />
        <pointLight position={[2.5, -1.5, 3]} color="#E3A13C" intensity={2.4} distance={8} />
        <Sculpture />
        <ContactShadows position={[0, -1.85, 0]} opacity={0.2} scale={7} blur={2.6} far={4} />
    </Canvas>
);

export default HeroScene;
