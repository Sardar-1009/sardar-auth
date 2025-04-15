<<<<<<< HEAD
import { useEffect, useState } from 'react';
import {Box, List, ListItem, Typography, Select, MenuItem, Card} from '@mui/material';
import {Link} from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore';
import {IPost} from '../types'
import { getPosts } from '../api/posts';


export const Posts = () => {
<<<<<<< HEAD
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts(selectedUserId);
        setPosts(postsData);
      } catch (error){
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [selectedUserId, user?.id]);

=======
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<string>('');
    const { user } = useAuthStore();
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const params: { orderBy?: string; equalTo?: string } = {};
                if (selectedUserId) {
                    params.orderBy =
                        '"userId"';
                    params.equalTo =
                        `"${selectedUserId}"`
                    ;
                }
                const response = await axiosApi.get('/posts.json'
                    , {
                        params: selectedUserId ? params : {}
                    });
                const data = response.data || {};
                const postsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setPosts(postsArray);
            } catch (error) {
                console.error('Error fetching posts:'
                    , error);
                setPosts([]);
            }
        };
        fetchPosts();
    }, [selectedUserId, user]);
    return (
        <Box sx={{ mt: 4 }}>
            <Select
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value as string)}
                displayEmpty
            >
                <MenuItem value=
                              "">All Posts</MenuItem>
                <MenuItem value={user?.id || ''}>My Posts</MenuItem>
            </Select>
            <List>
                {posts.map((post) => (
                    <ListItem key={post.id}>
                        <Typography>
                            {post.content} - {new Date(post.createdAt).toLocaleDateString()}
                            Author: {post.email}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
=======
import { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useAuthStore } from "../store/useAuthStore";
import { axiosApi } from "../axiosapi.ts";
interface Post {
  id: string;
  content: string;
  userId: string;
  email: string;
  createdAt: string;
}
export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const { user } = useAuthStore();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const params: { orderBy?: string; equalTo?: string } = {};
        if (selectedUserId) {
          params.orderBy = '"userId"';
          params.equalTo = `"${selectedUserId}"`;
        }
        const response = await axiosApi.get("/posts.json", {
          params: selectedUserId ? params : {},
        });
        const data = response.data || {};
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPosts(postsArray);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      }
    };
    fetchPosts();
  }, [selectedUserId, user]);
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
  return (
    <Box sx={{ mt: 4 }}>
      <Select
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value as string)}
        displayEmpty
      >
        <MenuItem value="">All Posts</MenuItem>
<<<<<<< HEAD
        <MenuItem value={user?.id || ''}>My Posts</MenuItem>
      </Select>

=======
        <MenuItem value={user?.id || ""}>My Posts</MenuItem>
      </Select>
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <Typography>
<<<<<<< HEAD
                <Card
                component={Link}
                to={`/post/${post.id}`}
                >
                    {post.content} - {new Date(post.createdAt).toLocaleDateString()}
                </Card>
=======
              {post.content} - {new Date(post.createdAt).toLocaleDateString()}
              Author: {post.email}
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 84ea1ff005b11214180328090c321b687f5c7b43
>>>>>>> 39ce9c87b762ba43453b1e4927d8979ec2529fa3
