import React from "react";

const Citacoes = ({ texto, autor }) => {
  return (
    <div>
      <blockquote className="blockquote">
        <p>{texto}</p>
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>
    </div>
  );
};

export default Citacoes;
