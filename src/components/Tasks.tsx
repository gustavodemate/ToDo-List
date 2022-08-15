import { Check, Trash } from 'phosphor-react'
import styles from './tasks.module.css'
import App from '../App'
import { Infotask } from '../App'


interface PropsContender{
    contender: Infotask
    onDeleteTask: (taskToDelete: string) =>  void;
    onComplete: (taskToDelete: string) =>  void;       
}

export function Tasks({contender, onDeleteTask, onComplete}: PropsContender) {

    function handleDeleteTask(){
        onDeleteTask(contender.id)
    }

    return(
    <div>
        <main className={styles.tasks}>
            <article className={styles.tasksContent}>   
                <div className={styles.wrapper}>
                <input onClick={ () => onComplete(contender.id)}  className={styles.checkbox}  type="checkbox" />
                    
                </div>                                                                        
                <p className={contender.isCompleted ? styles.textCompleted : ""}>{contender.content}</p>
            </article>
                
            <button  onClick={handleDeleteTask} title='Deletar Tarefa'>
                <Trash size={20}/>
            </button> 
                                     
        </main>            
    </div>       
    )
}