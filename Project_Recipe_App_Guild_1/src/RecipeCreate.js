import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleCuisineChange = (e) => {
    setCuisine(e.target.value)
  }

  const handlePhotoChange = (e) => {
    setPhoto(e.target.value)
  }

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value)
  }

  const handlePreparationChange = (e) => {
    setPreparation(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name, 
      cuisine,
      photo,
      ingredients, 
      preparation,
    }

    addRecipe(newRecipe);

    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input id="name" name="name" type="text" value={name} onChange={handleNameChange} placeholder="Name" /></td>
            <td><input id="cuisine" name="cuisine" type="text" value={cuisine} onChange={handleCuisineChange} placeholder="Cuisine" /></td>
            <td><input id="photo" name="photo" type="url" value={photo} onChange={handlePhotoChange} placeholder="URL" /></td>
            <td><textarea id="ingredients" name="ingredients" value={ingredients} onChange={handleIngredientsChange} placeholder="Ingredients" /></td>
            <td><textarea id="preparation" name="preparation" value={preparation} onChange={handlePreparationChange} placeholder="Preparation" /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
