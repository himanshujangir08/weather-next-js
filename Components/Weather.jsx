import Image from 'next/image'
import React from 'react'


const Weather = ({ data }) => {
    return (
        <div className='weather-main'>

            {/* TOP */}
            <div className='weather-first'>
                <div>
                    <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt='/' width={100} height={100} />
                    <p className='icon'>{data.weather[0].main}</p>
                </div>
                <p className='temp'>{data.main.temp.toFixed(0)}
                <span className='temp-deg'>°C</span></p>
            </div>

            {/* BOTTOM */}
            <div className='weather-second'>
                <p className='weather-name'>Weather In {data.name}...</p>

                <div className='weather-details'>
                    <div>
                        <p className='feels'>{data.main.feels_like.toFixed(0)}°</p>
                        <p className='feels-text'>Feels Like</p>
                    </div>
                    <div>
                        <p className='feels'>{data.main.humidity.toFixed(0)}%</p>
                        <p className='feels-text'>Humidity</p>
                    </div>
                    <div>
                        <p className='feels'>{data.wind.speed.toFixed(0)}MPH</p>
                        <p className='feels-text'>Wind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather