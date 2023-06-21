'use client'
import { useState } from "react"
import { Canvas, useThree } from '@react-three/fiber'
import { PerformanceMonitor, Preload, Loader } from '@react-three/drei'
import { r3f } from '@/helpers/global'

function AdaptivePixelRatio() {
  const current = useThree((state) => state.performance.current)
  const setPixelRatio = useThree((state) => state.setPixelRatio)
  useEffect(() => {
    setPixelRatio(window.devicePixelRatio * current)
  }, [current])
  return null
}

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const [dpr, setDpr] = useState(1)

  function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  }



  return (
    <>
      <Canvas performance={{ min: 0.5 }} {...props} frameloop="demand" dpr={window.devicePixelRatio}>
        <PerformanceMonitor onChange={({ factor }) => setDpr(round(0.5 + 1.5 * factor, 1))}>
          {/* @ts-ignore */}
          <r3f.Out />
          <Preload all />
          {/* <AdaptivePixelRatio /> */}
        </PerformanceMonitor>
      </Canvas>
      <Loader />
    </>
  )
}
