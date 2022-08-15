import styles from './Header.module.css'
import todoLogo from '../assets/todo-logo.svg';
import {PlusCircle} from 'phosphor-react'
import App, { Infotask } from '../App';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Tasks } from './Tasks';

interface Props{
    onAddTask: (taskContent: string) => void;
    tasks: Infotask[];
}


export function Header({ onAddTask, tasks }: Props){
    const [content, setContent] = useState('')

    function handleCreateNewTask(event: FormEvent){
        event?.preventDefault()

        onAddTask(content);
        setContent('');
           
    }
    
    function onChangeContent(event: ChangeEvent<HTMLTextAreaElement>){
        setContent(event.target.value)
    }

    const tasksQuantity = tasks.length
    const completedTasks = tasks.filter(task => task.isCompleted).length

    return(
    <article >
        <header className={styles.header}>
            <img src={todoLogo} alt="Logotipo toDo List" />

            <form onSubmit={handleCreateNewTask} className={styles.tasksForm}>
            <textarea onChange={onChangeContent} value={content}
                placeholder='Adicione uma nova tarefa'    
            />
            <button type="submit">Criar <PlusCircle size={16} weight='bold' /></button>

            </form>
        </header>

        <div className={styles.taskInfo}>

            <div className={styles.createdTask}>
            <p>Tarefas Criadas <span>{tasksQuantity}</span> </p>
            </div>
            
            <div className={styles.completedTasks}>
            <p>Concluídas <span> {completedTasks} de {tasksQuantity}</span> </p>
            </div>        
        </div>
                   
    </article>
    )
}