//image carousel
console.log("recipe list js loaded");

//example request
/* var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
    }
};

xhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken", true);
xhttp.send(); */

//create list of recipes that are displayed
var listedRecipes = [];

//clears shown recipes
function clearList() {
	//loop througha array and remove each recipe
	for(var i = 0;i < listedRecipes.length;i++){
		document.getElementById(listedRecipes[i]).remove();
	}
	listedRecipes = [];
	//show message
	document.getElementById("emptytList").style.display = "auto";
}

//display recipes from catagory
function showCategory(category) {
	event.preventDefault();
	console.log("catagory serach");
	
	var categoryRequest = new XMLHttpRequest();

	categoryRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			recipeData = JSON.parse(this.responseText);
			clearList();
			if(recipeData.meals != null) {
				for(var i = 0;i < recipeData.meals.length;i++)
					showRecipe(recipeData.meals[i]);
			}
			
		}
	};
	//get the right url
	var url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
	categoryRequest.open("GET", url, true);
	categoryRequest.send();
	
}

// display recipes from search bar
function searchSubmit() {
	event.preventDefault();
	console.log("search submitted");
	
	var searchRequest = new XMLHttpRequest();

	searchRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			recipeData = JSON.parse(this.responseText);
			clearList();
			if(recipeData.meals != null) {
				for(var i = 0;i < recipeData.meals.length;i++)
					showRecipe(recipeData.meals[i]);
			}
			
		}
	};
	//get the right url
	var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + document.getElementById("searchBar").value;
	searchRequest.open("GET", url, true);
	searchRequest.send();
	
	//if list empty show message
	//if(listedRecipes[0] == null)
		document.getElementById("emptytList").style.display = "block";
}


//display recipe from random
function showRandom() {
	event.preventDefault()
	console.log("random recipe");
	
	var randomRequest = new XMLHttpRequest();

	randomRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			recipeData = JSON.parse(this.responseText);
			console.log(recipeData.meals[0].strMealThumb);
			clearList();
			showRecipe(recipeData.meals[0]);
		}
	};

	randomRequest.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php", true);
	randomRequest.send();
}

//displays individual recipes
function showRecipe(recipe) {
	
	//create new div of class "smlRecipe" and id of the text
	var newRecipe = document.createElement("div");
    newRecipe.classList.add("smlRecipe");
	newRecipe.setAttribute("id", recipe.idMeal);
	//create and add the image
	var newImg = document.createElement("img");
	newImg.classList.add("smlImg");
	newImg.setAttribute("src", recipe.strMealThumb);
	newRecipe.appendChild(newImg);
	//create the text
	var newTextBox = document.createElement("div");
	newTextBox.classList.add("smlText");
	var newTitle = document.createElement("p");
	newTitle.classList.add("smlTitle");
	newTitle.innerHTML = recipe.strMeal;
	var newIngredients = document.createElement("p");
	newIngredients.classList.add("smlIngredients");
	newIngredients.innerHTML = "This recipe contains " + getNumIngredients(recipe) + " ingredients.";
	newTextBox.appendChild(newTitle);
	newTextBox.appendChild(newIngredients);
	newRecipe.appendChild(newTextBox);
	//create the button
	var newButton = document.createElement("button");
	newButton.classList.add("smlBtn");
	newButton.innerHTML = "View Recipe";
	newRecipe.appendChild(newButton);
	
	//add recipe id to array
	listedRecipes = listedRecipes.concat(recipe.idMeal);
	console.log(listedRecipes);
	//hide empy list message
	document.getElementById("emptytList").style.display = "none";
	//display the new recipe
	document.getElementById("recipeList").appendChild(newRecipe);
}





//gets number of ingredients in recipe
function getNumIngredients(recipe) {
	//loop through list looking for empty ingredient
	if(recipe.strIngredient1 == "")
		return 0;
	if(recipe.strIngredient2 == "")
		return 1;
	if(recipe.strIngredient3 == "")
		return 2;
	if(recipe.strIngredient4 == "")
		return 3;
	if(recipe.strIngredient5 == "")
		return 4;
	if(recipe.strIngredient6 == "")
		return 5;
	if(recipe.strIngredient7 == "")
		return 6;
	if(recipe.strIngredient8 == "")
		return 7;
	if(recipe.strIngredient9 == "")
		return 8;
	if(recipe.strIngredient10 == "")
		return 9;
	if(recipe.strIngredient11 == "")
		return 10;
	if(recipe.strIngredient12 == "")
		return 11;
	if(recipe.strIngredient13 == "")
		return 12;
	if(recipe.strIngredient14 == "")
		return 13;
	if(recipe.strIngredient15 == "")
		return 14;
	if(recipe.strIngredient16 == "")
		return 15;
	if(recipe.strIngredient17 == "")
		return 16;
	if(recipe.strIngredient18 == "")
		return 17;
	if(recipe.strIngredient19 == "")
		return 18;
	if(recipe.strIngredient20 == "")
		return 19;
	return 20;
}










