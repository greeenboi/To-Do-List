import React from 'react'

const style = {
    li:`flex flex-row justify-between p-4 md:my-2 capitalize gap-2`,
    liComplete : `flex flex-row justify-between p-4 md:my-2 capitalize gap-2`,
    row:`flex`,
    text: `ml-2 cursor:pointer `,
    textComplete: `ml-2 cursor:pointer line-through`,
    button:`cursor:pointer flex items-center border border-sky-300 opacity-80 rounded-l p-1`
}

const Todo = ({todo, toggleStatus, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input type="checkbox" onChange={()=> toggleStatus(todo)} checked={todo.completed ? 'checked' : ''}/>
            <p onClick={()=> toggleStatus(todo)} className={todo.completed ? style.textComplete : style.text}>
                {todo.text}
            </p>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className={style.button}>delete</button>
    </li>
  )
}

export default Todo