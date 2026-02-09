//Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const minionImg = document.getElementById("letter-minion");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const music = document.getElementById("bg-music");
const cheer = document.getElementById("yay");

const leftContainer = document.getElementById("left-photos");
const leftImg = document.getElementById("leftImg");
const rightContainer = document.getElementById("right-photos");
const rightImg = document.getElementById("rightImg");

const leftSlides = [
  "faith1.JPG",
  "faith2.JPG",
  "faith3.jpg",
  "faith4.jpg",
  "faith5.jpg"
];

const rightSlides = [
    "us1.png",
    "us2.jpg",
    "us3.jpg",
    "us4.jpg",
    "us5.jpg"
]

let leftIndex = 0;
let leftTimer = null;

let rightIndex = 0;
let rightTimer = null;

function startSlideshows() {
  leftContainer.style.display = "block";
  rightContainer.style.display = "block";

  leftIndex = 0;
  rightIndex = 0;

  leftImg.src = leftSlides[leftIndex];
  rightImg.src = rightSlides[rightIndex];

  if (leftTimer) clearInterval(leftTimer);
  if (rightTimer) clearInterval(rightTimer);

  leftTimer = setInterval(() => {
    leftIndex = (leftIndex + 1) % leftSlides.length;
    leftImg.src = leftSlides[leftIndex];
  }, 1200);

  rightTimer = setInterval(() => {
    rightIndex = (rightIndex + 1) % rightSlides.length;
    rightImg.src = rightSlides[rightIndex];
  }, 1200);
}

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    //music
    music.volume = 0.5;
    music.currentTime = 1;
    music.play();
    startSlideshows();

    setTimeout( ()=>{
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to make the NO btn move

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max-min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed"){
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// })

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "YAY";
    document.getElementById("letter-minion").style.display = "none";
    document.getElementById("letter-cat").style.display = "block";
    document.getElementById("left-photos").style.display = "block";
    document.getElementById("right-photos").style.display = "block";
    cheer.play();
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});

catImg.addEventListener("click", () => {
    const letterWindow = document.querySelector(".letter-window");

    letterWindow.innerHTML = "";

    const newParagraph = document.createElement("p");
    newParagraph.textContent = `Hey my love, happy valentines day. I'm glad that you finally are able to become my valentine this
    time. I can't believe we've been together for 9 months already and it feels like I've been with you forever. We went from
    facetiming each other and playing on Fisch, now we're always missing each other 24/7. You're my blessing of
    2025 and I want you to continue to be a blessing for the rest of my life, I mean it. I want to also reassure 
    that I'm 100% willing to wait for you even if you have strict parents. If I need to remind you every day, I will do it.
    You're one of the strongest people I met and I really want to stick with you and for you to be my last. 
    I know midterms have been stressing you out lately but I just know you'll push through them by thinking
    about our motivation. You've done it once last semester, and I know you can finish stronger this semester. 
    Anyways my love, I love you so much I can't wait to go on a date with you this week. PRLM Forever <3 -gurt`;

    newParagraph.classList.add("love-message");

    letterWindow.appendChild(newParagraph);
});