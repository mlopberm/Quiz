// timer.js

// Módulo de gestión del temporizador
class Timer {
    constructor() {
        this.timerInterval = null;
        this.startTime = null;
        this.elapsedTime = 0;
        this.timeValueEl = document.getElementById('timeValue');
        this.timerDisplayEl = document.getElementById('timerDisplay');
        this.finalTimeValueEl = document.getElementById('finalTimeValue');
    }

    formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    start() {
        this.startTime = Date.now();
        this.elapsedTime = 0;
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        this.timerInterval = setInterval(() => {
            this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
            this.timeValueEl.textContent = this.formatTime(this.elapsedTime);
        }, 1000);
        
        this.timerDisplayEl.classList.remove('hidden');
    }

    stop() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    hide() {
        this.timerDisplayEl.classList.add('hidden');
    }

    reset() {
        this.stop();
        this.elapsedTime = 0;
        this.timeValueEl.textContent = "00:00";
    }

    getElapsedTime() {
        return this.elapsedTime;
    }

    getFormattedElapsedTime() {
        return this.formatTime(this.elapsedTime);
    }

    setFinalTime() {
        this.finalTimeValueEl.textContent = this.getFormattedElapsedTime();
    }
}

// Antes tenías:
// const timer = new Timer();
// Ahora exportamos la instancia:
export const timer = new Timer();
