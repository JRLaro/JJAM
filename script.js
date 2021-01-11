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


