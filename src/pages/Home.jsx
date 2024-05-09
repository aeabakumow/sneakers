import React from "react";
import Card from "../components/Card/index";


function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  addToCart,
  isLoading,
}) {
  

  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => addToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };


  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between  mb-40">
        <h1>
          {searchValue ? `Search by request: "${searchValue}"` : "All sneakers"}
        </h1>
        <div className="search-block d-flex">
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="src\assets\btn-remove.svg"
              alt="Clear"
            />
          )}
          <img src="src\assets\search.svg" alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search ..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
