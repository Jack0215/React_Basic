import './App.css';
import Contact from './components/Contact';
import Contact2 from './components/Contact2';

function App() {
  return (
    <div className="App">
     <Contact mesg ="홍길동" mesg2="10" />
     <Contact2 mesg ="이순신" mesg2="50" />
    </div>
  );
}

export default App;
