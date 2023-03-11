import LoginPage from './Components/Login/LoginPage';
import MainPage from './Components/Main/MainPage';
import { Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Routes>
      <Route  path='/login' element={<LoginPage/>}/>
        <Route  path='/' element={<MainPage/>}/>
      </Routes>
  );
}

export default App;
