<<<<<<< HEAD
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useAuthStore} from '../store/useAuthStore.ts';
import {Link, useNavigate} from 'react-router-dom';
import {userSignOut} from '../firebase.ts';

export default function Header() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
<<<<<<< HEAD
    const {user, clearUser, profile} = useAuthStore();
=======
    const {user, clearUser, profile } = useAuthStore();
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (route: string) => {
        setAnchorEl(null);
        navigate(route);
    };
    const logOut = async () => {
        await userSignOut()
        clearUser();
        navigate('/login')
    }
    return (
        <AppBar position=
                    "static">
            <Toolbar>
                <Typography variant=
                                "h6" component=
                                "div" sx={{ flexGrow: 1 }}>
                    Auth app
                </Typography>
                {user && (
                    <div>
                        <IconButton
                            size=
                                "large"
                            onClick={handleMenu}
                            color=
                                "inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                         {!profile && <MenuItem onClick={() => handleClose('/create-profile')}>Create profile</MenuItem>
                        }
                            <MenuItem onClick={() => handleClose('/')}>Home</MenuItem>
                            {!profile && (<MenuItem onClick={() => handleClose('/create-profile')}>Create Profile</MenuItem>)}
                            <MenuItem onClick={() => handleClose('Profile')}>Profile</MenuItem>
                            <MenuItem onClick={() => handleClose('/add-post')}>Add
                                post</MenuItem>
                            <MenuItem onClick={logOut}>Log out</MenuItem>
                        </Menu>
                    </div>
                )}
                {
                    !user &&
                    <div style={{display: 'flex'
                        , alignItems: 'center'
                        , gap: '24px'}}>
                        <Link to={'/login'} style={{color: 'white'
                            , textDecoration:
                                'none'}}>Login</Link>
                        <Link to={'/register'} style={{color: 'white'
                            , textDecoration:
                                'none'}}>Register</Link>
                    </div>
                }
            </Toolbar>
        </AppBar>
    );
}
=======
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useAuthStore } from "../store/useAuthStore.ts";
import { Link, useNavigate } from "react-router-dom";
import { userSignOut } from "../firebase.ts";
export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, clearUser } = useAuthStore();
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (route: string) => {
    setAnchorEl(null);
    navigate(route);
  };
  const logOut = async () => {
    await userSignOut();
    clearUser();
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Auth app
        </Typography>
        {user && (
          <div>
            <IconButton size="large" onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleClose("/")}>Home</MenuItem>
              <MenuItem onClick={() => handleClose("/add-post")}>
                Add post
              </MenuItem>
              <MenuItem onClick={logOut}>Log out</MenuItem>
            </Menu>
          </div>
        )}
        {!user && (
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link
              to={"/login"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              to={"/register"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
>>>>>>> 84ea1ff005b11214180328090c321b687f5c7b43
