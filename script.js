// Global variables
let cards = Array.from(document.querySelectorAll(".card"));
let overlay = Array.from(document.querySelectorAll(".child"));
let arr = [];
let numbers = [0, 1, 2, 3, 4, 5];
let counter = 1;
let h1 = document.querySelector(".glow")
let arrayOfImg = [
    "https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg",
    "https://i.pinimg.com/originals/8c/0c/4f/8c0c4fad13ae5359ba476a46f0a35892.png",
    "https://i.pinimg.com/originals/8c/0c/4f/8c0c4fad13ae5359ba476a46f0a35892.png",
    "https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg",
    "https://i.pinimg.com/736x/4f/88/32/4f8832629be791976d4407576798050f.jpg",
    "https://i.pinimg.com/736x/4f/88/32/4f8832629be791976d4407576798050f.jpg",
];
let flipCounter = document.querySelector(".flipCounter");
flipCounter.innerText = 12;

let score = document.querySelector(".score");
score.innerText = 0;

function shuffle(array) {
    // fisher yates algorithm
    // first what is that
    for (let i = array.length - 1; i > 0; i--) {
        // now create a random number between array
        let randomNum = Math.floor(Math.random() * (i + 1));
        let tempArr = array[randomNum];
        array[randomNum] = array[i];
        array[i] = tempArr;
        console.log(array);
        return array;
    }
}
arr = shuffle(arrayOfImg);

function randomImg() {
    return arrayOfImg[Math.floor(Math.random() * arrayOfImg.length)];
}

for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = "url('" + arr[i] + "')";
}

function shuffling() {
    return shuffle(arrayOfImg);
}
// logic here
let chosenItm = [];
let chosenOverlay = [];

function GameEngine() {
    for (let index = 0; index < overlay.length; index++) {
        // take an empty array
        overlay[index].addEventListener("click", () => {
            flipCounter.innerText--;
            overlay[index].style.display = "none";

            if (score.innerText !== 3 && flipCounter.innerText == 0) {
                setTimeout(() => {
                    h1.innerText = "You Lost";
                    setTimeout(() => {
                        flipCounter.innerText = 12;


                        arr = shuffling();
                        for (let i = 0; i < cards.length; i++) {
                            cards[i].style.backgroundImage = "url('" + arr[i] + "')";
                        }
                    });
                    setTimeout(() => {
                        score.innerText = 0;
                        overlay.forEach((item) => {
                            item.style.display = "block";
                        });
                    }, 1000);
                }, 750)
            }
            if (flipCounter.innerText == 0) {
                alert("Game Over");
            }
            if (overlay[index].style.display === "none") {
                chosenItm.push(cards[index]);
                chosenOverlay.push(overlay[index]);
                console.log(chosenOverlay);
                console.log(chosenItm);
                if (chosenItm.length % 2 == 0) {
                    if (
                        chosenItm[chosenItm.length - 2].style.backgroundImage ===
                        chosenItm[chosenItm.length - 1].style.backgroundImage
                    ) {
                        setTimeout(() => {
                            alert("matched");
                            score.innerText++;
                        }, 200);
                        setTimeout(() => {
                            if (score.innerText == 3) {
                                setTimeout(() => {
                                    setTimeout(() => {
                                        h1.innerText = "You Won";
                                    }, 300);
                                    flipCounter.innerText = 12;


                                    arr = shuffling();
                                    for (let i = 0; i < cards.length; i++) {
                                        cards[i].style.backgroundImage = "url('" + arr[i] + "')";
                                    }
                                    setTimeout(() => {

                                    }, );
                                }, 500);

                                setTimeout(() => {
                                    score.innerText = 0;
                                    overlay.forEach((item) => {
                                        item.style.display = "block";
                                    });
                                }, 1000);
                            }
                        }, 300);
                    } else {
                        chosenOverlay[chosenOverlay.length - 1].style.display = "none";
                        setTimeout(() => {
                            chosenOverlay[chosenOverlay.length - 1].style.display = "block";
                            chosenOverlay[chosenOverlay.length - 2].style.display = "block";
                        }, 400);
                    }
                }
            }


        });
    }
}
GameEngine()