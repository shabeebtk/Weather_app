import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/action/userAuthAction";

function AdminNavbar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        googleLogout();
        dispatch(userLogout(null))
        navigate('/')
    };

    return (
        <div className='w-100 py-4 flex justify-between px-5'>
            <div className='font-bold'>Weather App - ADMIN</div>
            <div className='flex space-x-5'>
                <div>
                    <button onClick={logOut} className='px-4 py-2 bg-red-500'>Logout</button>
                </div>
            </div>
        </div>
    )
};

export default AdminNavbar;