import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export function Dashboard(){
    const [balance, setBalance] = useState(0);

    const navigate = useNavigate();
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            alert("please signin to see the dashboard")
            navigate("/signin");
        }
        axios.get('http://ec2-16-16-192-75.eu-north-1.compute.amazonaws.com:3000/api/v1/account/balance', {
            headers : {
                'authorization' : token
            }
        }).then(response => {
            setBalance(response.data.balance);
        });
    },[])


    return <div>
        <Appbar></Appbar>
        <Balance balance={balance}></Balance>
        <Users></Users>
    </div>
}