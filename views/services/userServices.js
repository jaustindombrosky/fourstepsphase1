import baseURL from '../baseURL';
import axios from 'axios';


function registerUser(userData){
    axios.post(`${baseURL}/api/users/register`, userData)
        .then(res => res)
        .catch(err => {throw err});
}


export {
    registerUser
}