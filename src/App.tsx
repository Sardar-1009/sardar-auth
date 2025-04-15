<<<<<<< HEAD
import {ReactNode} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore.ts';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Container, CssBaseline } from '@mui/material';
import { Posts } from './pages/Posts.tsx';
import { CreatePost } from './pages/CreatePost.tsx';
import Header from './components/Header.tsx';
import {Home} from './pages/Home.tsx';
import Profile from "./pages/Profile.tsx";
import { CreateProfile } from './pages/CreateProfile.tsx';
<<<<<<< HEAD
import Post from "./pages/Post.tsx";
=======
=======
import { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.ts";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Container, CssBaseline } from "@mui/material";
import { Posts } from "./pages/Posts.tsx";
import { CreatePost } from "./pages/CreatePost.tsx";
import Header from "./components/Header.tsx";


const PrivateRoute = ({ element }: { element: ReactNode }) => {
  const { user } = useAuthStore();
  return user ? element : <Navigate to="/login" />;
};


const PublicRoute = ({ element }: { element: ReactNode }) => {
  const { user } = useAuthStore();
  return !user ? element : <Navigate to="/" />;
};
>>>>>>> 84ea1ff005b11214180328090c321b687f5c7b43
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3


const PrivateRoute = ({ element }: { element: ReactNode }) => {
  const { user } = useAuthStore();
  return user ? element : <Navigate to=
                                        "/login" />;
};
const PublicRoute = ({ element }: { element: ReactNode }) => {
  const { user } = useAuthStore();
  return !user ? element : <Navigate to=
                                         "/" />;
};
export const App = () => {
  return (
<<<<<<< HEAD
      <>
        <CssBaseline />
        <Header />
        <Container sx={{ mt: 5 }}>
          <Routes>
            <Route path=
                       "/" element={<PrivateRoute element={<Posts />} />} />
              <Route path=
                         "/post" element={<PrivateRoute element={<Post />} />} />
            <Route path=
                       "/add-post" element={<PrivateRoute element={<CreatePost />} />}
            />
            <Route path=
                       "/login" element={<PublicRoute element={<Login />} />} />
            <Route path=
                       "/register" element={<PublicRoute element={<Register />} />} />
            <Route path=
                       "*" element={<Navigate to="/" />} />
            <Route path=
                       "/home" element={<PrivateRoute element={<Home />}/>}/>
            <Route path=
                       "/profile" element={<PrivateRoute element={<Profile />}/>}/>
<<<<<<< HEAD
            <Route path="/create-profile"
                        element={<PrivateRoute element={<CreateProfile />} />}/>

=======
            <Route
                  path=
                        "/create-profile"  element={<PrivateRoute element={<CreateProfile />} />}/>
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
          </Routes>
        </Container>
      </>
  );
};
export default App;
=======
    <>
      <CssBaseline />
      <Header />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Posts />} />} />
          <Route
            path="/add-post"
            element={<PrivateRoute element={<CreatePost />} />}
          />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route
            path="/register"
            element={<PublicRoute element={<Register />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
};


export default App;
>>>>>>> 84ea1ff005b11214180328090c321b687f5c7b43
