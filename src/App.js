import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Menu from './pages/Menu/Menu';
import Table from './pages/Table/Table';

function App() {

  return (
    <Router >
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/menu' >
          <Route index element={<Menu />} />
          <Route path='table' element={<Table />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
