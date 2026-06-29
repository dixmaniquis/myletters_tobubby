let stage = 0;

const closedEnvelope = document.getElementById("closedEnvelope");
const openEnvelope = document.getElementById("openEnvelope");
const paper = document.getElementById("paper");
const music = document.getElementById("music");

const buttonSection = document.getElementById("buttonSection");
const doneBtn = document.getElementById("doneBtn");
const loveSection = document.getElementById("loveSection");

const letter = document.getElementById("letter");
const photoSection = document.getElementById("photoSection");

const yesBtn = document.getElementById("yesBtn");
const ofcourseBtn = document.getElementById("ofcourseBtn");


function resetLetter() {

    // Show the letter again
    letter.classList.remove("hidden");

    // Hide the photo page
    photoSection.classList.add("hidden");

    // Hide all buttons
    buttonSection.classList.add("hidden");
    loveSection.classList.add("hidden");

    // Reset stage
    stage = 2;
}


closedEnvelope.addEventListener("click", function () {

    if (stage === 0) {

        music.play();
        closedEnvelope.classList.add("hidden");
        openEnvelope.classList.remove("hidden");
        
        stage = 1;

    }

});

openEnvelope.addEventListener("click", function () {

    if (stage === 1) {

        paper.classList.remove("hidden");
        paper.classList.add("show");

        buttonSection.classList.remove("hidden");

        stage = 3;

    }

});

doneBtn.addEventListener("click", function(){

    if(stage === 3) {

        buttonSection.classList.add("hidden");
        loveSection.classList.remove("hidden");

        stage = 4;
    }

});

function showPhoto(){

    loveSection.classList.add("hidden");
    letter.classList.add("hidden");
    photoSection.classList.remove("hidden");

    createConfetti();

}

yesBtn.addEventListener("click", showPhoto);
ofcourseBtn.addEventListener("click", showPhoto);

function showPhoto() {

    loveSection.classList.add("hidden");

    letter.classList.add("hidden");

    photoSection.classList.remove("hidden");

    createConfetti();
}

yesBtn.addEventListener("click", showPhoto);
ofcourseBtn.addEventListener("click", showPhoto);