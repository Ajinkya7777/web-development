import React from "react";

const MyCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="heading">{props.heading}</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            soluta cupiditate dicta, in mollitia unde officiis ab perferendis
            aperiam perspiciatis voluptatem cumque enim, adipisci, similique
            dolorem corrupti natus voluptatum amet error. Ad in ullam dolor
            magnam veritatis qui. Rerum, nostrum.
          </p>
        </div>
      </div>
    </>
  );
};

export default MyCard;
