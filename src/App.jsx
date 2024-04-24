import Card from "./components/Card";
import Header from "./components/Header";
import OverLayDrawer from "./components/OverLayDrawer";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6628cb7c54afcabd0736f739.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const addToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  console.log(cartItems);

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <OverLayDrawer zalupa={cartItems} onClose={() => setCartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between  mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="src\assets\search.svg" alt="Search" />
            <input placeholder="Search ..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              key={item.id}
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
