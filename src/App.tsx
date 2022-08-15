import { useState } from 'react'
import { Header } from './components/Header'
import NoTasks from './components/NoTasks';
import './global.css';
import { Tasks } from './components/Tasks';


export interface Infotask {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {
 
  const [tasks, setTasks] = useState<Infotask[]>([]);

  function addTask(taskContent: string){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        content: taskContent,
        isCompleted: false,
      }
    ])
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task =>{
      return task.id !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  function handleCheckTask(id: string){
    const changedTaks = tasks.map((task) => 
      task.id === id ? {
        ...task,
        isCompleted: !task.isCompleted,
      }
      : task
    )
    setTasks(changedTaks);
  }
  
  return (
    <div>
      <Header tasks={tasks}
       onAddTask={addTask}/>
      {tasks.length <= 0 &&(
        <section>
          <NoTasks/>
        </section>
      )}
      {tasks.map(task =>{
        return <Tasks 
          contender = {task}
          onDeleteTask={deleteTask}
          onComplete={handleCheckTask}/> 
      })}
            
    </div>   
  )
}

export default App
