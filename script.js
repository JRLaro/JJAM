// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// $(document).ready(function () {
// 	$("#userTextInput").keypress(function (event) {
// 		if (event.which === 13) {
// 			console.log(event)
// 			var text = $("#userTextInput").val();
// 			$("#ingredientsCol").append(` <div class="button is-success">${text}</div> `)
// 			$("#userTextInput").val("")
			
// 		}
// 	})
// })


$(document).ready(function () {
	$("#userTextInput").keypress(function (event) {
		if (event.which === 13) {
			console.log(event)
			var text = $("#userTextInput").val();
			var drinkBtn = $("<button>").addClass("button m-1 is-primary has-text-weight-bold").text(text);
			var drinkDelete = $("<button>").addClass("delete is-small");
			drinkBtn.append(drinkDelete);
			$("#ingredientsCol").append(drinkBtn)
			$("#userTextInput").val("")

		}
	})


	$("#ingredientsCol").on("click", ".button > .delete", function(){
		$(this).parent().remove();
		console.log($(this));

	})

	$("#searchButton").click(function(){
		$("#mainContainer").show();
	})

	$("#resetButton").click(function(){
		$("#ingredientsCol").empty();
		console.log("this is working")
		$("#mainContainer").hide()
	})
})