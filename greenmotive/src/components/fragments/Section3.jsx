import React from 'react'
import photo from '../../assets/big_rock.png'
function Section3() {
  const data = [
    {
      title: "Resource",
      icon: "ri-settings-6-line",
      msg1: "eco-urban",
      msg2: "development",
    },
    {
      title: "Management",
      icon: "ri-tools-line",
      msg1: "conservation",
      msg2: "technologies",
    },
    {
      title: "Development",
      icon: "ri-loop-right-line",
      msg1: "Restore Our",
      msg2: "Oceans",
    },
  ]
  return (
    <div className='relative min-h-[100vh] pt-40 flex flex-col items-center gap-32'>
      <div className='-z-10 absolute left-0 top-0 w-full h-[100vh] overflow-hidden '>
        <img className='w-full h-full object-cover ' src={photo} alt="" />
      </div>
      <p className='text-8xl font-semibold text-center'>GreenMotive</p>
      <div className='flex gap-20'>
        {
          data.map((e, i) => (
            <div key={i} className='border border-gray-200 shadow-inner-custom min-w-[300px]  rounded-2xl p-10 flex flex-col gap-20 items-center backdrop-blur-md'>
              <div className='text-xl bg-white p-3 px-5 rounded-xl'>
                <p>{e.title}</p>
              </div>
              <div className='text-8xl'>
                <i className={e.icon}></i>
              </div>
              <p className='text-center text-xl font-semibold uppercase'>{e.msg1} <br />{e.msg2}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Section3