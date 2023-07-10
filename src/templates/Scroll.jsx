// https://github.com/studio-freight/lenis
// TODO refactor for app-directory
// See https://github.com/pmndrs/react-three-next/pull/123

// 1 - wrap <Component {...pageProps} /> with <Scroll /> in _app.jsx
// 2 - add <ScrollTicker /> wherever in the canvas
// 3 - enjoy
import { addEffect, useFrame } from '@react-three/fiber'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { useRef } from 'react'
import * as THREE from 'three'

const state = {
  top: 0,
  progress: 0,
}

const { damp } = THREE.MathUtils

export default function Scroll({ children }) {
  const content = useRef(null)
  const wrapper = useRef(null)


  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapper.current,
      content: content.current,
      gestureOrientation: "vertical",
      normalizeWheel: false,
      smoothTouch: false,
    })
    lenis.on('scroll', ({ scroll, progress }) => {
      state.top = scroll
      state.progress = progress
    })
    const effectSub = addEffect((time) => lenis.raf(time))
    return () => {
      effectSub()
      lenis.destroy()
    }
  }, [])

  return (
    <div
      ref={wrapper}
      data-lenis=""
      style={{
        overflow: "scroll",
        height: "100vh",
        overflowX: "hidden"
      }}
    >
      <div
        ref={content}
      >
        {children}
      </div>
    </div>
  )
}

export const ScrollTicker = ({ smooth = 9999999 }) => {
  useFrame(({ viewport, camera }, delta) => {
    camera.position.y = damp(camera.position.y, -state.progress * viewport.height, smooth, delta)
  })

  return null
}
