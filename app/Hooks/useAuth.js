import { useContext } from "react";
import { authContext } from "../context";



const useAuth = () => {
    const {auth, setAuth} = useContext(authContext) 
    return { auth, setAuth }
};

export default useAuth;