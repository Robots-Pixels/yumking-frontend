import React, { useEffect } from "react";
import Hero from "../Components/Hero";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0); // Remonte tout en haut
  }, []);


  return (
    <div>
      <Hero
        title={"Our Gallery"}
        height={"500px"}
        imageUrl={
          "https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"
        }
      />

      <section className="text-center flex flex-col gap-4 pb-20 px-5 sm:px-12">
        <h2 className="section-title text-5xl text-[#FFC107]">
          Our Photo Gallery
        </h2>

        <h3 className="text-4xl md:text-5xl">
          Let's Check <span className="text-[#FFC107]">Our Photo</span> Gallery
        </h3>
      </section>

      <section className="photo-gallery pb-20">
        <div className="sm:max-w-7xl mx-auto px-5 sm:px-12">
          <div className="masonry grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-rows-[minmax(180px,auto)] gap-4">
            
            <div className="row-span-2 overflow-hidden rounded-4xl">
              <img
                className="w-full h-full object-cover"
                src="https://www.upmenu.com/wp-content/uploads/2021/05/11-how-to-start-a-fast-food-restaurant-fast-food-restaurant-staff.jpg"
                alt="Food 1"
              />
            </div>

            <div className="row-span-3 overflow-hidden rounded-4xl">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1025804/pexels-photo-1025804.jpeg"
                alt="Food 2"
              />
            </div>

            <div className="row-span-1 overflow-hidden rounded-4xl">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
                alt="Food 3"
              />
            </div>

            <div className="row-span-2 overflow-hidden rounded-4xl">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/30600496/pexels-photo-30600496/free-photo-of-in-n-out-westwood-village.jpeg"
                alt="Food 4"
              />
            </div>
            
            <div className="row-span-1 overflow-hidden rounded-4xl">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
                alt="Food 5"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
