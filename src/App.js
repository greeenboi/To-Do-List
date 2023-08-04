import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <section>
        <form className='flex flex-col w-1/2 shadow bg-slate-500'>
          <input type="text" placeholder="tasks" className='h-10'/>
          <button type="submit" >submit</button>
        </form>

      </section>
      
      
    </main>
  );
}

export default App;
