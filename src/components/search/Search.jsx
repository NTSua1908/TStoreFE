import React, { useState } from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import "./search.scss";

function Search(props) {
  const [keyword, setKeyword] = useState();

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/discover");
  };

  return (
    <div className="home__search">
      <input
        type="text"
        placeholder="Tìm kiếm"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.currentTarget.value);
        }}
      />
      <Button onClick={handleSearch} className="btn btn-detail btn-search">
        Tìm kiếm
      </Button>
    </div>
  );
}

export default Search;
