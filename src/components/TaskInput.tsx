import { useState } from "react";
import { Task } from "../services/db";
export default function TaskInput(props:{task:Task, updateTask: (value:string, pid:number|undefined)=>void}) {
    const [inputValue, setInputValue] = useState(props.task.taskName);

    const handleBlur = () => {
        if (inputValue !== props.task.taskName) {
            props.updateTask(inputValue, props.task.id);
        }
    };

    return (
        <div className=" flex flex-row px-1 border-solid border-black border-2">
            <input
                className="w-full"
                type="text"
                value={inputValue}
                onBlur={handleBlur}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
}