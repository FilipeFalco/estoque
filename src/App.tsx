import 'antd/dist/antd.dark.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListItems from './pages/ListItems';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<ListItems />} />
          <Route element={<Login />} path={'login'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
