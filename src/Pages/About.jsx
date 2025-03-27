import React, { useEffect } from 'react'
import Hero from '../Components/Hero.jsx'
import servicePlate from "../assets/servicePlate.png"
import { Link } from 'react-router-dom'
import BouncingArrow from '../Components/BouncingArrow.jsx'
import { FaStar } from 'react-icons/fa'
import food1 from "../assets/food1.svg"
import food2 from "../assets/food2.svg"
import food3 from "../assets/food3.svg"
import food4 from "../assets/food4.svg"
import staff from "../assets/staffe.svg"

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0); // Remonte tout en haut
  }, []);


  return ( 
    <div>

      <Hero title={"About Us"} height={"500px"} imageUrl={"https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"}/>

      <section className="sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20 text-black">

        <div className="flex flex-col md:flex-row gap-8">
          
          <div className="flex flex-1 flex-col bg-[#ffe186] py-4 px-5 rounded-t-4xl">

            <div className="flex items-center justify-between">
              <div className="bg-[#FFC107] text-white p-3 w-16 rounded-full">
                  <img className="" src={food3}/>
              </div>
              
              <h2 className="text-5xl text-[#fff]">01</h2>

            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-2xl">Fresh Tasty Meals</h2>
                <p className="text-xl">Made with high-quality ingredients for great flavor. </p>
            </div>

          </div>

          <div className="flex flex-1 flex-col bg-[#ffe186] py-4 px-5 rounded-t-4xl">

<div className="flex items-center justify-between">
  <div className="bg-[#FFC107] text-white p-3 w-16 rounded-full">
      <img className="" src={food2}/>
  </div>
  
  <h2 className="text-5xl text-[#fff]">02</h2>

</div>

<div className="flex flex-col gap-2">
    <h2 className="text-2xl">Quick Service</h2>
    <p className="text-xl"> Get your food fast and fresh! </p>
</div>

          </div>

          <div className="flex flex-1 flex-col bg-[#ffe186] py-4 px-5 rounded-t-4xl">

<div className="flex items-center justify-between">
  <div className="bg-[#FFC107] text-white p-3 w-16 rounded-full">
      <img className="text-white" src={food4}/>
  </div>
  
  <h2 className="text-5xl text-[#fff]">03</h2>

</div>

<div className="flex flex-col gap-2">
    <h2 className="text-2xl">Affordable Prices </h2>
    <p className="text-xl">Delicious meals at great value. </p>
</div>

          </div>

          <div className="flex flex-1 flex-col bg-[#ffe186] py-4 px-5 rounded-t-4xl">

<div className="flex items-center justify-between">
  <div className="bg-[#FFC107] text-white p-3 w-16 rounded-full">
      <img className="text-white" src={food1}/>
  </div>
  
  <h2 className="text-5xl text-[#fff]">04</h2>

</div>

<div className="flex flex-col gap-2">
    <h2 className="text-2xl">Convenient Locations</h2>
    <p className="text-xl"> Easy to find, easy to enjoy. </p>
</div>

          </div>

        </div>

      </section>

      <section className='bg-[#673f00] mb-20 text-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:flex-row justify-between sm:max-w-7xl h-full gap-3 mx-auto px-5 sm:px-12 py-7'>
          
          <div className='h-full w-full flex p-3 gap-5 border-solid border-2 border-[#ffffff65] rounded-2xl'>
            <div className='bg-white w-[70px] rounded-2xl p-1'>
              <img src={servicePlate} alt="" />
            </div>

            <div className='flex flex-col justify-between '>
              <h2 className='text-5xl text-[#FFC107]'>50</h2>
              <b>+ Items Of Foods</b>
            </div>

          </div>

          <div className='h-full w-full flex p-3 gap-5 border-solid border-2 border-[#ffffff65] rounded-2xl'>
            <div className='bg-white w-[70px] rounded-2xl p-1'>
              <img src={servicePlate} alt="" />
            </div>

            <div className='flex flex-col justify-between '>
              <h2 className='text-5xl text-[#FFC107]'>3500</h2>
              <b>+ Satisfied Clients</b>
            </div>

          </div>

          <div className='h-full w-full flex p-3 gap-5 border-solid border-2 border-[#ffffff65] rounded-2xl'>
            <div className='bg-white w-[70px] rounded-2xl p-1'>
              <img src={servicePlate} alt="" />
            </div>

            <div className='flex flex-col justify-between '>
              <h2 className='text-5xl text-[#FFC107]'>04</h2>
              <b>Prices</b>
            </div>

          </div>

          <div className='h-full w-full flex p-3 gap-5 border-solid border-2 border-[#ffffff65] rounded-2xl'>
            <div className='bg-white w-[70px] rounded-2xl p-1'>
              <img src={servicePlate} alt="" />
            </div>

            <div className='flex flex-col justify-between '>
              <h2 className='text-5xl text-[#FFC107]'>05</h2>
              <b>+ Countries</b>
            </div>

          </div>

        </div>
      </section>

      <section className='sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20'>

        <div className='flex flex-col sm:flex-col md:flex-row-reverse gap-10 items-center justify-between flex-wrap h-full w-full'>

          <div className='section-image flex w-full gap-x-4 md:flex-1 h-[200px] sm:h-[350px] md:min-w-sm relative'>
            <div className='self-start bg-center bg-cover w-full h-[90%] rounded-t-full' style={{backgroundImage: `url(https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg)`}}>
            </div>

            <div className='self-end bg-center bg-cover w-full h-[90%] rounded-t-full' style={{backgroundImage: `url(https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg)`}}>
            </div>
          </div>


          <div className='section-description flex-1 min-h-[350px] flex flex-col justify-between sm:gap-0 gap-4'>
            <h2 className='section-title text-5xl text-[#FFC107]'>
              Why Choose Us
            </h2>

            <h3 className='text-4xl md:text-5xl'>
              We provide <span className='text-[#FFC107]'>Quality Food</span>
            </h3>

            <p className='text-[#4e4637]'>
            At our restaurant, freshness is our promise. We are dedicated to serving you carefully prepared meals made from the finest ingredients, ensuring that every bite is as satisfying as the last.
            </p>

            <div className='flex flex-col sm:flex-row gap-5'>
{/* 
              <div className='flex gap-3 bg-[#ffc10781] items-start p-3 rounded-t-3xl'>
                <div className='bg-white flex items-center justify-center w-[100px] p-2 rounded-full my-3'>
                  <img className='' src={servicePlate} alt="" />
                </div>

                <div className='flex flex-col'>
                  <h3>Best Quality Food
                  </h3>
                  <p className='text-[#4e4637]'>At our restaurant, freshness is our promise.</p>
                </div>
              </div>

              <div className='flex gap-3 bg-[#ffc10781] items-start p-3 rounded-t-3xl'>
                <div className='bg-white flex items-center justify-center w-[100px] p-2 rounded-full my-3'>
                  <img className='w-full h-full' src={servicePlate} alt="" />
                </div>

                <div className='flex flex-col'>
                  <h3>Best Quality Food
                  </h3>
                  <p className='text-[#4e4637]'>At our restaurant, freshness is our promise.</p>
                </div>
              </div> */}

              <div>
                
              </div>

            </div>

            <div className='w-[170px]'>
              <Link to={"/menu"} className="p-3 group bg-[#FFC107] rounded-3xl flex items-center gap-3 cta-button relative">
                <span className="absolute inset-0 bg-[#c1564c] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                <span className="z-10">Discover More</span>
                <BouncingArrow />
              </Link>
            </div>

          </div>

        </div>

      </section>

      <section className='testimonials sm:max-w-7xl h-full mx-auto px-5 sm:px-12 mb-20'>

        <h2 className='section-title text-5xl text-[#FFC107] text-center mb-8'>
          Testimonials
        </h2>

        <h3 className='text-4xl md:text-5xl text-center mb-15'>
        What Our Awesome <span className='text-[#FFC107]'>Clients <br />  Say</span> About Us 
        </h3>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

          <div className='flex items-end justify-end border-1 border-solid border-[#ffc1b2]'>
            <div className='flex items-end justify-end bg-[#ffc1b2] w-[95%] h-[95%] pb-8 pr-4'>
              
              <div className='w-[90%] h-full'>
                <div className='flex gap-4'>

                  <div className='flex items-center justify-center profile-image-div  bg-white w-1/4 aspect-square p-2'>
                    <div className='flex items-center justify-center w-[90%] h-[90%] bg-cover bg-center' style={{backgroundImage: `url(https://4kwallpapers.com/images/wallpapers/ichigo-kurosaki-bleach-1920x1200-10510.jpg)`}}>
                    </div>
                  </div>

                  <div className='user-infos'>
                      <h3 className='text-2xl'>David Schish</h3>
                      <h4 className='text-xl text-[#ff6207]'>Customer</h4>
                  </div>
                </div>

                <div className='user-comment mb-5'>
                  <p className='leading-8 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis eos facere rem quasi accusamus sint placeat ullam iure a!
                  </p>
                </div>

                <div className='flex gap-2 text-xl text-[#550000] mb-4'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

              </div>

            </div>
          </div>

          <div className='flex items-end justify-end border-1 border-solid border-[#ffc1b2]'>
            <div className='flex items-end justify-end bg-[#ffc1b2] w-[95%] h-[95%] pb-8 pr-4'>
              
              <div className='w-[90%] h-full'>
                <div className='flex gap-4'>
                  
                  <div className='flex items-center justify-center profile-image-div  bg-white w-1/4 aspect-square p-2'>
                    <div className='flex items-center justify-center w-[90%] h-[90%] bg-cover bg-center' style={{backgroundImage: `url(https://w0.peakpx.com/wallpaper/382/148/HD-wallpaper-zenitsu-agatsuma-demomslayer-demon-slayer-kimetsu-no-yaiba-thumbnail.jpg)`}}>
                    </div>
                  </div>

                  <div className='user-infos'>
                      <h3 className='text-2xl'>David Schish</h3>
                      <h4 className='text-xl text-[#ff6207]'>Customer</h4>
                  </div>
                </div>

                <div className='user-comment mb-5'>
                  <p className='leading-8 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis eos facere rem quasi accusamus sint placeat ullam iure a!
                  </p>
                </div>

                <div className='flex gap-2 text-xl text-[#550000] mb-4'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

              </div>

            </div>
          </div>

          <div className='flex items-end justify-end border-1 border-solid border-[#ffc1b2]'>
            <div className='flex items-end justify-end bg-[#ffc1b2] w-[95%] h-[95%] pb-8 pr-4'>
              
              <div className='w-[90%] h-full'>
                <div className='flex gap-4'>
                  
                  <div className='flex items-center justify-center profile-image-div  bg-white w-1/4 aspect-square p-2'>
                    <div className='flex items-center justify-center w-[90%] h-[90%] bg-cover bg-center' style={{backgroundImage: `url(https://wallpapers-clan.com/wp-content/uploads/2024/04/aesthetic-sanji-smoking-one-piece-desktop-wallpaper-cover.jpg)`}}>
                    </div>
                  </div>

                  <div className='user-infos'>
                      <h3 className='text-2xl'>David Schish</h3>
                      <h4 className='text-xl text-[#ff6207]'>Customer</h4>
                  </div>
                </div>

                <div className='user-comment mb-5'>
                  <p className='leading-8 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perspiciatis eos facere rem quasi accusamus sint placeat ullam iure a!
                  </p>
                </div>

                <div className='flex gap-2 text-xl text-[#550000] mb-4'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

    </div>
  )
}
