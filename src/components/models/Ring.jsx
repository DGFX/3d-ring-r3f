import { useGLTF } from "@react-three/drei";

export function Ring(props) {
    const { nodes, materials } = useGLTF("/ring.glb");
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 0]}>
                <group position={[0, -1.32, 0]} scale={1.1}>
                    <group position={[0.24, 1.09, 0]} scale={0.03}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-009"].geometry}
                            material={nodes["p-2-009"].material}
                            position={[-4.49, 10.03, 38.55]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-014"].geometry}
                            material={nodes["p-2-014"].material}
                            position={[-4.99, -11.63, 37.33]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-016"].geometry}
                            material={nodes["p-2-016"].material}
                            position={[-5.11, -19.48, 33.97]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-020"].geometry}
                            material={nodes["p-2-020"].material}
                            position={[-5.34, -29.77, 25.82]}
                            rotation={[0.17, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-022"].geometry}
                            material={nodes["p-2-022"].material}
                            position={[-6.15, -34.86, 17.75]}
                            rotation={[-1.99, -1.25, 1.63]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-005"].geometry}
                            material={nodes["p-2-005"].material}
                            position={[-2.09, 26.48, 30.18]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-008"].geometry}
                            material={nodes["p-2-008"].material}
                            position={[-4.31, 14.51, 37.39]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-007"].geometry}
                            material={nodes["p-2-007"].material}
                            position={[-3.83, 18.74, 35.57]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-053"].geometry}
                            material={nodes["p-2-053"].material}
                            position={[7.27, 35.24, -16.63]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-012"].geometry}
                            material={nodes["p-2-012"].material}
                            position={[-4.63, -3.42, 39.12]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-010"].geometry}
                            material={nodes["p-2-010"].material}
                            position={[-4.73, 5.56, 39.19]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-004"].geometry}
                            material={nodes["p-2-004"].material}
                            position={[-0.62, 29.63, 26.85]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-058"].geometry}
                            material={nodes["p-2-058"].material}
                            position={[-3.83, 18.74, -35.57]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-013"].geometry}
                            material={nodes["p-2-013"].material}
                            position={[-4.64, -7.62, 38.44]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-018"].geometry}
                            material={nodes["p-2-018"].material}
                            position={[-4.73, 0.92, 39.19]}
                            rotation={[0.05, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-064"].geometry}
                            material={nodes["p-2-064"].material}
                            position={[-4.64, -7.62, -38.44]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-006"].geometry}
                            material={nodes["p-2-006"].material}
                            position={[-3.17, 22.82, 33.27]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-068"].geometry}
                            material={nodes["p-2-068"].material}
                            position={[-5.18, -23.18, -31.74]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-015"].geometry}
                            material={nodes["p-2-015"].material}
                            position={[-5.07, -15.63, 35.88]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-024"].geometry}
                            material={nodes["p-2-024"].material}
                            position={[-6.09, -38, 8.78]}
                            rotation={[-1.76, -1.21, 1.61]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-017"].geometry}
                            material={nodes["p-2-017"].material}
                            position={[-5.18, -23.18, 31.74]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-026"].geometry}
                            material={nodes["p-2-026"].material}
                            position={[-6.17, -38.95, -0.25]}
                            rotation={[-1.63, -1.2, 1.53]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-019"].geometry}
                            material={nodes["p-2-019"].material}
                            position={[-5.23, -26.57, 29.17]}
                            rotation={[0.1, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-055"].geometry}
                            material={nodes["p-2-055"].material}
                            position={[1.54, 32.2, -23.25]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-021"].geometry}
                            material={nodes["p-2-021"].material}
                            position={[-6.02, -32.48, 21.88]}
                            rotation={[-2.15, -1.23, 1.64]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-057"].geometry}
                            material={nodes["p-2-057"].material}
                            position={[-3.17, 22.82, -33.27]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_008.geometry}
                            material={nodes.Princess_008.material}
                            position={[-3.61, 33.32, 28.05]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-060"].geometry}
                            material={nodes["p-2-060"].material}
                            position={[-4.49, 10.03, -38.55]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_009.geometry}
                            material={nodes.Princess_009.material}
                            position={[-5.51, 29.46, 31.85]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-062"].geometry}
                            material={nodes["p-2-062"].material}
                            position={[-4.73, 0.92, -39.19]}
                            rotation={[3.09, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_012.geometry}
                            material={nodes.Princess_012.material}
                            position={[-7.31, 15.49, 39.8]}
                            scale={[1, 1.02, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_015.geometry}
                            material={nodes.Princess_015.material}
                            position={[-7.48, 6.61, 41.66]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-066"].geometry}
                            material={nodes["p-2-066"].material}
                            position={[-5.07, -15.63, -35.88]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_035.geometry}
                            material={nodes.Princess_035.material}
                            position={[-7.61, -6.48, 41.2]}
                            rotation={[0.13, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-070"].geometry}
                            material={nodes["p-2-070"].material}
                            position={[-5.34, -29.77, -25.82]}
                            rotation={[2.97, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-054"].geometry}
                            material={nodes["p-2-054"].material}
                            position={[4.21, 34.06, -19.74]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-072"].geometry}
                            material={nodes["p-2-072"].material}
                            position={[-6.15, -34.86, -17.75]}
                            rotation={[-1.15, -1.25, 1.51]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-056"].geometry}
                            material={nodes["p-2-056"].material}
                            position={[-0.62, 29.63, -26.85]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-074"].geometry}
                            material={nodes["p-2-074"].material}
                            position={[-6.09, -38, -8.78]}
                            rotation={[-1.38, -1.21, 1.53]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-059"].geometry}
                            material={nodes["p-2-059"].material}
                            position={[-4.31, 14.51, -37.39]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-1"].geometry}
                            material={nodes["p-2-1"].material}
                            position={[7.27, 35.24, 16.63]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-061"].geometry}
                            material={nodes["p-2-061"].material}
                            position={[-4.73, 5.56, -39.19]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-3"].geometry}
                            material={nodes["p-2-3"].material}
                            position={[1.54, 32.2, 23.25]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-063"].geometry}
                            material={nodes["p-2-063"].material}
                            position={[-4.63, -3.42, -39.12]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-023"].geometry}
                            material={nodes["p-2-023"].material}
                            position={[-6.18, -36.71, 13.38]}
                            rotation={[-1.96, -1.23, 1.54]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-065"].geometry}
                            material={nodes["p-2-065"].material}
                            position={[-4.99, -11.63, -37.33]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-025"].geometry}
                            material={nodes["p-2-025"].material}
                            position={[-6.15, -38.77, 4.28]}
                            rotation={[-1.7, -1.2, 1.56]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_082.geometry}
                            material={nodes.Princess_082.material}
                            position={[-7.31, 15.49, -39.8]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1.02, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-052"].geometry}
                            material={nodes["p-2-052"].material}
                            position={[-2.09, 26.48, -30.18]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_085.geometry}
                            material={nodes.Princess_085.material}
                            position={[-7.58, 2.28, -41.82]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_017.geometry}
                            material={nodes.Princess_017.material}
                            position={[-7.61, -2.08, 41.61]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_088.geometry}
                            material={nodes.Princess_088.material}
                            position={[-7.61, -10.84, -40.25]}
                            rotation={[2.92, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_038.geometry}
                            material={nodes.Princess_038.material}
                            position={[-7.61, -19.18, 37.01]}
                            rotation={[0.4, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_091.geometry}
                            material={nodes.Princess_091.material}
                            position={[-7.61, -22.97, -34.78]}
                            rotation={[2.65, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_041.geometry}
                            material={nodes.Princess_041.material}
                            position={[-7.61, -29.71, 29.25]}
                            rotation={[0.73, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-075"].geometry}
                            material={nodes["p-2-075"].material}
                            position={[-6.15, -38.77, -4.28]}
                            rotation={[-1.44, -1.2, 1.58]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_044.geometry}
                            material={nodes.Princess_044.material}
                            position={[-7.61, -37.16, 18.72]}
                            rotation={[1.07, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_100.geometry}
                            material={nodes.Princess_100.material}
                            position={[-7.61, -41.42, -2.21]}
                            rotation={[1.68, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_047.geometry}
                            material={nodes.Princess_047.material}
                            position={[-7.61, -40.96, 6.51]}
                            rotation={[1.38, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_006.geometry}
                            material={nodes.Princess_006.material}
                            position={[1.85, 38.54, 19.53]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_076.geometry}
                            material={nodes.Princess_076.material}
                            position={[5.5, 39.95, -16.05]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_010.geometry}
                            material={nodes.Princess_010.material}
                            position={[-6.73, 25.03, 35.32]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_079.geometry}
                            material={nodes.Princess_079.material}
                            position={[-3.61, 33.32, -28.05]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_016.geometry}
                            material={nodes.Princess_016.material}
                            position={[-7.58, 2.28, 41.82]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-067"].geometry}
                            material={nodes["p-2-067"].material}
                            position={[-5.11, -19.48, -33.97]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_036.geometry}
                            material={nodes.Princess_036.material}
                            position={[-7.61, -10.84, 40.25]}
                            rotation={[0.22, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-069"].geometry}
                            material={nodes["p-2-069"].material}
                            position={[-5.23, -26.57, -29.17]}
                            rotation={[3.04, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_042.geometry}
                            material={nodes.Princess_042.material}
                            position={[-7.61, -32.57, 26.02]}
                            rotation={[0.88, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-071"].geometry}
                            material={nodes["p-2-071"].material}
                            position={[-6.02, -32.48, -21.88]}
                            rotation={[-0.99, -1.23, 1.5]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_048.geometry}
                            material={nodes.Princess_048.material}
                            position={[-7.61, -41.42, 2.21]}
                            rotation={[1.46, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-073"].geometry}
                            material={nodes["p-2-073"].material}
                            position={[-6.18, -36.71, -13.38]}
                            rotation={[-1.18, -1.23, 1.6]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_080.geometry}
                            material={nodes.Princess_080.material}
                            position={[-5.51, 29.46, -31.85]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_094.geometry}
                            material={nodes.Princess_094.material}
                            position={[-7.61, -32.57, -26.02]}
                            rotation={[2.26, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_086.geometry}
                            material={nodes.Princess_086.material}
                            position={[-7.61, -2.08, -41.61]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_097.geometry}
                            material={nodes.Princess_097.material}
                            position={[-7.61, -38.86, -14.79]}
                            rotation={[1.97, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_092.geometry}
                            material={nodes.Princess_092.material}
                            position={[-7.61, -26.5, -32.16]}
                            rotation={[2.53, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-2"].geometry}
                            material={nodes["p-2-2"].material}
                            position={[4.21, 34.06, 19.74]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_098.geometry}
                            material={nodes.Princess_098.material}
                            position={[-7.61, -40.14, -10.68]}
                            rotation={[1.88, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_007.geometry}
                            material={nodes.Princess_007.material}
                            position={[-1.28, 36.37, 23.72]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_037.geometry}
                            material={nodes.Princess_037.material}
                            position={[-7.61, -15.04, 38.84]}
                            rotation={[0.31, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_014.geometry}
                            material={nodes.Princess_014.material}
                            position={[-7.46, 10.88, 41.06]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_043.geometry}
                            material={nodes.Princess_043.material}
                            position={[-7.61, -35.08, 22.51]}
                            rotation={[0.96, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_033.geometry}
                            material={nodes.Princess_033.material}
                            position={[5.5, 39.95, 16.05]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_075.geometry}
                            material={nodes.Princess_075.material}
                            position={[-7.14, 20.23, -37.87]}
                            rotation={[-2.97, -0.06, -3.14]}
                            scale={[-1.15, 1.09, 1.1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_039.geometry}
                            material={nodes.Princess_039.material}
                            position={[-7.61, -22.97, 34.78]}
                            rotation={[0.49, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_081.geometry}
                            material={nodes.Princess_081.material}
                            position={[-6.73, 25.03, -35.32]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_045.geometry}
                            material={nodes.Princess_045.material}
                            position={[-7.61, -38.86, 14.79]}
                            rotation={[1.17, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_087.geometry}
                            material={nodes.Princess_087.material}
                            position={[-7.61, -6.48, -41.2]}
                            rotation={[3.01, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_077.geometry}
                            material={nodes.Princess_077.material}
                            position={[1.85, 38.54, -19.53]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_093.geometry}
                            material={nodes.Princess_093.material}
                            position={[-7.61, -29.71, -29.25]}
                            rotation={[2.41, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_083.geometry}
                            material={nodes.Princess_083.material}
                            position={[-7.46, 10.88, -41.06]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_099.geometry}
                            material={nodes.Princess_099.material}
                            position={[-7.61, -40.96, -6.51]}
                            rotation={[1.76, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_089.geometry}
                            material={nodes.Princess_089.material}
                            position={[-7.61, -15.04, -38.84]}
                            rotation={[2.83, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_095.geometry}
                            material={nodes.Princess_095.material}
                            position={[-7.61, -35.08, -22.51]}
                            rotation={[2.18, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_034.geometry}
                            material={nodes.Princess_034.material}
                            position={[-7.14, 20.23, 37.87]}
                            rotation={[-0.17, -0.06, 0]}
                            scale={[1.15, 1.09, 1.1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_040.geometry}
                            material={nodes.Princess_040.material}
                            position={[-7.61, -26.5, 32.16]}
                            rotation={[0.61, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_046.geometry}
                            material={nodes.Princess_046.material}
                            position={[-7.61, -40.14, 10.68]}
                            rotation={[1.27, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_078.geometry}
                            material={nodes.Princess_078.material}
                            position={[-1.28, 36.37, -23.72]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_084.geometry}
                            material={nodes.Princess_084.material}
                            position={[-7.48, 6.61, -41.66]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_090.geometry}
                            material={nodes.Princess_090.material}
                            position={[-7.61, -19.18, -37.01]}
                            rotation={[2.74, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_096.geometry}
                            material={nodes.Princess_096.material}
                            position={[-7.61, -37.16, -18.72]}
                            rotation={[2.08, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                    </group>
                    <group
                        position={[-0.24, 1.09, 0]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={0.03}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-081"].geometry}
                            material={nodes["p-2-081"].material}
                            position={[-4.73, 5.56, 39.19]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-087"].geometry}
                            material={nodes["p-2-087"].material}
                            position={[-4.64, -7.62, 38.44]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-093"].geometry}
                            material={nodes["p-2-093"].material}
                            position={[-6.15, -34.86, 17.75]}
                            rotation={[-1.99, -1.25, 1.63]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-099"].geometry}
                            material={nodes["p-2-099"].material}
                            position={[-5.23, -26.57, -29.17]}
                            rotation={[3.04, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-105"].geometry}
                            material={nodes["p-2-105"].material}
                            position={[-5.07, -15.63, -35.88]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-111"].geometry}
                            material={nodes["p-2-111"].material}
                            position={[-6.17, -38.95, -0.25]}
                            rotation={[-1.63, -1.2, 1.53]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-117"].geometry}
                            material={nodes["p-2-117"].material}
                            position={[-3.17, 22.82, -33.27]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-123"].geometry}
                            material={nodes["p-2-123"].material}
                            position={[-3.83, 18.74, -35.57]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_105.geometry}
                            material={nodes.Princess_105.material}
                            position={[-6.73, 25.03, 35.32]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_111.geometry}
                            material={nodes.Princess_111.material}
                            position={[5.5, 39.95, 16.05]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-078"].geometry}
                            material={nodes["p-2-078"].material}
                            position={[-0.62, 29.63, 26.85]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_117.geometry}
                            material={nodes.Princess_117.material}
                            position={[1.85, 38.54, -19.53]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-084"].geometry}
                            material={nodes["p-2-084"].material}
                            position={[-4.31, 14.51, 37.39]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_123.geometry}
                            material={nodes.Princess_123.material}
                            position={[-7.61, -22.97, -34.78]}
                            rotation={[2.65, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_129.geometry}
                            material={nodes.Princess_129.material}
                            position={[-7.61, -2.08, -41.61]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-090"].geometry}
                            material={nodes["p-2-090"].material}
                            position={[-5.23, -26.57, 29.17]}
                            rotation={[0.1, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_135.geometry}
                            material={nodes.Princess_135.material}
                            position={[-7.61, -10.84, -40.25]}
                            rotation={[2.92, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-096"].geometry}
                            material={nodes["p-2-096"].material}
                            position={[-5.11, -19.48, 33.97]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_138.geometry}
                            material={nodes.Princess_138.material}
                            position={[-7.61, -19.18, -37.01]}
                            rotation={[2.74, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-102"].geometry}
                            material={nodes["p-2-102"].material}
                            position={[-6.09, -38, -8.78]}
                            rotation={[-1.38, -1.21, 1.53]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_141.geometry}
                            material={nodes.Princess_141.material}
                            position={[-7.61, -41.42, 2.21]}
                            rotation={[1.46, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-108"].geometry}
                            material={nodes["p-2-108"].material}
                            position={[-6.02, -32.48, -21.88]}
                            rotation={[-0.99, -1.23, 1.5]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-114"].geometry}
                            material={nodes["p-2-114"].material}
                            position={[-6.15, -38.77, 4.28]}
                            rotation={[-1.7, -1.2, 1.56]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-120"].geometry}
                            material={nodes["p-2-120"].material}
                            position={[-4.73, 5.56, -39.19]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_102.geometry}
                            material={nodes.Princess_102.material}
                            position={[-1.28, 36.37, 23.72]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_108.geometry}
                            material={nodes.Princess_108.material}
                            position={[-7.31, 15.49, 39.8]}
                            scale={[1, 1.02, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_114.geometry}
                            material={nodes.Princess_114.material}
                            position={[-7.14, 20.23, 37.87]}
                            rotation={[-0.17, -0.06, 0]}
                            scale={[1.15, 1.09, 1.1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_120.geometry}
                            material={nodes.Princess_120.material}
                            position={[-3.61, 33.32, -28.05]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_126.geometry}
                            material={nodes.Princess_126.material}
                            position={[-7.61, -37.16, -18.72]}
                            rotation={[2.08, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_132.geometry}
                            material={nodes.Princess_132.material}
                            position={[-6.73, 25.03, -35.32]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-076"].geometry}
                            material={nodes["p-2-076"].material}
                            position={[1.54, 32.2, 23.25]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-079"].geometry}
                            material={nodes["p-2-079"].material}
                            position={[7.27, 35.24, 16.63]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_145.geometry}
                            material={nodes.Princess_145.material}
                            position={[-7.61, -37.16, 18.72]}
                            rotation={[1.07, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_144.geometry}
                            material={nodes.Princess_144.material}
                            position={[-7.61, -19.18, 37.01]}
                            rotation={[0.4, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-082"].geometry}
                            material={nodes["p-2-082"].material}
                            position={[-2.09, 26.48, 30.18]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_147.geometry}
                            material={nodes.Princess_147.material}
                            position={[-7.61, -35.08, 22.51]}
                            rotation={[0.96, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-077"].geometry}
                            material={nodes["p-2-077"].material}
                            position={[4.21, 34.06, 19.74]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_150.geometry}
                            material={nodes.Princess_150.material}
                            position={[-7.61, -40.14, 10.68]}
                            rotation={[1.27, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-085"].geometry}
                            material={nodes["p-2-085"].material}
                            position={[-4.49, 10.03, 38.55]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-086"].geometry}
                            material={nodes["p-2-086"].material}
                            position={[-4.63, -3.42, 39.12]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-091"].geometry}
                            material={nodes["p-2-091"].material}
                            position={[-4.99, -11.63, 37.33]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-088"].geometry}
                            material={nodes["p-2-088"].material}
                            position={[-5.18, -23.18, 31.74]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-095"].geometry}
                            material={nodes["p-2-095"].material}
                            position={[-5.07, -15.63, 35.88]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-097"].geometry}
                            material={nodes["p-2-097"].material}
                            position={[-4.99, -11.63, -37.33]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-103"].geometry}
                            material={nodes["p-2-103"].material}
                            position={[-4.63, -3.42, -39.12]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-109"].geometry}
                            material={nodes["p-2-109"].material}
                            position={[-4.64, -7.62, -38.44]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-104"].geometry}
                            material={nodes["p-2-104"].material}
                            position={[-6.15, -38.77, -4.28]}
                            rotation={[-1.44, -1.2, 1.58]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-115"].geometry}
                            material={nodes["p-2-115"].material}
                            position={[4.21, 34.06, -19.74]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-121"].geometry}
                            material={nodes["p-2-121"].material}
                            position={[-4.49, 10.03, -38.55]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-113"].geometry}
                            material={nodes["p-2-113"].material}
                            position={[-6.18, -36.71, 13.38]}
                            rotation={[-1.96, -1.23, 1.54]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-094"].geometry}
                            material={nodes["p-2-094"].material}
                            position={[-4.73, 0.92, 39.19]}
                            rotation={[0.05, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_103.geometry}
                            material={nodes.Princess_103.material}
                            position={[-3.61, 33.32, 28.05]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-122"].geometry}
                            material={nodes["p-2-122"].material}
                            position={[-0.62, 29.63, -26.85]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-100"].geometry}
                            material={nodes["p-2-100"].material}
                            position={[-4.73, 0.92, -39.19]}
                            rotation={[3.09, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_109.geometry}
                            material={nodes.Princess_109.material}
                            position={[-7.48, 6.61, 41.66]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_107.geometry}
                            material={nodes.Princess_107.material}
                            position={[-7.46, 10.88, 41.06]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-106"].geometry}
                            material={nodes["p-2-106"].material}
                            position={[-5.34, -29.77, -25.82]}
                            rotation={[2.97, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_115.geometry}
                            material={nodes.Princess_115.material}
                            position={[-7.61, -41.42, -2.21]}
                            rotation={[1.68, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-112"].geometry}
                            material={nodes["p-2-112"].material}
                            position={[-6.09, -38, 8.78]}
                            rotation={[-1.76, -1.21, 1.61]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_116.geometry}
                            material={nodes.Princess_116.material}
                            position={[-7.61, -40.96, -6.51]}
                            rotation={[1.76, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_121.geometry}
                            material={nodes.Princess_121.material}
                            position={[-5.51, 29.46, -31.85]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-118"].geometry}
                            material={nodes["p-2-118"].material}
                            position={[1.54, 32.2, -23.25]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_125.geometry}
                            material={nodes.Princess_125.material}
                            position={[-7.61, -29.71, -29.25]}
                            rotation={[2.41, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_127.geometry}
                            material={nodes.Princess_127.material}
                            position={[-7.61, -38.86, -14.79]}
                            rotation={[1.97, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_134.geometry}
                            material={nodes.Princess_134.material}
                            position={[-7.61, -6.48, -41.2]}
                            rotation={[3.01, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_133.geometry}
                            material={nodes.Princess_133.material}
                            position={[-7.61, -15.04, -38.84]}
                            rotation={[2.83, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-124"].geometry}
                            material={nodes["p-2-124"].material}
                            position={[7.27, 35.24, -16.63]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_143.geometry}
                            material={nodes.Princess_143.material}
                            position={[-7.61, -26.5, 32.16]}
                            rotation={[0.61, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_139.geometry}
                            material={nodes.Princess_139.material}
                            position={[-7.61, -22.97, 34.78]}
                            rotation={[0.49, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_106.geometry}
                            material={nodes.Princess_106.material}
                            position={[-7.58, 2.28, 41.82]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_152.geometry}
                            material={nodes.Princess_152.material}
                            position={[5.5, 39.95, -16.05]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_148.geometry}
                            material={nodes.Princess_148.material}
                            position={[-7.61, -15.04, 38.84]}
                            rotation={[0.31, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-080"].geometry}
                            material={nodes["p-2-080"].material}
                            position={[-3.83, 18.74, 35.57]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-089"].geometry}
                            material={nodes["p-2-089"].material}
                            position={[-6.02, -32.48, 21.88]}
                            rotation={[-2.15, -1.23, 1.64]}
                            scale={0.02}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_112.geometry}
                            material={nodes.Princess_112.material}
                            position={[-7.61, -6.48, 41.2]}
                            rotation={[0.13, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-098"].geometry}
                            material={nodes["p-2-098"].material}
                            position={[-5.11, -19.48, -33.97]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_118.geometry}
                            material={nodes.Princess_118.material}
                            position={[-1.28, 36.37, -23.72]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-107"].geometry}
                            material={nodes["p-2-107"].material}
                            position={[-6.18, -36.71, -13.38]}
                            rotation={[-1.18, -1.23, 1.6]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_124.geometry}
                            material={nodes.Princess_124.material}
                            position={[-7.31, 15.49, -39.8]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1.02, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-116"].geometry}
                            material={nodes["p-2-116"].material}
                            position={[-2.09, 26.48, -30.18]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_130.geometry}
                            material={nodes.Princess_130.material}
                            position={[-7.46, 10.88, -41.06]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_101.geometry}
                            material={nodes.Princess_101.material}
                            position={[1.85, 38.54, 19.53]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_136.geometry}
                            material={nodes.Princess_136.material}
                            position={[-7.61, -26.5, -32.16]}
                            rotation={[2.53, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_110.geometry}
                            material={nodes.Princess_110.material}
                            position={[-7.61, -10.84, 40.25]}
                            rotation={[0.22, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_142.geometry}
                            material={nodes.Princess_142.material}
                            position={[-7.61, -29.71, 29.25]}
                            rotation={[0.73, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_119.geometry}
                            material={nodes.Princess_119.material}
                            position={[-7.61, -35.08, -22.51]}
                            rotation={[2.18, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_151.geometry}
                            material={nodes.Princess_151.material}
                            position={[-7.14, 20.23, -37.87]}
                            rotation={[-2.97, -0.06, -3.14]}
                            scale={[-1.15, 1.09, 1.1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-083"].geometry}
                            material={nodes["p-2-083"].material}
                            position={[-3.17, 22.82, 33.27]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_128.geometry}
                            material={nodes.Princess_128.material}
                            position={[-7.61, -40.14, -10.68]}
                            rotation={[1.88, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-092"].geometry}
                            material={nodes["p-2-092"].material}
                            position={[-5.34, -29.77, 25.82]}
                            rotation={[0.17, 0, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_137.geometry}
                            material={nodes.Princess_137.material}
                            position={[-7.61, -32.57, -26.02]}
                            rotation={[2.26, 0, -Math.PI]}
                            scale={[-0.98, 0.98, 0.98]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-101"].geometry}
                            material={nodes["p-2-101"].material}
                            position={[-6.15, -34.86, -17.75]}
                            rotation={[-1.15, -1.25, 1.51]}
                            scale={[-0.02, 0.02, 0.02]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_146.geometry}
                            material={nodes.Princess_146.material}
                            position={[-7.61, -32.57, 26.02]}
                            rotation={[0.88, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-110"].geometry}
                            material={nodes["p-2-110"].material}
                            position={[-5.18, -23.18, -31.74]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["p-2-119"].geometry}
                            material={nodes["p-2-119"].material}
                            position={[-4.31, 14.51, -37.39]}
                            rotation={[-Math.PI, 0, Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_104.geometry}
                            material={nodes.Princess_104.material}
                            position={[-5.51, 29.46, 31.85]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_113.geometry}
                            material={nodes.Princess_113.material}
                            position={[-7.61, -2.08, 41.61]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_122.geometry}
                            material={nodes.Princess_122.material}
                            position={[-7.58, 2.28, -41.82]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_131.geometry}
                            material={nodes.Princess_131.material}
                            position={[-7.48, 6.61, -41.66]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                            scale={[-1, 1, 1]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_140.geometry}
                            material={nodes.Princess_140.material}
                            position={[-7.61, -40.96, 6.51]}
                            rotation={[1.38, 0, 0]}
                            scale={0.98}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Princess_149.geometry}
                            material={nodes.Princess_149.material}
                            position={[-7.61, -38.86, 14.79]}
                            rotation={[1.17, 0, 0]}
                            scale={0.98}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dia002.geometry}
                        material={nodes.dia002.material}
                        position={[0, 2.32, -0.37]}
                        rotation={[-0.17, 0, 0]}
                        scale={0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dia007.geometry}
                        material={nodes.dia007.material}
                        position={[0.28, 2.32, 0.27]}
                        rotation={[-2.9, -0.77, -2.97]}
                        scale={0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dia004.geometry}
                        material={nodes.dia004.material}
                        position={[-0.42, 2.32, 0]}
                        rotation={[-Math.PI / 2, 1.4, Math.PI / 2]}
                        scale={0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Heart_002.geometry}
                        material={nodes.Heart_002.material}
                        position={[0, 2.11, -0.6]}
                        scale={0.03}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dia006.geometry}
                        material={nodes.dia006.material}
                        position={[0, 2.32, 0.37]}
                        rotation={[-2.97, 0, Math.PI]}
                        scale={0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dia.geometry}
                        material={nodes.dia.material}
                        position={[0.41, 2.32, 0]}
                        rotation={[-Math.PI / 2, -1.4, -Math.PI / 2]}
                        scale={0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Diamond_Oval.geometry}
                        material={nodes.Diamond_Oval.material}
                        position={[0, 2.46, 0]}
                        scale={0.03}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Heart_1.geometry}
                        material={nodes.Heart_1.material}
                        position={[0, 2.1, 0.62]}
                        scale={0.03}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dia001.geometry}
                        material={nodes.dia001.material}
                        position={[0.28, 2.32, -0.27]}
                        rotation={[-0.24, -0.77, -0.17]}
                        scale={0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dia005.geometry}
                        material={nodes.dia005.material}
                        position={[-0.28, 2.32, 0.27]}
                        rotation={[-2.9, 0.77, 2.97]}
                        scale={0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.dia003.geometry}
                        material={nodes.dia003.material}
                        position={[-0.28, 2.32, -0.27]}
                        rotation={[-0.24, 0.77, 0.17]}
                        scale={0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["chaton-heart-1"].geometry}
                        material={materials.White}
                        position={[0, 2.1, -0.57]}
                        rotation={[2.44, 0, -Math.PI]}
                        scale={0.03}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["chaton-heart-2"].geometry}
                        material={materials.White}
                        position={[0, 2.1, 0.56]}
                        rotation={[0.7, 0, 0]}
                        scale={0.03}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ring_3.geometry}
                        material={materials.White}
                        position={[0.07, 1.12, 0]}
                        rotation={[Math.PI / 2, 0, Math.PI / 2]}
                        scale={0.03}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.entourage.geometry}
                        material={materials.White}
                        position={[0, 2.4, 0]}
                        scale={0.02}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/ring.glb");