import './App.css';
import Home from './components/Home';
import Result from './components/Result';
import DataProvider from './contexts/DataProvider';

function App() {
  return (
    <DataProvider>
      

    <Home/>
    <Result/>

    
    
    
    
    </DataProvider>
  );
}

export default App;
