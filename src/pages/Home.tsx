import { Link } from "react-router-dom"
export default function Home(){
    return(
        <div className="flex flex-col w-5/6 bg-white shadow-block font-ubuntu border-solid border-black border-2">
            <h1 className="p-1 border-solid border-black border-b-2 text-center font-bold">Welcome</h1>
            <div className="w-full p-5">
                <h2 className="font-bold">What is <span className="text-xl underline">bene.</span>?</h2>
                <p>Bene is a old-school MacOS-esque time management and task tracking tool. </p> 
                <p className="m-2"></p>
                <p>Bene's time management suite is based off of the Biological Clock, 1-3-5, and Time Blocking strategies in the realm of time management.</p>
            </div>
            <Link className="p-5" to="/tasks">
                <p className="shadow-block border-black border-solid border-2 text-center">Continue</p>
            </Link>
        </div>
    )
}