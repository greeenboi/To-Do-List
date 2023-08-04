import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <section>
        <h1>My Tasks of the day</h1>
        <form className='flex flex-col w-1/2 shadow  justify-evenly gap-2'>
          <input type="text" placeholder="tasks" className='h-10 border p-2 w-full text-xl rounded-sm'/>
          <button type="submit" className='border p-4 bg-stone-600 border-l-sky-500 opacity-80 rounded-lg'>submit</button>
        </form>

        <ul>
          <li></li>
        </ul>

      </section>
      
      
    </main>
  );
}

export default App;
