import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

function UserProtectedRoute({ element: Element }) {
    const user = useSelector((state) => state.userAuth.user);
    // const message = (message)=> toast.error(message)
  
    if (!user) {
      return <Navigate to="/" />;
    }
  
    return <Element />;
  }

export default UserProtectedRoute;