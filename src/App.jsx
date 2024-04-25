import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import OverLayDrawer from "./components/OverLayDrawer";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://6628cb7c54afcabd0736f739.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
      axios
      .get("https://6628cb7c54afcabd0736f739.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const addToCart = (obj) => {
    axios
      .post("https://6628cb7c54afcabd0736f739.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    // axios
    //   .delete(`https://6628cb7c54afcabd0736f739.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
  

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <OverLayDrawer
          zalupa={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between  mb-40">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "All sneakers"}
          </h1>
          <div className="search-block d-flex">
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
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
        <div className="d-flex flex-wrap">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={() => console.log("Added to bookmarks")}
              onPlus={(obj) => addToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
