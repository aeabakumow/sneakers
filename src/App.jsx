import Card from "./components/Card";
import Header from "./components/Header";
import OverLayDrawer from "./components/OverLayDrawer";

const arr = [
  {
    title: "Nike Blazer Mid Suede Men's Sneakers",
    price: 129.99,
    imageUrl: "/sneakers/01.jpg",
  },
  {
    title: "Nike Air Max 270 Men's Sneakers",
    price: 129.99,
    imageUrl: "/sneakers/02.jpg",
  },
  {
    title: "Nike Blazer Mid Suede Men's Sneakers",
    price: 84.99,
    imageUrl: "/sneakers/03.jpg",
  },
  {
    title: "Puma X Aka Boku Future Rider sneakers",
    price: 129.99,
    imageUrl: "/sneakers/04.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <OverLayDrawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between  mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="src\assets\search.svg" alt="Search" />
            <input placeholder="Search ..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavorite={() => console.log('Added to bookmarks')}
              onClickPlus={() => console.log('Pressed plus')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
