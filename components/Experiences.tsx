import React from 'react'

const Experiences = () => {
  return (
    <div id='experiences' className='w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Experiences
      </p>
      <h2 className='py-4'>Summer 2022</h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 pb-40'>
      <div className="flex">
                    <div className="workCont">
                        <div className="workInfoCont">
                            <h3>Quickdesk.io</h3>
                            <h3>June 2022 - August 2022</h3>
                        </div>
                        <p className="workText">
                            Here I worked part-time with a team of over 80 people to write helpful and
                            production-quality code in order to teach an AI model to do the same.
                            My main focus was in Javascript and Typescript but I also trained
                            the bot in Rust and C.
                        </p>
                    </div>
                </div>
    </div>
    </div>
    </div>

  )
}

export default Experiences