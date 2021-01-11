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

    // function userName(inPut) {

    //     $("#userInput").text("#navBar");

    // }
    // function showPopup() {
    //     const timeLimit = 5; // this reveals popUp in 5 seconds
    //     let i = 0;
    //     const timer = setInterval(function () {
    //         i++;

    //         if (i == timeLimit) {
    //             clearInterval(timer);
    //             loginPopup.classList.add("show");
    //         }
    //         console.log(i);
    //     }, 1000);
    // }

    close.addEventListener("click", function () {
        loginPopup.classList.remove("show");
    })










 })


