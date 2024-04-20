function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="src\assets\heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src="/sneakers/01.jpg" alt="Sneakers" />
      <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>129,99 $</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="src\assets\plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;