function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="mb-30">Pannier</h2>

          <div className="items flex">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/sneakers/01.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Nike Air Max 270 Men's Sneakers</p>
                <b>129,9$</b>
              </div>
              <img
                className="removeBtn"
                src="src\assets\btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/sneakers/01.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">Nike Air Max 270 Men's Sneakers</p>
                <b>129,9$</b>
              </div>
              <img
                className="removeBtn"
                src="src\assets\btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
          <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>214,98$</b>
              </li>
              <li>
                <span>Tax 5%:</span>
                <div></div>
                <b>10,74$</b>
              </li>
            </ul>
            <button className="greenButton">Checkout <img src="src\assets\arrow.svg" alt="Arrow" /></button>
          </div>
        
        </div>
      </div>

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
        <div className="d-flex align-center justify-between  mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="src\assets\search.svg" alt="Search" />
            <input placeholder="Search ..." />
          </div>
        </div>
        <div className="d-flex justify-between">
          <div className="card">
            <div className="favorite">
              <img src="src\assets\heart-unliked.svg" alt="unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/sneakers/01.jpg"
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
              src="/sneakers/02.jpg"
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
              src="/sneakers/03.jpg"
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
              src="/sneakers/04.jpg"
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
