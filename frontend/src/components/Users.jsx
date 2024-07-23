import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export function Users(){
    const [users, setUsers] = useState([]);
    const [filter , setFilter] = useState('');

    useEffect(() => {
        axios.get('http://ec2-16-16-192-75.eu-north-1.compute.amazonaws.com:3000/api/v1/user/bulk?filter='+filter,{
            headers : {
                "Authorization" : localStorage.getItem('token'),
            }
        }).then(response => {
                setUsers(response.data.users);
            })
    },[filter])

    return <div className="m-4">
        <div className="font-bold text-lg">Users</div>
        <input type="text" onChange={(e) => {
            setFilter(e.target.value);
        }} className="w-full border p-2 rounded" placeholder="Search for users..."/>
        <div className="mt-2 grid grid-cols-1 gap-2">
            {users.map(user => <User firstName={user.firstName} lastName={user.lastName} key={user.userId} userId={user.userId}></User>)}
        </div>
    </div>
}

function User({firstName, lastName, userId}){
    const navigate = useNavigate();
    return <div className="h-12 flex justify-between">
        <div className="flex">
            <div className="h-10 w-10 rounded-full bg-slate-200 flex justify-center">
                <div className="flex flex-col justify-center">
                    {firstName[0]}
                </div>
            </div>
            <div className="mt-2 ml-2">{firstName}{lastName}</div>
        </div>
        <div className="pt-1">
            {/* <Link to={'/send'}>
                <Button title={'Send Money'} onClick={() => {
                    history.pushState()
                }}></Button>
            </Link> */}
            <Button title={'Send Money'} onClick={() => {
                navigate(`/send?id=${userId}&username=${firstName}`);
            }}></Button>
        </div>
    </div>
}