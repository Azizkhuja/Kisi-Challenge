import React from "react";
import { useParams } from "react-router";

const Test = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Apple - {id}</p>
    </div>
  );
};

export default Test;
