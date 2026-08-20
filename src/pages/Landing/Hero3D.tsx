import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import type { Mesh } from "three";

const Knot = () => {
    const ref = useRef<Mesh>(null);

    useFrame((_, delta) => {
        if (!ref.current) return;
        ref.current.rotation.y += delta * 0.4;
        ref.current.rotation.x += delta * 0.15;
        ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.08;
    });

    return (
        <mesh ref={ref} scale={1.1}>
            <torusKnotGeometry args={[0.72, 0.22, 128, 32, 2, 3]} />
            <MeshTransmissionMaterial
                backside
                thickness={0.4}
                chromaticAberration={0.15}
                anisotropy={0.2}
                distortion={0.1}
                distortionScale={0.2}
                temporalDistortion={0.1}
                roughness={0.15}
                transmission={0.95}
                color="#E8A090"
            />
        </mesh>
    );
};

const Hero3D = () => {
    return (
        <div
            className="
                pointer-events-none
                absolute
                right-[36%]
                top-[8%]
                hidden
                h-40
                w-40
                opacity-80
                lg:block
                xl:right-[38%]
                xl:top-[6%]
                xl:h-44
                xl:w-44
            "
        >
            <Canvas
                camera={{ position: [0, 0, 3.2], fov: 40 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: "transparent" }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFF5E6" />
                <directionalLight position={[-3, 2, -4]} intensity={0.4} color="#E01E31" />
                <pointLight position={[0, 3, 2]} intensity={0.6} color="#FCE7E5" />
                <Knot />
            </Canvas>
        </div>
    );
};

export default Hero3D;
