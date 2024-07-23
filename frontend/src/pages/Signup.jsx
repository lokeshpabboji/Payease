import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export function Signup(){
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 p-3 h-max">
                <Heading title='Sign up'></Heading>
                <SubHeading description='Enter your information to create an account'></SubHeading>
                <Inputbox heading='First Name' placeholder='john' onChange={e => {
                    setFirstName(e.target.value);
                }}></Inputbox>
                <Inputbox heading='Last Name' placeholder='Doe' onChange={e => {
                    setLastName(e.target.value);
                }}></Inputbox>
                <Inputbox heading='Email' placeholder='***@gmail.com' onChange={e => {
                    setUsername(e.target.value);
                }}></Inputbox>
                <Inputbox heading='Password' placeholder='123456' onChange={e => {
                    setPassword(e.target.value);
                }}></Inputbox>
                <div className="pt-4">
                    <Button title='Sign up' onClick={ async () => {
                        const response = await axios.post('http://ec2-16-16-192-75.eu-north-1.compute.amazonaws.com:3000/api/v1/user/signup', {
                            username,
                            password,
                            firstName,
                            lastName,
                        });
                        localStorage.setItem("token","Bearer "+response.data.token);
                        alert(response.data.message);
                        navigate('/dashboard');
                    }}></Button>
                </div>
                <BottomWarning label='Already have an account?' to={'/signin'} buttonText='signin'></BottomWarning>
            </div>
        </div>
    </div>
}