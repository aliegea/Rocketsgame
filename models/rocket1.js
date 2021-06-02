"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocketId, boosterArr, PropulsoresMax, currentSpead, start) {
        if (boosterArr === void 0) { boosterArr = []; }
        if (PropulsoresMax === void 0) { PropulsoresMax = []; }
        if (currentSpead === void 0) { currentSpead = []; }
        if (start === void 0) { start = false; }
        this.boosterArr = [];
        this.propulsoresMax = [];
        this.currentSpead = [];
        this.start = false;
        this.rocketId = rocketId;
        this.boosterArr = boosterArr;
        this.propulsoresMax = PropulsoresMax;
        this.currentSpead = this.currentSpead;
        this.start = this.start;
    }
    Rocket.prototype.displayInfo = function () {
        var display = document.getElementById("rocketId");
        var currSpeadDisplay = document.getElementById("currentSpeed");
        for (var i = 0; i < this.boosterArr.length; i++) {
            this.currentSpead.push(this.boosterArr[i].potenciaActual);
        }
        console.log(this.currentSpead);
        display.textContent = this.rocketId;
        var info = JSON.stringify(this.currentSpead);
        currSpeadDisplay.textContent = info;
        console.log(info);
    };
    Rocket.prototype.addBooster = function (boster) {
        this.boosterArr.push(boster);
    };
    Rocket.prototype.maxSpeed = function () {
        for (var i = 0; i < this.boosterArr.length; i++) {
            this.propulsoresMax.push(this.boosterArr[i].potenciaMax);
            var totalSpead = this.propulsoresMax.reduce(function (acumulador, valorActual) { return acumulador + valorActual; });
            var speadDisplay = document.getElementById("maxSpeed");
            speadDisplay.textContent = totalSpead.toString();
        }
    };
    Rocket.prototype.accelerate = function () {
        for (var i = 0; i <= this.boosterArr.length - 1; i++) {
            if (this.boosterArr[i].potenciaActual < this.boosterArr[i].potenciaMax) {
                this.boosterArr[i].potenciaActual += 10;
                this.currentSpead[i] = this.boosterArr[i].potenciaActual;
                var updateinfo = JSON.stringify(this.currentSpead);
                var currSpeadDisplay = document.getElementById("currentSpeed");
                currSpeadDisplay.textContent = updateinfo;
            }
        }
    };
    Rocket.prototype.decelerate = function () {
        for (var i = 0; i <= this.boosterArr.length - 1; i++) {
            if (this.boosterArr[i].potenciaActual > 0) {
                this.boosterArr[i].potenciaActual -= 10;
                this.currentSpead[i] = this.boosterArr[i].potenciaActual;
                console.log(this.currentSpead);
                var updateinfo = JSON.stringify(this.currentSpead);
                var currSpeadDisplay = document.getElementById("currentSpeed");
                currSpeadDisplay.textContent = updateinfo;
            }
        }
    };
    return Rocket;
}());
