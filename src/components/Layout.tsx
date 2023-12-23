import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    const date: Date = new Date();
    return(
        <div className="h-screen w-full bg-screen-gray">
            <div className="h-[5%] w-full flex items-center px-5 bg-white border-solid border-black border-2">
                <h1 className="font-bold text-2xl font-ubuntu">bene.</h1>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 h-[95%]">
                <div className="p-5">
                    <h2 className="shadow-block border-solid border-2 border-black inline bg-white py-1 px-4">{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}</h2>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                    <Outlet />
                </div>
                <div className="hidden lg:flex lg:flex-col items-end p-5 gap-10">
                    <Link to="/mycase" className="flex flex-col items-center">
                        <img src="/super_file_icon.png" className="h-[100px] w-[100px]"/>
                        <h2 className="font-ubuntu bg-white">My Case</h2>
                    </Link>
                    <Link to="/notepad" className="flex flex-col items-center">
                        <img src="/burn_task_icon.png" className="h-[100px] w-[100px]"/>
                        <h2 className="font-ubuntu bg-white">Note Pad</h2>
                    </Link>
                    <Link to="/system" className="flex flex-col items-center">
                        <img src="/dead_comp_icon.png" className="h-[100px] w-[100px]"/>
                        <h2 className="font-ubuntu bg-white">System</h2>
                    </Link>
                </div>
                <div className="h-[15%] w-full flex lg:hidden justify-evenly items-center px-5 bg-white border-solid border-black border-2">
                    <Link to="/mycase">
                        <img src="/super_file_icon.png" className="h-[75px] w-[75px]"/>
                    </Link>
                    <Link to="/notepad">
                        <img src="/burn_task_icon.png" className="h-[75px] w-[75px]"/>
                    </Link>
                    <Link to="/system">
                        <img src="/dead_comp_icon.png" className="h-[75px] w-[75px]"/>
                    </Link>
                    {/* <h2 className="font-ubuntu">Calendar</h2>
                    <h2 className="font-ubuntu">Tasks</h2>
                    <h2 className="font-ubuntu">Profile</h2> */}
                </div>
            </div>
        </div>
    )
}