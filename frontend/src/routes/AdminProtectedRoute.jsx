import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

function AdminProtectedRoute({ element: Element }) {
    const user = useSelector((state) => state.userAuth.user);
    // const message = (message)=> toast.error(message)
  
    if (user && user.is_superuser) {
      return <Element />;
      
    }else if (user){
      return <Navigate to="/dashboard" />;
    }
  
    return <Navigate to="/" />;
  }

export default AdminProtectedRoute;