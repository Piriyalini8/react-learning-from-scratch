import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name='Priya' heroName='Wonder Woman'>
        <p>This is Children paragraph</p>
      </Greet>
      <Greet name='Kishan' heroName='SpiderMan'>
        <button>Action</button>
      </Greet>
      <Greet name='Pavi' heroName='Bat man'/>
      <Welcome name='Priya' heroName='Wonder Woman'>
        <p>This is Children paragraph</p>
      </Welcome>
      <Welcome name='Kishan' heroName='SpiderMan'/>
      <Welcome name='Pavi' heroName='Bat man'/>
      {/* <Hello/> */}
    </div>
  );
}

export default App;
