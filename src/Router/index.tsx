import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import PostPage from "../pages/posts/Post";

type Props = {};

export default function Router({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="posts">
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
