import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import BlogLayout from "./BlogLayout";

function Posts() {
  const { posts } = useSelector((state) => state.postReducer);
  const filters = useSelector((state) => state.filters);

  let debounceFilter = (post) => {
    const { value } = filters;
    console.log(value);
    if (value.length > 0) {
      return post.title.toLowerCase().includes(value.toLowerCase().trim());
    }
    return true;
  };

  return (
    <BlogLayout>
      {posts.filter(debounceFilter).map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </BlogLayout>
  );
}

export default Posts;
