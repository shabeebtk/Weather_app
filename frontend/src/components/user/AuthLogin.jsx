import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// api 
import { BaseUrl } from '../../api/BaseUrl'
import { register } from '../../api/EndPoints';
import { GoogleApi } from '../../api/GoogleApi';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

// redux 
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/action/userAuthAction';
import toast from 'react-hot-toast';


function AuthLogin() {

    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const successNotification = (message) => toast.success(message);

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`${GoogleApi + user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        console.log(res.data)
                        axios.post(`${BaseUrl + register}`, {
                            email: res.data.email,
                            name: res.data.name
                        })
                            .then((response) => {
                                if (response.data.user.is_superuser) {
                                    navigate('/admin')
                                }
                                else {
                                    navigate('/dashboard')
                                }

                                console.log(response.data)
                                dispatch(userLogin(response.data.user))
                                localStorage.setItem('token', response.data.token)
                                successNotification('login success')
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <>
            <div className='px-5 pt-4'>
                <h1 className='font-bold'>Weather App</h1>
            </div>
            <div className='flex justify-center items-center h-100 h-[80vh]'>
                <div className='hover:cursor-pointer border px-5 py-2 hover:bg-slate-600'>
                    <button onClick={login}>Sign in with Google 🚀 </button>
                </div>
            </div>
        </>
    )
}

export default AuthLogin