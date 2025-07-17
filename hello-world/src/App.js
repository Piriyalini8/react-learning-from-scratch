import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
      {/* <EventBind/> */}
      {/* <ClassClick/>
      <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name='Priya' heroName='Wonder Woman'>
        <p>This is Children paragraph</p>
      </Greet>
      <Greet name='Kishan' heroName='SpiderMan'>
        <button>Action</button>
      </Greet> */}
      {/* <Greet name='Pavi' heroName='Bat man'/> */}
      {/* <Welcome name='Priya' heroName='Wonder Woman'>
        <p>This is Children paragraph</p>
      </Welcome> */}
      {/* <Welcome name='Kishan' heroName='SpiderMan'/> */}
      {/* <Welcome name='Pavi' heroName='Bat man'/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
