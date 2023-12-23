import { Link } from "react-router-dom"
export default function Home(){
    return(
        <div className="flex flex-col w-5/6 bg-white shadow-block font-ubuntu border-solid border-black border-2">
            <h1 className="p-1 border-solid border-black border-b-2 text-center font-bold">Welcome</h1>
            <div className="w-full p-5">
                <h2 className="font-bold">What is <span className="text-xl underline">bene.</span>?</h2>
                <p>Bene is a old-school MacOS-esque task management tool (a todo list...). </p> 
                <p className="m-2"></p>
                <p>Bene's task management app based off the 1-3-5 time management strategy. Tasks can be separated out into 3 separate buckets to help better organize tasks. </p>
            </div>
            <Link className="p-5" to="/mycase">
                <p className="shadow-block border-black border-solid border-2 text-center">Continue</p>
            </Link>
        </div>
    )
}