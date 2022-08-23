/* eslint-disable no-unused-vars */
import { useParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "./MainLayout";

const Blog = () => {
  const location = useLocation();
  console.log(location);
  const { posts } = useSelector((state) => state.postReducer);
  console.log(posts);
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  console.log(blog);

  useEffect(() => {
    setLoading(false);
    let blog = posts.find((blog) => blog.id === parseInt(id));
    console.log(blog);
    if (blog) {
      setBlog(blog);
    }
    setLoading(true);
    //   eslint-disable-next-line
  }, [posts, id]);
  return loading ? (
    <MainLayout>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center mb-8">
          <img
            className="lg:w-4/6 md:w-4/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={blog.image}
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {blog.title}
            </h1>
            <p className="mb-8 leading-relaxed">{blog.body}</p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Home
            </Link>
          </div>
        </div>
      </section>{" "}
    </MainLayout>
  ) : (
    "loading"
  );
};

export default Blog;
