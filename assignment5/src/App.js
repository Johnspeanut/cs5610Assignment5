import './App.css';
import { useSelector} from 'react-redux';
import FourSquare from './components/FourSquares';

function App() {
  const counter = useSelector(state => state.counter);
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <FourSquare></FourSquare>
    </div>
  );
}

export default App;
