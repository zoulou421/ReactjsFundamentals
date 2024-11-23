import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="m-5">
       <Counter title="Counter 1" value={1} image="images/profile1.png" />
    </div>
  );
}

export default App;
