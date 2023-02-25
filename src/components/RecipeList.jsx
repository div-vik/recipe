import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "../service";

function RecipeLists(props) {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [querry, setQuerry] = useState("pizza");
  const [data, setData] = useState("");

  const searchRecipe = (searchQuerry) => {
    fetchData(searchQuerry).then((response) => {
      setData(response);
      props.setLoader(false);
      console.log(response);
    });
  };

  useEffect(() => {
    fetchData(querry).then((response) => {
      setData(response);
      props.setLoader(false);
    });
  }, []);
  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
            type="text"
            placeholder="Search your recipe"
          />
          <button
            onClick={() => (searchRecipe(searchedTerm), props.setLoader(true))}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data.hits.map((item, index) => (
            <div key={index} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecipeLists;
