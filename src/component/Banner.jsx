import React from 'react'
import Container from '../ui/Container'
import Title from '../ui/Title'

const Banner = () => {
  return (
    <div className="pb-16"> {/* Extra padding at the bottom if needed */}
      <div className="bg-[url('https://i.ibb.co/Hg941nR/Hero-Image.png')] pb-6 pt-[200px] mx-h-[720px] object-contain w-full bg-cover">
        <Container className="mx-auto ">
          <div className="item">
                <div className="title max-w-[480px] leading-[48px] flex flex-col gap-[16px]">
                    <Title className="text-[40px] font-bold" title="Experience the City Tour  -Your Ticket to Freedom & Adventure" />
                    <p className="text-[18px] text-white leading-[28px] font-inter">
                    Enjoy unlimited stops and start exploring the city's top sights at your own pace
                    </p>
                </div>
                <div className="item bg-white max-w-[1160px] mx-auto mt-[100px] mb-10">
                    <div className="">
                          dfgdfgdf lorem
                    </div>
                </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Banner
