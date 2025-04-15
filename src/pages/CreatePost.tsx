<<<<<<< HEAD
import React, { useState } from 'react';
import { Button, TextField, Container, Box, Typography } from '@mui/material';
import { useAuthStore } from '../store/useAuthStore.ts';
<<<<<<< HEAD
import { createPost } from '../api/posts';
export const CreatePost = () => {
    const [content, setContent] = useState('');
    const { user, profile } = useAuthStore();

=======
import {axiosApi} from '../axiosAPI.ts';



export const CreatePost = () => {
    const [content, setContent] = useState('');
    const { user, profile } = useAuthStore();
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        await createPost ({
            content,
            userId: user.id,
            createdAt: new Date().toISOString(),
            email: user.email || ''
        })
        setContent('');
<<<<<<< HEAD
    }
    if (profile?.role === "admin") {
        return (
            <Typography variant="h6" align="center" color="error">
                You are not authorized to create a post!
                <br /> Only admins can create posts.
            </Typography>
        );
    }
        
=======
        if (profile?.role !== "admin" || !profile) {
            return (
        <Typography variant="h6" align="center" color="error">
            You are not authorized to create a post!
            <br /> Only admins can create posts.
        </Typography>
        );
        }
    };
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
    return (
        <Container maxWidth=
                       "md">
            <Box sx={{ mt: 4 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label=
                            "New Post"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button variant=
                                "contained" type=
                                "submit" sx={{ mt: 2 }}>
                        Create Post
                    </Button>
                </form>
            </Box>
        </Container>
    );
};
=======
import React, { useState } from "react";
import { Button, TextField, Container, Box } from "@mui/material";
import { useAuthStore } from "../store/useAuthStore.ts";
import { axiosApi } from "../axiosapi.ts";
export const CreatePost = () => {
  const [content, setContent] = useState("");
  const { user } = useAuthStore();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    await axiosApi.post("/posts.json", {
      content,
      userId: user.id,
      email: user.email,
      createdAt: new Date().toISOString(),
    });
    setContent("");
  };
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="New Post"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Create Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};
>>>>>>> 84ea1ff005b11214180328090c321b687f5c7b43
