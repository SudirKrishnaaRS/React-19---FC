import "./Card.css";

const Card = ({ data }) => {
  const { title, body } = data;
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Card;
