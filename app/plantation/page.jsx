'use client'
import React, { useState, useEffect } from 'react'
import plantation from '../../assets/Plantation/plantation.png'
import { plantData, features } from '../../data/Plantation/data'
import Plant from '../../components/Plantation/Plant'
import whyChooseUs from '../../assets/Plantation/whyChooseUs.png'
import Features from '../../components/Plantation/Features'
import everyoneDeservesPlant from '../../assets/Plantation/everyoneDeservesPlant.png'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import Cart from '../../components/Plantation/Cart'
// Remove Firestore imports as they're not needed
// import { useCollection } from 'react-firebase-hooks/firestore'
// import { collection } from 'firebase/firestore'
// import { db } from '../../config/firebase'
import { software, courses, premiumGraphics, extraPremium, influencerMedia } from '../../data/Plantation/data'

function Page() {
  // const [value, loading, error] = useCollection(collection(db, 'ecoFriendlyProduct'))
  const [category, setCategory] = useState('Software')
  const [activeCategory, setActiveCategory] = useState(0)
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    // Set initial data for the default category
    updateCategoryData('Software')
  }, [])

  // const [data, setData] = useState(software);
  const updateCategoryData = (selectedCategory) => {
    let data = []
    switch (selectedCategory.toLowerCase()) {
      case 'software':
        data = software
        break
      case 'courses':
        data = courses
        break
      case 'premium graphics':
        data = premiumGraphics
        break
      case 'influencer media':
        data = influencerMedia
        break
      case 'extra premium':
        data = extraPremium
        break
      default:
        data = []
    }
    setCategoryData(data)
    console.log(categoryData)
  }

  function changeCategory(e) {
    const selectedCategory = e.target.innerHTML
    setCategory(selectedCategory)
    updateCategoryData(selectedCategory)
    
    let currentElement = document.getElementById(e.target.id)
    currentElement.setAttribute("style", "background-color:#E4F9D0")
    let lastActiveElement = document.getElementById(activeCategory)
    lastActiveElement.setAttribute("style", "background-color:white")
    setActiveCategory(e.target.id)
    console.log(categoryData)
  }

  const [cart, setCart] = useState(false)

  function plants() {
    return (
      <>
        {/* Remove the loading state as it's not needed */}
        <ul className='flex w-full justify-evenly p-5 text-[#6E6C6C] text-center mb-10'>
          <li onClick={changeCategory} id='0' className='px-1 md:px-4 py-2 rounded-lg cursor-pointer' style={{ backgroundColor: '#E4F9D0' }}>Software</li>
          <li onClick={changeCategory} id='1' className='px-1 md:px-4 py-2 rounded-lg cursor-pointer'>Courses</li>
          <li onClick={changeCategory} id='2' className='px-1 md:px-4 py-2 rounded-lg cursor-pointer'>Premium Graphics</li>
          <li onClick={changeCategory} id='3' className='px-1 md:px-4 py-2 rounded-lg cursor-pointer'>Influencer Media</li>
          <li onClick={changeCategory} id='4' className='px-1 md:px-4 py-2 rounded-lg cursor-pointer'>Extra Premium</li>
        </ul>
        
        <div className='flex w-4/5 mx-auto justify-between text-2xl my-10'>
          <h1 className=''>{category}</h1>
          <div className='flex gap-4'>
            <CiSearch />
            <FiShoppingCart onClick={() => setCart(true)} className='cursor-pointer' />
            <CiUser />
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 w-4/5 gap-3 mx-auto'>
          {categoryData.map((item, idx) => (
            <Plant 
              img={item.img_url} 
              id={idx + 1} 
              name={item.title} 
              rate={item.actualPrice} 
              key={idx} 
              category={item.category} 
              deliver={item.membership} 
              tag={item.Tag} 
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <div className='w-full bg-[#F2FFF4]'>
        <div style={{ backgroundImage: `url(${plantation.src})` }} className='w-full md:h-96 lg:h-[80vh] bg-cover bg-no-repeat bg-center'>
          <div className='hidden md:flex flex-col ml-[15%] justify-center h-full w-1/2 lg:w-3/5 gap-4 lg:gap-6'>
            <h1 className='md:text-3xl lg:text-5xl text-[#306131] font-bold'>Plants make a positive impact on our Environment & Health.</h1>
            <p className='text-[#5F8638] text-xl'>Loren ipsum dummy text dummy text dummy text</p>
            <button className='bg-[#306131] text-white w-36 rounded-xl py-2'>Buy Now</button>
          </div>
        </div>
      </div>

      {cart || plants()}
      {!cart || <Cart setCart={setCart} />}

      <h1 className='text-center font-bold text-3xl my-10'>Why people choose Us?</h1>
      <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-8'>
        <div className='w-full md:w-1/2 h-96 md:h-[35rem] lg:h-[40rem] rounded-xl p-10 bg-cover bg-center bg-no-repeat shadow-md flex flex-col gap-4' style={{ backgroundImage: `url(${whyChooseUs.src})` }}>
          <h1 className='font-bold w-2/3'>BECOME SKILLED AT WHAT MATTERS</h1>
          <button className='rounded-full border bg-[#203a63] text-white w-2/3 lg:w-1/3 p-2'>Read Our Story --{'>'}</button>
        </div>
        <div className='w-full md:w-1/2 grid grid-cols-2 gap-6 lg:gap-8'>
          {features.map((item, idx) => (
            <Features img={item.img} title={item.title} content={item.content} col={item.col} key={idx} />
          ))}
        </div>
      </div>

      <div className='w-11/12 mx-auto py-10 rounded-3xl my-28 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${everyoneDeservesPlant.src})` }}>
        <div className='md:w-5/6 lg:w-3/5 mx-auto bg-black/50 backdrop-opacity-80 rounded-2xl flex flex-col text-white items-center gap-4 text-center p-5'>
          <h1 className='text-lg md:text-3xl'>We believe everyone deserves a plant</h1>
          <p className='text-xs md:text-base'>Regardless of your plant expertise, we can provide you with information, connections, inspiration as you pursue your interest in gardening.</p>
          <button className='border text-xs md:text-base border-white w-max px-10 py-2 rounded-full'>Sign Up --{'>'}</button>
        </div>
      </div>
    </>
  )
}

export default Page
