import { useEffect, useState } from 'react'
import axios from 'axios'

function WeatherCard() {

    const [city, setCity] = useState('')
    const [weatherDetails, setWeatherDetails] = useState(null)

    const handleCheckWeather = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2cb57432de328507888aa733caaf7b28`)
            .then((response) => {
                console.log(response.data)
                setWeatherDetails(response.data)
            })
            .catch((error) => {
                console.log(error);
                setCity('')
            })
    }

    const kelvinToCelsius = (kelvin) => {
        return Math.floor(kelvin - 273.15);
    };

    return (

        <>
            <div className=''>
                <div className='w-100 py-4 flex justify-between px-5'>
                    <div className='font-bold'>Weather App</div>
                    <div className='space-x-3'>
                        <input value={city} onChange={(e) => setCity(e.target.value)} className='bg-white text-black pl-3 py-2' type="text" placeholder='search city' />
                        <button onClick={handleCheckWeather} className='bg-gray-700 px-4 py-2'>Search</button>
                    </div>
                </div>
                <div className='min-h-[80vh] flex item-center justify-center'>
                    <div class="flex items-center justify-center">

                        {weatherDetails ?
                            <div class="relative w-[fit-content]">
                                <div class="relative w-52 h-60 flex flex-col items-center justify-between p-5 rounded-lg bg-opacity-30 backdrop-blur-30 bg-gray-300 border border-white cursor-pointer">
                                    <p class="font-bold text-lg text-white">{weatherDetails ? weatherDetails.name : ''}</p>
                                    <p class="text-sm text-gray-400">{weatherDetails ? weatherDetails.weather[0].description : ''}</p>
                                    <svg class="text-gray-400" width="50" height="50" viewBox="0 0 100 100" fill="currentColor">

                                    </svg>
                                    <p class="text-4xl text-white">{weatherDetails ? kelvinToCelsius(weatherDetails.main.temp) + '°' : ''}</p>
                                    <div class="w-full flex items-center justify-between">
                                        <div class="flex flex-col items-end justify-center pr-5 space-y-2">
                                            <p class="text-xs font-semibold text-white">Min</p>
                                            <p class="text-xs font-medium text-gray-400">{weatherDetails ? kelvinToCelsius(weatherDetails.main.temp_min) + '°' : ''}</p>
                                        </div>
                                        <div class="flex flex-col items-start justify-center pl-5 border-l-2 border-white">
                                            <p class="text-xs font-semibold text-white">Max</p>
                                            <p class="text-xs font-medium text-gray-400">{weatherDetails ? kelvinToCelsius(weatherDetails.main.temp_max) + '°' : ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div>
                                <h1 className='font-bold text-5xl'>Search City</h1>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default WeatherCard
