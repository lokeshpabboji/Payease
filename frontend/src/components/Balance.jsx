import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Balance({balance}){
    // const navigate = useNavigate();
    // const [balance, setBalance] = useState(0);
    // const token = localStorage.getItem('token');
    // console.log(token);
    // if(!token){
    //     navigate('/signin');
    //     // alert('signin to see the dashboard');
    //     return;
    // }
    // axios.get('http://ec2-16-16-192-75.eu-north-1.compute.amazonaws.com:3000/api/v1/account/balance', {
    //     headers : {
    //         'authorization' : token
    //     }
    // }).then(response => {
    //     setBalance(response.data.balance);
    // });

    return <div className="flex m-4">
        <div className="font-bold text-lg">Your balance</div>
        <div className='font-semibold ml-2 text-lg'>Rs {balance}</div>
    </div>
}