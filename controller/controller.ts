const rocket1 = document.getElementById("rocket1") as HTMLDivElement;
const rocket2 = <HTMLDivElement>document.getElementById("rocket2");
const rocket1img = <HTMLInputElement>document.getElementById("rocket1img");
const rocket2img = <HTMLInputElement>document.getElementById("rocket2img");
const ready = <HTMLDivElement>document.getElementById("pressA");
const accelButton = document.getElementById("accelButton") as HTMLButtonElement;
const decelButton = document.getElementById("decelButton") as HTMLButtonElement;
const rocket1Id = "32WESSDS";

// create rocket1
function createRocket1() {
  let myrocket1 = new Rocket("32WESSDS", [], [], [], false);
  let rocket1Booster1 = new Propulsor("A01", 10, 0);
  let rocket1Booster2 = new Propulsor("A02", 30, 0);
  let rocket1Booster3 = new Propulsor("A03", 80, 0);

  // let currentSpead = myrocket1.currentSpead;

  myrocket1.addBooster(rocket1Booster1);
  myrocket1.addBooster(rocket1Booster2);
  myrocket1.addBooster(rocket1Booster3);

  myrocket1.maxSpeed();
  myrocket1.displayInfo();
  console.log(myrocket1);

  accelButton.addEventListener("click", (e: Event) => {
    rocket1img.classList.remove("first", "decel");
    rocket1img.classList.add("accel");
    setTimeout(landing, 2000);
    myrocket1.accelerate();
  });
  decelButton.addEventListener("click", (e: Event) => {
    rocket1img.classList.remove("accel", "first");
    rocket1img.classList.add("decel");
    setTimeout(landing, 2000);
    myrocket1.decelerate();
  });
}

// animationFunctions
function chooseRocket() {
  let color = (<HTMLSelectElement>(
    document.getElementById("rocketColor")
  )).value.toUpperCase();
  ready.classList.remove("hidden");
  if (color == "RED") {
    rocket2.classList.add("hidden");
    rocket1.classList.remove("hidden");
    rocket1.classList.add("engine");
    createRocket1();
  } else if (color == "WHITE") {
    rocket1.classList.add("hidden");
    rocket2.classList.remove("hidden");
    rocket2.classList.add("engine");
  }
}

function startRace() {
  ready.classList.add("hidden");
  if (rocket1.classList.contains("engine")) {
    rocket1.classList.remove("engine");
    rocket1.classList.add("move");
    rocket1img.classList.add("start", "first");
    var audio = new Audio("../views/media/audio/rocket.mov");
    audio.play();
  } else {
    rocket2.classList.remove("engine");
    rocket2.classList.add("move");
    rocket2img.classList.add("start");
    var audio = new Audio("../views/media/audio/rocket.mov");
    audio.play();
  }
}

// accelButton.addEventListener("click", (e: Event) => {
//   rocket1img.classList.remove("first", "decel");
//   rocket1img.classList.add("accel");
//   setTimeout(landing, 2000);

// });
decelButton.addEventListener("click", (e: Event) => {
  rocket1img.classList.remove("accel", "first");
  rocket1img.classList.add("decel");
  setTimeout(landing, 2000);
});
function landing() {
  rocket1img.classList.remove("accel", "first", "decel");
}
