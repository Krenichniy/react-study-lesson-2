import css from './ToDoList.module.css';
const ToDoList = ({ todos, deleteOne }) => (
    <div>
        <h3 className={css.ToDoList__title}>To do list</h3>
        <ul className={css.ToDoList}>{todos.map(({ id, text, completed }) => (
            <li key={id} className={css.ToDoListItem}>
                <p className={css.ToDoListItem__text}>{text}</p>
                <button onClick={()=> deleteOne(id)} className='button secondary'>Delete</button>
            </li>
        )) }</ul>
    </div>
)

export default ToDoList;