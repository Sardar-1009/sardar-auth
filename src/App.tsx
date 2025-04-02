import {Navigate, Route, Routes} from 'react-router-dom';
import {useAuthStore} from './store/useAuthStore.ts';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {Container, CssBaseline} from '@mui/material';
import {useEffect} from 'react';
import {Home} from './pages/Home.tsx';
import './App.css';


export const App = () => {
  const {user, setUser} = useAuthStore();
  const savedUser = localStorage.getItem('user');

  useEffect(() => {
    if (!user && savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
    }
  }, [user, savedUser]);


  return (
    <>
      <CssBaseline/>
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={
            user ? <Home/> : <Navigate to="/login"/>
          }/>
          <Route path="/login" element={
            !user ? <Login/> : <Navigate to="/"/>
          }/>
          <Route path="/register" element={
            !user ? <Register/> : <Navigate to="/"/>
          }/>
        </Routes>
      </Container>
    </>
  );
};
export default App;
