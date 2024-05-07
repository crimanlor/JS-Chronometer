class Chronometer {
    constructor(intervalId, time) {
        this.intervalId = intervalId
        this.time = time
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => { this.startClock() }, 1000)
        }
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    startClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        this.time = `${hours}:${minutes}:${seconds}`;
        document.getElementById("chronometer-interfaz").innerText = this.time;
    }

    record() {
        if (this.intervalId) {
            const currentTime = this.time
            const newRecord = document.createElement("li")
            newRecord.textContent = currentTime
            timesRecords.appendChild(newRecord)
        }
    }
}

const timesRecords = document.getElementById("records-list")
const startBtn = document.querySelector("[data-start]")
const recordBtn = document.querySelector("[data-record]")
const stopBtn = document.querySelector("[data-stop]")

const chronometer = new Chronometer(null, "00:00:00");

startBtn.addEventListener("click", function () {
    chronometer.start()
});

recordBtn.addEventListener("click", function () {
    chronometer.record()
});

stopBtn.addEventListener("click", () => {
    chronometer.stop()
})