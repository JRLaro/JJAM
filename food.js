$(document).ready(function () {
	var ingredientList = []
	const foodKey = "c6c6efb2c6cc9053c0c93e2cd2c6b0df"
	const foodId = "f57fbffd"

	$("#userTextInput").keypress(function (event) {
		if (event.which === 13) {
			console.log(event)
			var text = $("#userTextInput").val();
			var drinkBtn = $("<button>").addClass("button m-1 is-primary has-text-weight-bold").text(text);
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

	$("#searchButton").click(function () {
		$("#mainContainer").show();
	})

	$("#resetButton").click(function () {
		$("#ingredientsCol").empty();
		console.log("this is working");
		$("#mainContainer").hide();
	});

	$("#resetButton").click(function () {
		return ingredientList = [];
	});

	$("#searchButton").on("click", function () {
		$.ajax({
			type: "GET",
			url: "https://api.edamam.com/search?q=" + ingredientList + "&app_id=" + foodId + "&app_key=" + foodKey + "&from=0&to=5",
			success: function (response) {
				console.log(response);

				//variables for recipe names
				var recipe1 = response.hits[0].recipe.label;
				var recipe2 = response.hits[1].recipe.label;
				var recipe3 = response.hits[2].recipe.label;
				var recipe4 = response.hits[3].recipe.label;
				var recipe5 = response.hits[4].recipe.label;

				//variables for images
				var image1 = response.hits[0].recipe.image;
				var image2 = response.hits[1].recipe.image;
				var image3 = response.hits[2].recipe.image;
				var image4 = response.hits[3].recipe.image;
				var image5 = response.hits[4].recipe.image;

				//variables for time to cook
				var time1 = response.hits[0].recipe.totalTime;
				var time2 = response.hits[1].recipe.totalTime;
				var time3 = response.hits[2].recipe.totalTime;
				var time4 = response.hits[3].recipe.totalTime;
				var time5 = response.hits[4].recipe.totalTime;

				//variables for calories
				var cal1 = (response.hits[0].recipe.calories).toFixed(0);
				var cal2 = (response.hits[1].recipe.calories).toFixed(0);
				var cal3 = (response.hits[2].recipe.calories).toFixed(0);
				var cal4 = (response.hits[3].recipe.calories).toFixed(0);
				var cal5 = (response.hits[4].recipe.calories).toFixed(0);

				//variables for url
				var url1 = response.hits[0].recipe.url;
				var url2 = response.hits[1].recipe.url;
				var url3 = response.hits[2].recipe.url;
				var url4 = response.hits[3].recipe.url;
				var url5 = response.hits[4].recipe.url;


				//adds recipe name to the HTML
				$("#title1").text(recipe1);
				$("#title2").text(recipe2);
				$("#title3").text(recipe3);
				$("#title4").text(recipe4);
				$("#title5").text(recipe5);

				//adds image source and alt to the HTML
				$("#recipeImage1").attr("src", image1);
				$("#recipeImage1").attr("alt", recipe1);

				$("#recipeImage2").attr("src", image2);
				$("#recipeImage2").attr("alt", recipe2);

				$("#recipeImage3").attr("src", image3);
				$("#recipeImage3").attr("alt", recipe3);

				$("#recipeImage4").attr("src", image4);
				$("#recipeImage4").attr("alt", recipe4);

				$("#recipeImage5").attr("src", image5);
				$("#recipeImage5").attr("alt", recipe5);


				//adds time to cook to HTML
				$("#time1").text("Total Cook Time: " + time1 + " minutes.");
				$("#time2").text("Total Cook Time: " + time2 + " minutes.");
				$("#time3").text("Total Cook Time: " + time3 + " minutes.");
				$("#time4").text("Total Cook Time: " + time4 + " minutes.");
				$("#time5").text("Total Cook Time: " + time5 + " minutes.");


				//adds calorie information to HTML
				$("#cal1").text("Calories: " + cal1);
				$("#cal2").text("Calories: " + cal2);
				$("#cal3").text("Calories: " + cal3);
				$("#cal4").text("Calories: " + cal4);
				$("#cal5").text("Calories: " + cal5);


				//adds link to recipe instructions to HTML
				$("#link1").attr("action", url1);
				$("#link2").attr("action", url2);
				$("#link3").attr("action", url3);
				$("#link4").attr("action", url4);
				$("#link5").attr("action", url5);

			}
		})
	});
});

