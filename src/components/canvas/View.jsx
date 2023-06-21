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
      ambientStrength: { value: 0.05, min: 0, max: 1, step: 0.01 },
      ambientColor: "white",
      pointLightIntensity: { value: 5, min: 0, max: 10, step: 0.01 },
      pointLightColor: "white",
    }
  })

  const lightControls = useControls("Światło", config)

  return (
    <Suspense fallback={null}>
      {color && <color attach='background' args={[color]} />}
      <ambientLight color={lightControls.ambientColor} intensity={lightControls.ambientStrength} />
      {/* Left/Right Lights */}
      <pointLight position={[20, 0, 10]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      <pointLight position={[-20, 0, 10]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      {/* Top Side Lights */}
      <pointLight position={[10, 10, 10]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity + 0.5} />
      <pointLight position={[-10, 10, 10]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity + 0.5} />
      {/* Bottom Side Lights */}
      <pointLight position={[10, 10, -10]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity + 0.5} />
      <pointLight position={[-10, 10, -10]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity + 0.5} />
      {/* Top/Bottom Lights */}
      <pointLight position={[0, 30, 0]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      <pointLight position={[0, -30, 0]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      {/* Front Light */}
      <pointLight position={[0, 0, -10]} color={lightControls.pointLightColor} intensity={lightControls.pointLightIntensity} />
      <PerspectiveCamera makeDefault fov={30} position={[0, 0, 6]} />
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
            <OrbitControls />}
          {spaceDust && <SpaceDust count={250} />}
          {/* <EffectComposer>
            <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
            {noise && <Noise />}
          </EffectComposer> */}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
