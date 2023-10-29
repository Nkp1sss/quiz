import { CardType } from './types';

import './Card.scss';

export default function Card({ image, title, oldPrice, price }: CardType) {
  return (
    <div className="card">
      <img className="heart" src="/heart.svg" alt="heart" />
      <div className="image-container">
        <img className="image" src={image} alt="picture" />
      </div>
      <p className="card__title">{title.substring(0, 35)}...</p>
      <div className="card-price">
        { oldPrice && <p className="card__oldPrice">{oldPrice.toFixed(2)}</p> }
        <p className="card__price">
          {`${price.toFixed(2)}`}
          <span style={{ fontSize: '20px', marginLeft: '3px' }}>руб.</span>
        </p>
      </div>
    </div>
  );
}
