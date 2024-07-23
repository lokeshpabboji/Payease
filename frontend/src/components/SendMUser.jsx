export function SendMUser({username}){
    return <div>
        <div className="flex mt-3">
            <div className="h-10 w-10 rounded-full bg-green-200 flex justify-center">
                <div className="flex flex-col justify-center">
                    {username[0].toUpperCase()}
                </div>
            </div>
            <div className="mt-2 ml-2 font-bold">{username}</div>
        </div>
    </div>
}