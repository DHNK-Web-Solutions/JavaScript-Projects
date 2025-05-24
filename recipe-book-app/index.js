const API_KEY = "7c61dead3d8e437a8548b98589aec784";
const api_url = "https://api.spoonacular.com/recipes/random"
const recipeListEl = document.getElementById("recipeList");

function insertData(recipes) {
  console.log("done")
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    // Creating all elements
    var recipeItemEl = document.createElement("li");
    var recipeImgEl = document.createElement("img");
    var recipeTitleEl = document.createElement("h2");
    var recipeIngredientsEl = document.createElement("p");
    var recipeLinkEl = document.createElement("a");

    // Inserting Values/ class
    recipeItemEl.classList.add("listItem");
    recipeImgEl.src = recipe.image;
    recipeTitleEl.textContent = recipe.title;
    var ins = recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ");
    recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${ins}`;
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.target = "_blank";
    recipeLinkEl.textContent = "Click";

    // Appending Elements
    recipeListEl.appendChild(recipeItemEl);
    recipeItemEl.appendChild(recipeImgEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
    });
}

async function getData() {
  const url = api_url + `?number=10&apiKey=${API_KEY}`;
  try {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Response Status: ${result.status}`);
    }
    // const json = await result.json();
    const data = await result.json();
    const recipes = data.recipes;
    console.log(recipes);
    insertData(recipes);
    return recipes;    
  } catch (error) {
    console.error(error.message)
  }  
}

getData();