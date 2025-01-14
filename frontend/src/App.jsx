import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import CreateClient from './pages/createCliente.jsx';


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/createCliente' element={<CreateClient />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  );

}

export default App;