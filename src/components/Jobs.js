import React from "react";
const Jobs = (props) => {
  return (
    <>
      <h2 className="cardTitle">{props.cardTitle}</h2>
      <p className="post">{props.post}</p>
    </>
  );
};

export default Jobs;
