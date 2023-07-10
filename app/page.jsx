'use client'
import dynamic from 'next/dynamic'
import { useMemo } from "react"
import ExampleRing from "@/components/models/exampleRing"
import OlszarRing from "@/components/models/olszarRing"
import { FinalRing } from '@/components/models/finalRing'
import { useControls } from 'leva'
import Scroll, { ScrollTicker } from '@/templates/Scroll'

// const ExampleRing = dynamic(() => import("@/components/models/exampleRing").then(mod => mod.ExampleRing), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })


export default function Page() {

  const config = useMemo(() => {
    return {
      orbit: true,
      spaceDust: false
    }
  }, [])
  const sceneControls = useControls("Scena", config)

  return (
    <>
      <section className="h-[100vh]">
        <div className='container mx-auto h-full'>
          <div className='flex w-full flex-col items-center justify-between content-between p-12 text-center h-full'>
            <div>
              <h1>OLSZAR</h1>
              <p className='w-full uppercase'>Jubiler & Pracownia Złotnicza</p>
            </div>
            <div>
              <p className='pb-[25px] max-w-[553px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in magna sodales, commodo nibh lobortis, congue nisi. Vestibulum ipsum lorem, facilisis sed nisi id, venenatis vulputate urna. Curabitur ac leo non massa laoreet placerat.</p>
              <button className='fontSize-sm'>historia marki olszar</button>
            </div>
          </div>
        </div>
      </section>
      <div className='h-[30vh]'></div>
      <section className="h-[100vh]">
        <div className='h-[50vh]'></div>

        <div className="container mx-auto h-full">
          <div className="flex flex-col justify-start max-w-[550px] gap-[3rem]">

            <h2>Lorem ipsum dolor sit</h2>
            <p>Quisque turpis tortor, interdum quis magna nec, egestas venenatis tortor. Praesent sit amet libero luctus, auctor mauris et, malesuada mi. Praesent metus erat, luctus quis iaculis vel, sodales quis orci.</p>
            <button>Historia marki OLSZAR</button>
          </div>
        </div>
      </section>
      <div className='h-[30vh]'></div>
      <section className="h-[100vh]">
        <div className="container mx-auto h-full">
          <div className="ml-auto flex flex-col justify-start max-w-1/2 gap-[3rem]">
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in magna sodales, commodo nibh lobortis, congue nisi. Vestibulum ipsum lorem, facilisis sed nisi id, venenatis vulputate urna. Curabitur ac leo non massa laoreet placerat.</p>
          </div>
        </div>
      </section>
      <div className='h-[30vh]'></div>
      <section className="h-[100vh]">
        <div className="container mx-auto h-full">
          <div className="flex flex-col justify-start max-w-1/2 gap-[3rem]">
            <h2>Lorem ipsum dolor sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in magna sodales, commodo nibh lobortis, congue nisi. Vestibulum ipsum lorem, facilisis sed nisi id, venenatis vulputate urna. Curabitur ac leo non massa laoreet placerat.</p>
            <button>Historia marki OLSZAR</button>
          </div>
        </div>
      </section>
      <div className='h-[30vh]'></div>
      <section className="h-[100vh]">
        <div className='container mx-auto h-full'>
          <div className='flex w-full flex-col items-center justify-between content-between p-12 text-center h-full'>
            <div>
              <h2 className='leading-none'>skonfiguruj własną biżuterię</h2>
            </div>
            <div>
              <p className='pb-[25px] max-w-[553px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in magna sodales, commodo nibh lobortis, congue nisi. Vestibulum ipsum lorem, facilisis sed nisi id, venenatis vulputate urna. Curabitur ac leo non massa laoreet placerat.</p>
              <button className='fontSize-sm'>historia marki olszar</button>
            </div>
          </div>
        </div>
      </section>


      <View {...sceneControls} className='fixed top-0 flex h-screen w-full pointer-events-none z-5'>
        <FinalRing />
        {/* <ExampleRing /> */}
        <Common />
        <ScrollTicker />
      </View>
    </>
  )
}
