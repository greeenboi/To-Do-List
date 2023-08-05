// import logo from './logo.svg';
import './App.css';
import React , {useState , useEffect} from 'react';
import Todo from './Todo';

import { BsSend } from 'react-icons/bs'

import { db } from './firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore'


function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() =>{
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) =>{
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    })

    return () => unsubscribe();
  },[])

  const toggleStatus = async (todo) =>{
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  const createTodo = async (e) => {
    e.preventDefault(e)
    if(input === ''){
      alert('Please enter a valid task name')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,

    })
    setInput('')
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <>
      <main>
          <h1 className='shadow '>My Tasks of the day</h1>
        <section className=' flex flex-col justify-around sm:p-8 md:p-32 items-center border-opacity-40 border-cyan-200 border shadow-xl'>
                
          
          <form onSubmit={createTodo} className='flex flex-col lg:flex-row sm:w-full xl:w-1/2 align-middle justify-evenly gap-2'>            
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="What shall we do today ?" className='h-auto text-ellipsis bg-transparent text-gray-950 border p-2 w-full text-xl rounded-sm font-sans'/>
            <button type="submit" className=' items-center border sm:p-2 md:p-4 bg-opacity-30 bg-slate-600 border-sky-300 opacity-80 rounded-lg font-sans'><BsSend/></button>
          </form>       

        <ul className='flex flex-col w-full justify-center items-center p-0 m-2'>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} deleteTodo={deleteTodo} toggleStatus={toggleStatus}/>
            
            ))}
          
        </ul>
            
        <p>
          {todos.length < 1 ? `Lets do something Today Shall We?` : `You have ${todos.length} tasks left!` }
        </p>           
        </section>
      </main>

    </>
  );
}

export default App;
