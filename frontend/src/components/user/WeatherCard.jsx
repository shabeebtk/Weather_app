import { useState } from 'react'
import { WeatherApiKey } from '../../constant/WeatherApiKey'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../loaders/Loader'
import toast from 'react-hot-toast'
import SearchIcon from '../../assets/search.png'

// redux operations
import { useSelector } from 'react-redux'
import { googleLogout } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../redux/action/userAuthAction'

function WeatherCard() {

    const [city, setCity] = useState('')
    const [weatherDetails, setWeatherDetails] = useState(null)
    const [loader, setLoader] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const user = useSelector(state => state.userAuth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const errorToast = (message) => toast.error(message)

    const handleCheckWeather = async () => {
        if (city) {
            setLoader(true)
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WeatherApiKey}`)
                .then((response) => {
                    console.log(response.data)
                    setWeatherDetails(response.data)
                    setErrorMessage(null)
                })
                .catch((error) => {
                    console.log(error);
                    setWeatherDetails(null)
                    if (error.response.status == 404) {
                        setErrorMessage('City not found')
                    }
                    errorToast('city not found')
                })
                .finally(() => {
                    setLoader(false)
                    setErrorMessage(null)
                })
        }
    }

    const kelvinToCelsius = (kelvin) => {
        return Math.floor(kelvin - 273.15);
    };

    const logOut = () => {
        googleLogout();
        dispatch(userLogout(null))
        navigate('/')
    };

    return (

        <>
            <div>
                {/* search bar  */}
                <div className='w-100 py-4 flex items-center justify-between px-5'>
                    <div className='font-bold'>Weather App</div>
                    <div className='flex space-x-5'>
                        <div className='hidden md:flex items-center px-3 rounded-md bg-white'>
                            <input value={city} onChange={(e) => setCity(e.target.value)} className='bg-white text-black outline-none' type="text" placeholder='search city' />
                            <img onClick={handleCheckWeather} className='h-5 cursor-pointer' src={SearchIcon} alt="" />
                        </div>
                        <div>
                            <button onClick={logOut} className='px-4 py-2 rounded-md text-sm font-semibold bg-red-500'>Logout</button>
                        </div>
                    </div>
                </div>
                <div className='px-5 md:hidden'>
                    <div className='flex justify-between items-center px-3 py-2 rounded-md bg-white'>
                        <input value={city} onChange={(e) => setCity(e.target.value)} className='bg-white text-black outline-none' type="text" placeholder='search city' />
                        <button onClick={handleCheckWeather} ><img className='h-5 cursor-pointer' src={SearchIcon} alt="" /></button>
                    </div>
                </div>

                {/* weather card  */}
                <div className='min-h-[70vh] md:min-h-[80vh]  flex item-center justify-center'>
                    <div className="flex items-center justify-center">
                        {weatherDetails ?
                        <>
                            <div className="relative w-[fit-content]">
                                <div className="relative w-60 h-80 flex flex-col items-center justify-between p-5 rounded-lg bg-opacity-30 backdrop-blur-30 bg-gray-300 border border-white cursor-pointer">
                                    {!loader ?
                                        <>
                                            <div className='flex flex-col items-center justify-center'>
                                                <p className="font-bold text-lg text-white">{weatherDetails ? weatherDetails.name : ''}</p>
                                                <p className="text-sm text-gray-300">{weatherDetails ? weatherDetails.weather[0].description : ''}</p>
                                            </div>
                                            <div>
                                                <img src={`https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`} alt="" />
                                            </div>
                                            <p className="text-4xl text-white">{weatherDetails ? kelvinToCelsius(weatherDetails.main.temp) + '°' : ''}</p>
                                            <div className="w-full flex items-center justify-between">
                                                <div className="flex flex-col items-end justify-center pr-5 space-y-2">
                                                    <p className="text-xs font-semibold text-white">Min</p>
                                                    <p className="text-xs font-medium text-gray-400">{weatherDetails ? kelvinToCelsius(weatherDetails.main.temp_min) + '°' : ''}</p>
                                                </div>
                                                <div className="flex flex-col items-start justify-center pl-5 border-white">
                                                    <p className="text-xs font-semibold text-white">Max</p>
                                                    <p className="text-xs font-medium text-gray-400">{weatherDetails ? kelvinToCelsius(weatherDetails.main.temp_max) + '°' : ''}</p>
                                                </div>
                                            </div>
                                        </> :
                                        <div className='m-auto'>
                                            <Loader />
                                        </div>
                                    }
                                </div>

                            </div>

                            <div>
                                <h1></h1>
                            </div>
                            </>
                            :
                            <div>
                                <div className="w-52 h-60 flex justify-center items-center rounded-lg bg-opacity-30 backdrop-blur-30 bg-gray-300 border border-white cursor-pointer">
                                    {
                                        loader ?
                                            <Loader />
                                            :
                                            <h1 className='text-xl font-semibold'>select city</h1>
                                    }

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default WeatherCard
