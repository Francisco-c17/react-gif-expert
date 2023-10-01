import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCaregory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
    console.log("newCategory", newCategory);
  };
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}

      <AddCategory onNewCategory={(value) => onAddCaregory(value)} />

      {/* Listado de Gif */}
      {/* <button onClick={onAddCaregory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};

//const apikey = hooQeAkwCtBogIsDN2qVNndTxEt9yMpR;
