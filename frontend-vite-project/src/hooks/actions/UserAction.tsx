import axios from "axios";
import { BASE_URL } from "../../configUrl";


export const Userregister = (email, username, first_name, last_name, password, is_active) => async  (dispatch)=>{
    dispatch({type:'USER_REGISTER_REQUEST'});
    try{

        const config ={
            headers:{
                'Content-type': 'application/json',
            },
        };

        const data={
            email,
            username,
            first_name,
            last_name,
            password,
            is_active
        }

        const response = await axios.post(BASE_URL+"/customer/create/",data, config);
        dispatch({type:'USER_REGISTER_SUCCESS', payload:response.data});
    }
    catch(error){
        dispatch({type:'USER_REGISTER_FAIL', payload:error.message || "Error system" })
    }
};



export const UserLogin = (username, password) => async  (dispatch)=>{
    dispatch({type:'USER_LOGIN_REQUEST'});
    try{

        const config ={
            headers:{
                'Content-type': 'application/json',
            },
        };

        const data={
            username,
            password,
        }

        const response = await axios.post(BASE_URL+"/customer/login/",data, config);
        dispatch({type:'USER_LOGIN_SUCCESS', payload:response.data});
        localStorage.setItem('token', response.data.access)
        localStorage.setItem('id', response.data.id)
    }
    catch(error){
        dispatch({type:'USER_LOGIN_FAIL', payload:error.message || "Error system" })
    }
};