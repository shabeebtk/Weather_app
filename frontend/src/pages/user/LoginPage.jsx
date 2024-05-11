import { useSelector } from "react-redux";
import AuthLogin from "../../components/user/AuthLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const user = useSelector(state => state.userAuth.user)
    const navigate = useNavigate()

    useEffect(()=>{
        if (user && user.is_superuser){
            navigate('/admin')
            return
        }
        else if(user){
            navigate('/dashboard')
            return
        }

    })

    return (
        <>
            <AuthLogin/>
        </>
    )
}

export default LoginPage;