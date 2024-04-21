import React from 'react';
import stylesCard from './Card.module.scss';

console.log(stylesCard);

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.favorite} onClick={props.onClickFavorite}>
        <img src="src\assets\heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price} $</b>
        </div>
        <img
          className={stylesCard.plus}
          onClick={onClickPlus}
          src={
            isAdded ? "src/assets/btn-checked.svg" : "src/assets/btn-plus.svg"
          }
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;