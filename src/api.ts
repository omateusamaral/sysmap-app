import axios from "axios";
import { Comment, Post } from "./interfaces/posts";
import { User } from "./interfaces/users";

function createInstance() {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 4000,
  });
}

export async function listUsers(): Promise<User[]> {
  try {
    const instance = createInstance();
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUser(userId: number): Promise<User> {
  try {
    const instance = createInstance();
    const response = await instance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function listPosts(): Promise<Post[]> {
  try {
    const instance = createInstance();
    const response = await instance.get("/posts");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function listComments(postId: number): Promise<Comment[]> {
  try {
    const instance = createInstance();
    const response = await instance.get(`posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
