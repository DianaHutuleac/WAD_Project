
import axios from "axios";

const checkIfAuthenticated = (setUser, setAuth) => {
    // make an axios call

    axios.get('http://localhost:8080/api/auth', { withCredentials: true }).then( response => {
        console.log(response);
        if ( response.data.AUTHENTICATED === true){
            setAuth(true);
            setUser(response.data.USER);
        }
        else{
            setAuth(false);
            setUser(null);
        }
    })
        .catch( err => console.log(err));


}

export default checkIfAuthenticated;