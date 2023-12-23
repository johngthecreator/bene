import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../services/db"
import TaskInput from "./TaskInput"

export default function Tasks(props:{bucket:number, title:string}){
    const taskName = "Edit me plz."
    const bigTasks = useLiveQuery(async() => db.tasks.where("bucket").equals(props.bucket).and(task => task.difficulty === 2).toArray());
    const mediumTasks = useLiveQuery(async() => db.tasks.where("bucket").equals(props.bucket).and(task => task.difficulty === 1).toArray());
    const smallTasks = useLiveQuery(async() => db.tasks.where("bucket").equals(props.bucket).and(task => task.difficulty === 0).toArray());

    async function addTask(difficulty:number, bucket: number) {
        try {
          const id = await db.tasks.add({
            taskName,
            difficulty,
            bucket
          });
          console.log(`Added Task, recieved id ${id}`)

        } catch (error) {
            console.error(error)
        }
      }
    
    const updateTask = async (value:string,pid:number|undefined) => {
        if(pid == undefined)return;
        try {
            if(value.length == 0){
                const id = await db.tasks.delete(pid);
                console.log(`Deleted Task @ id ${id}`)
            }
            const id = await db.tasks.update(pid,{taskName:value})
            console.log(`Updated Task @ id ${id}`)
        } catch (error){
            console.error(error)
        }
    }
    

    
    return(
        <div className="flex flex-col w-5/6 max-h-[500px] bg-white shadow-block border-solid border-black border-2">
            <h1 className="p-1 border-solid border-black border-b-2 text-center font-bold">{props.title}</h1>
            <div className="w-full p-3 overflow-y-scroll">
                <h2 className="font-bold">Big Tasks ({bigTasks?.length}/1) </h2>
                <div className="flex flex-col w-full my-3 gap-5">
                    {bigTasks?.map((task)=>{
                        return(
                            <TaskInput key={task.id} task={task} updateTask={updateTask} />
                        )
                    })}
                </div>
                <button className={`${(bigTasks?.length == 1)?"hidden":""} shadow-block border-black border-solid border-2 p-1`} onClick={(bigTasks?.length == 1)?()=>{console.error("You have too many big tasks!")}:()=>addTask(2,props.bucket)}> Add Big Task </button>
                <p className="text-center font-black my-5">||-----------------------------||</p>
                <h2 className="font-bold">Medium Tasks ({mediumTasks?.length}/3) </h2>
                <div className="flex flex-col w-full my-3 gap-5">
                    {mediumTasks?.map((task)=>{
                        return(
                            <TaskInput key={task.id} task={task} updateTask={updateTask} />
                        )
                    })}
                </div>
                <button className={`${(mediumTasks?.length == 3)?"hidden":""} shadow-block border-black border-solid border-2 p-1`} onClick={(mediumTasks?.length == 3)?()=>{console.error("You have too many big tasks!")}:()=>addTask(1,props.bucket)}> Add Medium Task </button>
                <p className="text-center font-black my-5">||-----------------------------||</p>
                <h2 className="font-bold">Small Tasks ({smallTasks?.length}/5) </h2>
                <div className="flex flex-col w-full my-3 gap-5">
                    {smallTasks?.map((task)=>{
                        return(
                            <TaskInput key={task.id} task={task} updateTask={updateTask} />
                        )
                    })}
                </div>
                <button className={`${(smallTasks?.length == 5)?"hidden":""} shadow-block border-black border-solid border-2 p-1`} onClick={(smallTasks?.length == 5)?()=>{console.error("You have too many big tasks!")}:()=>addTask(0,props.bucket)}> Add Small Task </button>
            </div>
        </div>
    )
}