"use client"
import Weather from '@/Components/Weather';
import axios from 'axios';
import React, { useState } from 'react'
import { TbLocationSearch } from "react-icons/tb";


const page = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_APP}`

  const fetchWeather = (elem) => {
    elem.preventDefault();
    axios.get(url).then((response)=>{
    setWeather(response.data)
    })
    setCity("");
  }

  return (
    <>
      {/* Image */}
      <img src="./weather_bg.webp" alt=""
        className=' w-full h-[100vh] absolute object-cover object-center'
      />

      {/* Searchbar */}
      <div className=' relative flex justify-between items-center m-auto pt-12 md:w-full'>
        <form onSubmit={fetchWeather}
          className='w-full flex justify-center items-center p-4'>
          <div>
            <input type="text" placeholder='enter your city'
              className=' w-full border-b-2 border-black bg-transparent
             uppercase placeholder:text-black text-black outline-none text-2xl space-x-2'
              value={city} onChange={(elem) => setCity(elem.target.value)}
            />
          </div>
          <button onClick={fetchWeather}><TbLocationSearch size={30} /></button>
        </form>
      </div>

      {/* Weathers */}
      {weather.main && <Weather data={weather} />}
    </>
  )
}

export default page