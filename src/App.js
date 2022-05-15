import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Mock from "./components/Mock/Mock"
import Pagination from "./components/Pagination/Pagination";
import StatusList from "./components/Lists/StatusList";
import usersData from "./jsonData/users";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  useEffect(() => {
    setPosts(usersData)
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="main mt-5">
      <div className="col-lg-8 user-list">
        <div className="search mt-5">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            onChange={inputHandler}
            label="Search"
          />
        </div>
        <Mock searchValue={inputText} posts={currentPosts}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      <div className="col-lg-3">
        <StatusList />
      </div>
    </div>
  );
}

export default App;