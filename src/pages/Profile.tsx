import { useEffect, useState } from "react"

export default function Profile(){
    const [timeLimit, setTimeLimit] = useState<any>({})
    useEffect(()=>{
        const rand = Math.floor((Math.random() * timeLimit.timeEnd - timeLimit.timeStart + 1) + timeLimit.timeStart)
        console.log(timeLimit.timeStart)
        console.log(timeLimit.timeEnd)
        console.log(rand, rand+2)
    },[timeLimit])
    return(
        <div className="flex flex-col w-5/6 bg-white shadow-block border-solid border-black border-2">
            <h1 className="p-1 border-solid border-black border-b-2 text-center font-bold">System Preferences</h1>
            <div className="w-full p-3">
                <h2>Planning Time</h2>
                <div>
                    <input type="time" onChange={(e)=>setTimeLimit({timeStart: e.target.value.split(":")[0]})} className="border-black border-solid border-2 text-center rounded-none" />
                    <span> to </span>
                    <input type="time" onChange={(e)=>setTimeLimit({...timeLimit, timeEnd: e.target.value.split(":")[0]})} className="border-black border-solid border-2 text-center rounded-none" />
                </div>

            </div>
        </div>
    )
}