$(document).ready(function () {

	var ingredientList = []

	$("#userTextInput").keypress(function (event) {
		if (event.which === 13) {
			console.log(event)
			var text = $("#userTextInput").val();
			var drinkBtn = $("<button>").addClass("button m-1 is-warning has-text-weight-bold").text(text);
			var drinkDelete = $("<button>").addClass("delete is-small");
			drinkBtn.append(drinkDelete);
			$("#ingredientsCol").append(drinkBtn)

			ingredientList.push($("#userTextInput").val());
			console.log(ingredientList);
			$("#userTextInput").val("")

		}
	})


	$("#ingredientsCol").on("click", ".button > .delete", function () {
		$(this).parent().remove();
		console.log($(this));

	})


	$("#resetButton").click(function () {
		$("#ingredientsCol").empty();
		console.log("this is working");
		$("#mainContainer").hide();
	});

	$("#resetButton").click(function () {
		return ingredientList = [];
	})


	$("#searchButton").click(function () {

		$.ajax({
			type: "GET",
			url: "https://www.thecocktaildb.com/api/json/v2/" + drinkKey + "/filter.php?i=" + ingredientList,
			success: function (response) {
				console.log(response);

				var drinkArray = response.drinks;
				console.log(drinkArray);
				console.log(ingredientList);

				if (drinkArray != "None Found") {

					$("#mainContainer").show();

					function randomDrinks() {
						drinkResponse1 = (drinkArray[Math.floor(Math.random() * drinkArray.length)]);
						drinkResponse2 = (drinkArray[Math.floor(Math.random() * drinkArray.length)]);
						drinkResponse3 = (drinkArray[Math.floor(Math.random() * drinkArray.length)]);
						drinkResponse4 = (drinkArray[Math.floor(Math.random() * drinkArray.length)]);
						drinkResponse5 = (drinkArray[Math.floor(Math.random() * drinkArray.length)]);

						//setting variable for drink name
						var d1 = drinkResponse1.strDrink;
						var d2 = drinkResponse2.strDrink;
						var d3 = drinkResponse3.strDrink;
						var d4 = drinkResponse4.strDrink;
						var d5 = drinkResponse5.strDrink;

						//setting variable for drink image
						var img1 = drinkResponse1.strDrinkThumb;
						var img2 = drinkResponse2.strDrinkThumb;
						var img3 = drinkResponse3.strDrinkThumb;
						var img4 = drinkResponse4.strDrinkThumb;
						var img5 = drinkResponse5.strDrinkThumb;

						//setting variable for drink id
						var id1 = drinkResponse1.idDrink;
						var id2 = drinkResponse2.idDrink;
						var id3 = drinkResponse3.idDrink;
						var id4 = drinkResponse4.idDrink;
						var id5 = drinkResponse5.idDrink;

						//adds drink name to the HTML 
						$("#title1").text(d1);
						$("#title2").text(d2);
						$("#title3").text(d3);
						$("#title4").text(d4);
						$("#title5").text(d5);

						//adds image to the HTML
						$("#recipeImage1").attr("src", img1);
						$("#recipeImage2").attr("src", img2);
						$("#recipeImage3").attr("src", img3);
						$("#recipeImage4").attr("src", img4);
						$("#recipeImage5").attr("src", img5);

						//adds text to hyperlink and sets the destination to the drink recipe website
						$("#link1").attr("action", "https://www.thecocktaildb.com/drink/" + id1);
						$("#link2").attr("action", "https://www.thecocktaildb.com/drink/" + id2);
						$("#link3").attr("action", "https://www.thecocktaildb.com/drink/" + id3);
						$("#link4").attr("action", "https://www.thecocktaildb.com/drink/" + id4);
						$("#link5").attr("action", "https://www.thecocktaildb.com/drink/" + id5);
					}

					randomDrinks();
				
				} 
			}
		});
	});
});
