import 'antd/dist/antd.dark.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthProvider } from './context/Auth';
import ListItems from './pages/ListItems';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedLayout>
                  <Layout>
                    <ListItems />
                  </Layout>
                </ProtectedLayout>
              }
              path={'/'}
            />
            <Route element={<Login />} path={'login'} />

            <Route
              element={
                <ProtectedLayout>
                  <Register />
                </ProtectedLayout>
              }
              path={'register'}
            />
            <Route
              element={
                <ProtectedLayout>
                  <Layout>
                    <Profile />
                  </Layout>
                </ProtectedLayout>
              }
              path={'profile'}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
