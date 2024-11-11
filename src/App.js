import logo from './logo.svg';
import './App.css';
import Switchcase from './components/Switchcase';
import Statehook from './components/Statehook';
import { PrimeReactProvider } from 'primereact/api';



function App() {
  return (
    <PrimeReactProvider>

    <div className="App">
      
      <Switchcase></Switchcase>
      <Statehook></Statehook>
      
      
    </div>
      </PrimeReactProvider>
  );
}

export default App;
