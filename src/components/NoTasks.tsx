import styles from './NoTasks.module.css'
import Clipboard from '../assets/Clipboard.svg';


function NoTasks() {
    return(
        <article>

        <div className={styles.content}>
            <img src={Clipboard} alt="Clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong> 
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        </article>       
        
    )
}

export default NoTasks;