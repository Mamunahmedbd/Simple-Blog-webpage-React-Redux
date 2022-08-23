import { Provider } from "react-redux";
import Posts from "./Components/Posts";
import Store from "./Components/Redux/Store";
import { Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog";
import FilterByAuthor from "./Components/FilterByAuthor";
import FilterByCategory from "./Components/FilterByCategory";

function App() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/author/:author" element={<FilterByAuthor />} />
        <Route path="/category/:category" element={<FilterByCategory />} />
        <Route path="/" element={<Posts />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </Provider>
  );
}

export default App;
