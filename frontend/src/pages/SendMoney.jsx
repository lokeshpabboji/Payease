import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { SendMUser } from "../components/SendMUser";
import React, { useState } from "react";
import axios from "axios";
// import {
//   BrowserRouter as Router,
//   useLocation
// } from "react-router-dom";

export function SendMoney(){

    // function useQuery() {
    //     const { search } = useLocation();
    //     return React.useMemo(() => new URLSearchParams(search), [search]);
    // }
    // const query = useQuery();

    const [amount , setAmount] = useState(0);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const username = searchParams.get('username');


    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="flex flex-col justify-center">
            <div className="w-80 p-6 bg-white rounded-lg h-max shadow-lg">
                <div className="mb-14">
                    <Heading title={"Send Money"}></Heading>
                </div>
                <SendMUser username={username}></SendMUser>
                <Inputbox heading={'Amount (in Rs)'} placeholder={'Enter amount'} onChange={(e) => {
                    setAmount(Number(e.target.value))
                }}></Inputbox>
                <div className="mt-6">
                <Button title={'Initiate transfer'} onClick={async () => {
                    try {
                        // axios.post("http://ec2-16-16-192-75.eu-north-1.compute.amazonaws.com:3000/api/v1/account/transfer", {
                        //     to : id,
                        //     amount
                        // },{
                        //     headers:{
                        //         Authorization : localStorage.getItem('token'),
                        //     }
                        // }).then((response) => {
                        //     alert(response.data.message);
                        // })
                        const response = await axios.post("http://ec2-16-16-192-75.eu-north-1.compute.amazonaws.com:3000/api/v1/account/transfer",{
                            to : id,
                            amount
                        },{
                            headers: {
                                Authorization : localStorage.getItem('token')
                            }
                        });
                        alert(response.data.message);
                    } catch (error) {
                        alert(error.response.data.message);
                    }
                }}></Button>
                </div>
            </div>
        </div>
    </div>
}