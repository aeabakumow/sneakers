function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex alig-center">
          <img width={40} height={40} src="src\assets\logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p className="opacity-5">The best sneakers store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="src\assets\cart.svg" alt="" />
            <span>12,05 $</span>
          </li>
          <li>
            <img width={18} height={18} src="src\assets\user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>
        <div className="d-flex justify-between">
        <div className="card">
          <img
            width={133}
            height={112}
            src="public\sneakers\01.jpg"
            alt="Sneakers"
          />
          <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>129,99 $</b>
            </div>
            <button className="button">
              <img
                width={11}
                height={11}
                src="src\assets\plus.svg"
                alt="Plus"
              />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            src="public\sneakers\02.jpg"
            alt="Sneakers"
          />
          <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>129,99 $</b>
            </div>
            <button className="button">
              <img
                width={11}
                height={11}
                src="src\assets\plus.svg"
                alt="Plus"
              />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            src="public\sneakers\03.jpg"
            alt="Sneakers"
          />
          <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>129,99 $</b>
            </div>
            <button className="button">
              <img
                width={11}
                height={11}
                src="src\assets\plus.svg"
                alt="Plus"
              />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            src="public\sneakers\04.jpg"
            alt="Sneakers"
          />
          <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>129,99 $</b>
            </div>
            <button className="button">
              <img
                width={11}
                height={11}
                src="src\assets\plus.svg"
                alt="Plus"
              />
            </button>
          </div>
        </div>
        </div>
        ....
      </div>
    </div>
  );
}

export default App;
