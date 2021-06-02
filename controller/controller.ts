const rocket1 = document.getElementById("rocket1") as HTMLDivElement;
const rocket2 = <HTMLDivElement>document.getElementById("rocket2");
const rocket1img = <HTMLInputElement>document.getElementById("rocket1img");
const rocket2img = <HTMLInputElement>document.getElementById("rocket2img");
const ready = <HTMLDivElement>document.getElementById("pressA");
const content = document.getElementById("content") as HTMLDivElement;
const control = document.getElementById("panel") as HTMLDivElement;
const command = document.getElementById("command") as HTMLButtonElement;
const accelButton = document.getElementById("accelButton") as HTMLButtonElement;
const decelButton = document.getElementById("decelButton") as HTMLButtonElement;

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
  control.classList.remove("hidden");
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
function createRocket2() {
  let myrocket2 = new Rocket("LDSFJA32", [], [], [], false);
  let rocket2Booster1 = new Propulsor("A01", 30, 0);
  let rocket2Booster2 = new Propulsor("A02", 40, 0);
  let rocket2Booster3 = new Propulsor("A03", 50, 0);
  let rocket2Booster4 = new Propulsor("A04", 50, 0);
  let rocket2Booster5 = new Propulsor("A05", 30, 0);
  let rocket2Booster6 = new Propulsor("A06", 10, 0);

  // let currentSpead = myrocket1.currentSpead;

  myrocket2.addBooster(rocket2Booster1);
  myrocket2.addBooster(rocket2Booster2);
  myrocket2.addBooster(rocket2Booster3);
  myrocket2.addBooster(rocket2Booster4);
  myrocket2.addBooster(rocket2Booster5);
  myrocket2.addBooster(rocket2Booster6);

  myrocket2.maxSpeed();
  myrocket2.displayInfo();
  control.classList.remove("hidden");
  console.log(myrocket2);

  accelButton.addEventListener("click", (e: Event) => {
    rocket2img.classList.remove("first", "decel");
    rocket2img.classList.add("accel");
    setTimeout(landing, 2000);
    myrocket2.accelerate();
  });
  decelButton.addEventListener("click", (e: Event) => {
    rocket2img.classList.remove("accel", "first");
    rocket2img.classList.add("decel");
    setTimeout(landing, 2000);
    myrocket2.decelerate();
  });
}

// animationFunctions
function chooseRocket() {
  let color = (<HTMLSelectElement>(
    document.getElementById("rocketColor")
  )).value.toUpperCase();
  ready.classList.remove("hidden");
  content.classList.add("hidden");
  if (color == "RED") {
    rocket2.classList.add("hidden");
    rocket1.classList.remove("hidden");
    rocket1.classList.add("engine");
    createRocket1();
  } else if (color == "WHITE") {
    rocket1.classList.add("hidden");
    rocket2.classList.remove("hidden");
    rocket2.classList.add("engine");
    createRocket2();
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
    command.classList.remove("hidden");
  } else {
    rocket2.classList.remove("engine");
    rocket2.classList.add("move");
    rocket2img.classList.add("start");
    var audio = new Audio("../views/media/audio/rocket.mov");
    audio.play();
    command.classList.remove("hidden");
  }
}

function landing() {
  rocket1img.classList.remove("accel", "first", "decel");
}
