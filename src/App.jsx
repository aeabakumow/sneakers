import Card from './components/Card';
import Header from './components/Header';
import OverLayDrawer from './components/OverLayDrawer';


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
        <div className="d-flex justify-between">
          <Card />
        </div>
        
      </div>
    </div>
  );
}

export default App;
