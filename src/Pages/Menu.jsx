import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlateWheat,
  faBowlFood,
  faUtensils,
  faBowlRice,
  faCake
} from '@fortawesome/free-solid-svg-icons'
import MenuItem from '../Components/MenuItem.jsx'

export default function Menu() {

  const [activeName, setActiveName] = useState("All");
    const [menuItem, setMenuItems] = useState([
      {
        imageUrl: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2023/12/thumb.jpg",
        price: "12.99",
        name: "Roasted Beef",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.",
        mark: "5.0",
        n_comments: "1.6k"
      },
      {
        imageUrl: "https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg",
        price: "9.99",
        name: "Grilled Chicken",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.",
        mark: "4.8",
        n_comments: "1.2k"
      },
      {
        imageUrl: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
        price: "8.50",
        name: "Veggie Burger",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.",
        mark: "4.5",
        n_comments: "980"
      },
      {
        imageUrl: "https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg",
        price: "3.99",
        name: "Fries",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.",
        mark: "4.2",
        n_comments: "2.1k"
      },
      {
        imageUrl: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
        price: "6.99",
        name: "Caesar Salad",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.",
        mark: "4.7",
        n_comments: "1.5k"
      },
      {
        imageUrl: "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg",
        price: "10.99",
        name: "Spaghetti Bolognese",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.",
        mark: "4.9",
        n_comments: "2.4k"
      },
      {
        imageUrl: "https://images.pexels.com/photos/2568587/pexels-photo-2568587.jpeg",
        price: "14.99",
        name: "Steak Frites",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.",
        mark: "5.0",
        n_comments: "3.0k"
      },
      {
        imageUrl: "https://images.pexels.com/photos/11710531/pexels-photo-11710531.jpeg",
        price: "7.50",
        name: "Chicken Nuggets",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut accusantium pariatur odio quo.",
        mark: "4.6",
        n_comments: "1.8k"
      }
    ]);
    

  const filters = [
    { 
      "name": "All",
      "icone": faUtensils
    },
    {
      "name": "Breakfast",
      "icone": faBowlFood
    },
    {
      "name": "Lunch",
      "icone": faUtensils
    },
    {
      "name": "Dinner",
      "icone": faBowlRice
    },
    {
      "name": "Dessert",
      "icone": faCake
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Remonte tout en haut
  }, []);


  return (

    <div className='bg-[#ffe0d9]'>
      
      <Hero title={"Menu"} height={"500px"} imageUrl={"https://buildeo.co.uk/wp-content/uploads/2021/12/Modern-Fast-food-Restaurant-Interior-Design-and-Renovation.jpg"}/>

      <div className='sm:max-w-7xl h-full mx-auto px-5 sm:px-12 pb-20'>

        <section className='menu-top mb-12 flex gap-5 flex-col md:flex-row md:gap-0 items-center justify-between'>

          <div className='menu-headline flex flex-col gap-4'>
              <h2 className='section-title text-5xl text-[#FFC107]'>
                Our Menu
              </h2>

              <h3 className='text-4xl md:text-5xl'>
                Let's Check <span className='text-[#FFC107]'>Our Menu</span>
              </h3>
          </div>

          <div className='filters flex flex-col items-center gap-3 md:flex-row'>

            <div>

              {[ filters[0], filters[1], filters[2]].map((filter) => (
                <button onClick={() => {setActiveName(filter.name)}} className={`${activeName === filter.name ? "bg-[#FFC107] text-white" : "bg-white  text-black"}`} key={filter.name}>
                  <FontAwesomeIcon icon={filter.icone} /> 
                  <span>{filter.name}</span> 
                </button>
              ))}

            </div>

            <div>

            {[ filters[3], filters[4]].map((filter, index) => (
                <button onClick={() => {setActiveName(filter.name)}} className={`${activeName === filter.name ? "bg-[#FFC107] text-white" : "bg-white  text-black"}`} key={filter.name}>
                  <FontAwesomeIcon icon={filter.icone} /> 
                  <span>{filter.name}</span> 
                </button>
              ))}

            </div>

          </div>

        </section>

        <section className='menu-items grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5'>
            {menuItem.map((item) => (
              <MenuItem imageUrl={item.imageUrl} price={item.price} name={item.name} description={item.description} mark={item.mark} n_comments={item.n_comments} key={item.name} />
            ))}
        </section>

      </div>


    </div>
  
  )
}
