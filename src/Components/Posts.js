import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import BlogLayout from "./BlogLayout";

function Posts() {
  const { posts } = useSelector((state) => state.postReducer);
  const filters = useSelector((state) => state.filters);
  // const filterByPost = (post) => {
  //   const { value } = filters;
  //   console.log(value);
  //   if (value.length > 0) {
  //     return post.title.toLowerCase().includes(value.toLowerCase().trim());
  //   }
  //   return true;
  // };

  // function debounce(fn, delay) {
  //   let timeOut
  //   return function () {
  //         if (timeOut) {
  //           clearTimeout(timeOut);
  //         }
  //         timeOut = setTimeout(() => {
  //           fn();
  //         }, delay);
  //   }
  // }

  return (
    <BlogLayout>
      {posts
        .filter((post) => {
          const { value } = filters;
          console.log(value);
          if (value.length > 0) {
            return post.title
              .toLowerCase()
              .includes(value.toLowerCase().trim());
          }
          return true;
        })
        .map((post) => (
          <Post key={post.id} {...post} />
        ))}
    </BlogLayout>
  );
}

export default Posts;
