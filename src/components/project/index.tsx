'use client';
import {  useRef } from 'react';
import { useScroll } from 'motion/react';
import { data } from './data';
import { Card } from './card';


export const  Project =()  =>{
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} className={"relative py-40 bg-indigo-500"}>
      {
        data.map( (project, i) => {
          const targetScale = 1 - ( (data.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
      <div className='flex justify-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>See More</button>
      </div>
    </div>
  )
}
