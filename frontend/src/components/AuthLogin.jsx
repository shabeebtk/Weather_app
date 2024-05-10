import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { clientId } from '../constant/AuthClientId';

function AuthLogin() {

    const handleLogin = async (googleData) => {

        console.log(googleData.credential)
        const response = await axios.post('http://localhost:8000/user/google/login/', {
            access_token: googleData.credential,
        });
    
        // login logic ...
        console.log('Login successful:', response.data);
    };

    const onFailure = (error) => {
        console.log(error)
    }

    return (
        <>
            <div className='flex justify-center items-center h-100 h-[100vh]'>
                <div className='hover:cursor-help'>
                    <GoogleOAuthProvider clientId={clientId}>
                        <GoogleLogin
                            buttonText="Login with Google"
                            onSuccess={handleLogin}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'} 
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </>
    )
}

export default AuthLogin