/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-white">Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
