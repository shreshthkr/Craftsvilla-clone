import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SelectPage from './Components/Navbar/SelectPage';
import AllRoutes from './Routes/AllRoutes';

function App() {

 useEffect(() => {
  document.title = "CraftsVilla"
 })

  return (
    <div className="App">
    <Navbar />
    <SelectPage />
    <AllRoutes />
    </div>
  );
}

export default App;
