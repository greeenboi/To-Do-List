import React from 'react'
import { MdOutlineDelete } from 'react-icons/md';

const style = {
    li:`flex flex-row justify-between p-4 md:my-2 capitalize gap-2`,
    liComplete : `flex flex-row justify-between p-4 md:my-2 capitalize gap-2`,
    row:`flex`,
    text: `ml-2 cursor:pointer `,
    textComplete: `ml-2 cursor:pointer line-through`,
    button:`cursor:pointer flex items-center border border-sky-300 opacity-80 rounded-sm p-1`
}

const Todo = ({todo, toggleStatus, deleteTodo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <div className="checkbox-wrapper-33">
              <label class="checkbox">
                <input className="checkbox__trigger visuallyhidden" type="checkbox" onChange={()=> toggleStatus(todo)} checked={todo.completed ? 'checked' : ''} />
                <span className="checkbox__symbol">
                  <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>                
              </label>
            </div>
            <p onClick={()=> toggleStatus(todo)} className={todo.completed ? style.textComplete : style.text}>
                {todo.text}
            </p>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className={style.button}><MdOutlineDelete/></button>
    </li>
  )
}

export default Todo