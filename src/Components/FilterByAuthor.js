import BlogLayout from "./BlogLayout";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "./Post";

function FilterByAuthor() {
  //   const location = useLocation();
  //   console.log(location);
  const postReducer = useSelector((state) => state.postReducer);
  const filters = useSelector((state) => state.filters);
  console.log(postReducer);
  const { posts } = postReducer;
  console.log(posts);
  const { author } = useParams();
  console.log(author);
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  console.log(blog);
  useEffect(() => {
    setLoading(false);
    let blog = posts.filter((blog) => blog.author_name === author);
    console.log(blog);
    if (blog) {
      setBlog(blog);
    }
    setLoading(true);
    //   eslint-disable-next-line
  }, [posts, author]);
  return loading ? (
    <BlogLayout>
      {blog
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
        //   console.log("Name Test " + author_names);
        //   if (todo.author_name === author_name) {
        //     return author_name.includes(todo.author_name);
        //   }
        //   return true;
        // })
        .map((post) => (
          <Post key={post.id} {...post} />
        ))}
    </BlogLayout>
  ) : (
    "Loading"
  );
}

export default FilterByAuthor;
