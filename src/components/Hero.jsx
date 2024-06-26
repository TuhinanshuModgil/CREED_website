import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { default as LoaderSVG} from '../../public/Round_Loader.svg'
import { useEffect, useState } from 'react'
export default function Hero() {
  const carbonCounterTarget = 15000
  let carbonCountTracker = 0
  const counterSpeed = 10
  const counterStep = 24
  const [carbonCount, setCarbonCount] = useState(0)

  function updateCarbonCounter(){
    
    if(carbonCounterTarget>carbonCountTracker){
      // console.log(carbonCountTracker)
      setCarbonCount(prev => 
        { carbonCountTracker = prev + counterStep
          return carbonCountTracker})

      setTimeout(updateCarbonCounter, counterSpeed)

    }
    else{
      // console.log("Reached Here")
      setCarbonCount(carbonCounterTarget)
    }
  }
  useEffect(
    ()=>{ 
      updateCarbonCounter()
    }
  ,[])


  return (
    <div className="relative isolate overflow-hidden bg-white">
        {/* this gives the bg-grid pattern */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 justify-between">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* <img
            className="h-11"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </a>
          </div> */}
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Leading the charge towards sustainable solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          CREED at IIT Ropar is at the forefront of pioneering initiatives, igniting progress towards a brighter, more sustainable world.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-tertairy-color-one px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Our Services
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          {/* <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div> */}
          <div className='flex items-center relative w-full justify-center'>
            {/* <image src={loaderSVG} className='w-4' /> */}
            <img className='w-96 animaton-cell ' src={LoaderSVG} />
            <div className='w-full h-1/2 absolute bottom-0 bg-white  flex flex-col'>
            
            <h1 className='text-7xl font-bold text-green-500 text-center'>
            {carbonCount}+
            </h1>
            <p className='text-xl text-center font-semibold text-gray-600'>
              Tons of CO2 saved
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
