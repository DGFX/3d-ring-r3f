'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef, useState, useMemo } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { useControls } from 'leva'
import { Three } from '@/helpers/components/Three'
import { SpaceDust } from './SpaceDust'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'

export const Common = ({ color }) => {
  const config = useMemo(() => {
    return {
      ambientStrength: { value: 0, min: 0, max: 1, step: 0.01 },
      ambientColor: "white",
      pointLightIntensity: { value: 0, min: 0, max: 25, step: 0.01 },
      pointLightColor: "white",
    }
  })

  const cameraConfig = useMemo(() => {
    return {
      x: { value: 0, min: -20, max: 20, step: 0.01 },
      y: { value: 0, min: -20, max: 20, step: 0.01 },
      z: { value: 6, min: -20, max: 20, step: 0.01 },
    }
  })

  const lightControls = useControls("Światło", config)
  const cameraControls = useControls("Kamera", cameraConfig)

  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      <ambientLight color={lightControls.ambientColor} intensity={lightControls.ambientStrength} />
      {/* Left/Right Lights */}
      <pointLight position={[30, 0, 20]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      <pointLight position={[-30, 0, 20]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      {/* Top Side Lights */}
      <pointLight position={[20, 20, 20]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity + 0.5} />
      <pointLight position={[-20, 20, 20]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity + 0.5} />
      {/* Bottom Side Lights */}
      <pointLight position={[20, 20, -20]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity + 0.5} />
      <pointLight position={[-20, 20, -20]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity + 0.5} />
      {/* Top/Bottom Lights */}
      <pointLight position={[0, 40, 0]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      <pointLight position={[0, -40, 0]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      {/* Front Light */}
      <pointLight position={[0, 0, -20]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      <PerspectiveCamera makeDefault fov={30} position={[cameraControls.x, cameraControls.y, cameraControls.z]} />
    </Suspense>
  )
}

const View = forwardRef(({ children, orbit, spaceDust, noise, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit &&
            <OrbitControls enablePan={false} enableZoom={false} />}
          {spaceDust && <SpaceDust count={250} />}
          <EffectComposer>
            <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
            {noise && <Noise />}
          </EffectComposer>
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
