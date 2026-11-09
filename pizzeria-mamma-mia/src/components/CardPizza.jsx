import { formatNumber } from "../utils/formatNumber";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />

      <div className="card-body border-bottom">
        <h5 className="card-title mb-0">Pizza {name}</h5>
      </div>

      <div className="card-body text-center border-bottom">
        <p className="text-secondary mb-1">Ingredientes:</p>
        <ul className="list-unstyled small mb-0">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>🍕 {ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="card-body text-center">
        <h5 className="mb-3">Precio: ${formatNumber(price)}</h5>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
