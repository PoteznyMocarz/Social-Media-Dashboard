let toggleBtn = document.getElementById("toggleBtn");
let text = document.querySelector(".testxd");
let currentFans = document.querySelectorAll(".current-numbers");
let cardBg = document.querySelectorAll(".card-bg");
let usernames = document.querySelectorAll(".username");
let topBg = document.querySelector(".top-bg");
let circleBtn = document.getElementById("circleBtn");
let lightMode;

toggleBtn.onclick = function() {
    for(const currentFan of currentFans) {
    if(currentFan.classList.contains("light-text")) {
        currentFan.classList.remove("light-text");
    }
    else {
        currentFan.classList.add("light-text");
    };
    }

    for(const currentCardBg of cardBg) {
    if(currentCardBg.classList.contains("light-card-bg")) {
        currentCardBg.classList.remove("light-card-bg");
    }
    else {
        currentCardBg.classList.add("light-card-bg");
    };
    }

    for(const username of usernames) {
    if(username.classList.contains("light-user-text")) {
        username.classList.remove("light-user-text");
    }
    else {
        username.classList.add("light-user-text");
    };
    }

    if(topBg.classList.contains("top-bg-color-light")) {
        topBg.classList.remove("top-bg-color-light");
    }
    else {
        topBg.classList.add("top-bg-color-light");
    };

    if(document.body.classList.contains("bg-color-light")) {
        document.body.classList.remove("bg-color-light");
    }
    else {
        document.body.classList.add("bg-color-light");
    };

    if(toggleBtn.classList.contains("toggle-btn-light")) {
        toggleBtn.classList.remove("toggle-btn-light");
        toggleBtn.classList.add("bg-gradient-to-r");
    }
    else {
        toggleBtn.classList.add("toggle-btn-light");
        toggleBtn.classList.remove("bg-gradient-to-r");
    };

    if(toggleBtn.classList.contains("toggle-btn-light")) {
        circleBtn.classList.add("circle-light");
        circleBtn.classList.remove("left-[3px]");
        circleBtn.classList.add("left-[54%]")
    }
    else {
        circleBtn.classList.remove("circle-light");
        circleBtn.classList.add("left-[3px]");
        circleBtn.classList.remove("left-[54%]")
    };
    

};