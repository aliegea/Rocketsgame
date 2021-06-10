class Rocket {
  rocketId: string;
  boosterArr: Propulsor[] = [];
  propulsoresMax: number[] = [];
  currentSpead: number[] = [];
  start: boolean = false;

  constructor(
    rocketId: string,
    boosterArr: Propulsor[] = [],
    PropulsoresMax: number[] = [],
    currentSpead: number[] = [],
    start: boolean = false
  ) {
    this.rocketId = rocketId;
    this.boosterArr = boosterArr;
    this.propulsoresMax = PropulsoresMax;
    this.currentSpead = this.currentSpead;
    this.start = this.start;
  }

  displayInfo() {
    let display = document.getElementById("rocketId") as HTMLSpanElement;
    let currSpeadDisplay = document.getElementById(
      "currentSpeed"
    ) as HTMLSpanElement;
    for (let i = 0; i < this.boosterArr.length; i++) {
      this.currentSpead.push(this.boosterArr[i].potenciaActual);
    }
    console.log(this.currentSpead);
    display.textContent = this.rocketId;
    let info = JSON.stringify(this.currentSpead);
    currSpeadDisplay.textContent = info;
    console.log(info);
  }
  addBooster(boster: Propulsor): void {
    this.boosterArr.push(boster);
  }
  maxSpeed() {
    for (let i = 0; i < this.boosterArr.length; i++) {
      this.propulsoresMax.push(this.boosterArr[i].potenciaMax);

      let totalSpead = this.propulsoresMax.reduce(
        (acumulador, valorActual) => acumulador + valorActual
      );
      let speadDisplay = document.getElementById("maxSpeed") as HTMLSpanElement;
      speadDisplay.textContent = totalSpead.toString();
    }
  }

  accelerate() {
    for (let i = 0; i <= this.currentSpead.length; i++) {
      if (this.currentSpead[i] < this.propulsoresMax[i]) {
        this.currentSpead[i] += 10;
        console.log(this.currentSpead);
        let updateinfo = JSON.stringify(this.currentSpead);
        let currSpeadDisplay = document.getElementById(
          "currentSpeed"
        ) as HTMLSpanElement;
        currSpeadDisplay.textContent = updateinfo;
      }
    }
  }

  decelerate() {
    for (let i = 0; i <= this.currentSpead.length; i++) {
      if (this.currentSpead[i] > 0) {
        this.currentSpead[i] -= 10;
        console.log(this.currentSpead);
        let updateinfo = JSON.stringify(this.currentSpead);
        let currSpeadDisplay = document.getElementById(
          "currentSpeed"
        ) as HTMLSpanElement;
        currSpeadDisplay.textContent = updateinfo;
      }
    }
  }
}
