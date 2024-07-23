import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    return <div className="h-screen bg-slate-400 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white p-3 rounded-lg h-max w-80">
                <Heading title={'Sign In'}></Heading>
                <SubHeading description={'Enter your credentials to access your account'}></SubHeading>
                <Inputbox heading={'Email'} placeholder={'***@gmail.com'} onChange={(e) => {
                    setUsername(e.target.value);
                }}></Inputbox>
                <Inputbox heading={'Password'} placeholder={'123456'} onChange={(e) => {
                    setPassword(e.target.value);
                }}></Inputbox>
                <div className="pt-4">
                    <Button title={'Sign In'} onClick={async () => {
                        try {
                            const response = await axios.post("http://ec2-16-16-192-75.eu-north-1.compute.amazonaws.com:3000/api/v1/user/signin",{
                                username,
                                password
                            });
                            localStorage.setItem("token", "Bearer "+response.data.token);
                            navigate('/dashboard');
                        } catch (error) {
                            alert(error.response.data.message);
                        }
                        // axios({
                        //     method : "post",
                        //     url : "http://ec2-16-16-192-75.eu-north-1.compute.amazonaws.com:3000/api/v1/user/signin",
                        //     data : {
                        //         username,
                        //         password
                        //     }
                        // }).then(response => {
                        //     console.log(response);
                        //     if(response.status === 411){
                        //         console.log(response.data.message);
                        //         alert(response.data.message);
                        //     }else{
                        //         localStorage.setItem("token", "Bearer "+response.data.token);
                        //         navigate('/dashboard');
                        //     }
                        // })
                    }}></Button>
                </div>
                <BottomWarning label={"Don't have an account?"} to={'/signup'} buttonText={'Sign up'}></BottomWarning>
            </div>
        </div>
    </div>
}