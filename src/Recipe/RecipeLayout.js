import React from 'react';

const  RecipeLayout = ({title,calories, image, ingredients })=> {


  return (
    <div className="recipe-single card col-md-4 " style={{width: "18rem"}}>
    <div className="card-header">
    <strong>Calories: </strong>{calories}
  </div>
          <img src={image} alt={title} className="card-img-top" />
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{calories}</h6>
<ul className="list-group list-group-flush">
{ingredients.map(ingredient=>(
<li>{ingredient.text}</li>
))}
</ul>
        </div>
    </div>
  )
}

export default RecipeLayout;
