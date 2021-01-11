
$(document).ready(function () {

    // const loginPopup = $(".login-popup");
    const loginPopup = document.querySelector(".login-popup");


    // const close = $(".close");
    const close = document.querySelector(".close");
    
    window.addEventListener("load", function () {
        
        // showPopup();
        setTimeout(function () {
            // $(loginPopup).attr("show");
            loginPopup.classList.add("show");
        },5000)

    })
    

    $("#userInput").on("click", function () {

        // this targets the users inPut
        let userInput = $("#userInput").val();

        // confirm information was captured
        console.log(userInput);
        // $("#userInput").val("")

        //this is going to run the following function 
        
        $("#userInput").text(leftOver);
        //this is for the search history
        // localStorage.setItem(JSON.stringify(search));

    })

    

    close.addEventListener("click", function () {
        loginPopup.classList.remove("show");
    })










 })



)



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

