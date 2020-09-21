let pomoTimes = {
    "break": 300,
    "session": 60 * 25
}

let pomoBreak = {
    "currentBreak": pomoTimes.break < 0 ? 0 : pomoTimes.break,

    increaseBreak: () => {
        pomoBreak.currentBreak+=60
        if(pomoBreak.currentBreak < 0) {pomoBreak.currentBreak = 0}
        pomoDisplay.updateBreakTimer(pomoBreak.currentBreak/60)
    },
    decreaseBreak: () => {
        pomoBreak.currentBreak-=60
        if(pomoBreak.currentBreak < 0) {pomoBreak.currentBreak = 0}
        pomoDisplay.updateBreakTimer(pomoBreak.currentBreak/60)
    }
}

let pomoSession = {
    "currentSession": pomoTimes.session < 0 ? 0 : pomoTimes.session,

    increaseSession: () => {
        pomoSession.currentSession+=60
        if(pomoSession.currentSession < 0) {pomoSession.currentSession = 0}
        pomoDisplay.updateSessionTimer(pomoSession.currentSession/60)
        pomoDisplay.updateCurrentTime(pomoSession.currentSession/60)
        pomoAction.timeLeft = pomoSession.currentSession
    },
    decreaseSession: () => {
        pomoSession.currentSession-=60
        if(pomoSession.currentSession < 0) {pomoSession.currentSession = 0}
        pomoDisplay.updateSessionTimer(pomoSession.currentSession/60)
        pomoDisplay.updateCurrentTime(pomoSession.currentSession/60)
        pomoAction.timeLeft = pomoSession.currentSession
    }
}

let pomoDisplay = {
    updateBreakTimer: (x = pomoTimes.break/60) => {
        document.querySelector(".breakTime").innerHTML = `Break: ${x}`
    },
    updateSessionTimer: (x = pomoTimes.session/60) => {
        document.querySelector(".sessionTime").innerHTML = `Session: ${x}`
    },
    updateCurrentTime: (x = pomoTimes.session/60) => {
        document.querySelector(".currentTime").innerHTML = x
    },
    resetTimer: () => {
        pomoSession.currentSession = pomoTimes.session
        pomoAction.timeLeft = pomoSession.currentSession
        pomoDisplay.updateSessionTimer(pomoSession.currentSession/60)
        pomoDisplay.updateCurrentTime(pomoSession.currentSession/60)
        clearInterval(pomoAction.countdown)
    }
}

let pomoAction = {
    countdown: null,
    startTimer: (timeLeft) => {
        timeLeft = pomoAction.timeLeft
        pomoAction.countdown = setInterval(() => {
        timeLeft--
        let remainingTime = timeLeft
        let minLeft = Math.floor(timeLeft / 60)
        let secLeft = timeLeft - minLeft * 60
        secLeft > 10 ? `0${secLeft}` : secLeft
        pomoDisplay.updateCurrentTime(`${minLeft}:${secLeft}`)
        }, 1000)
  }
}


pomoDisplay.updateBreakTimer();
pomoDisplay.updateSessionTimer();
pomoDisplay.updateCurrentTime();
pomoAction.timeLeft = pomoSession.currentSession
document.querySelector(".startTimer").addEventListener("click", pomoAction.startTimer);
document.querySelector(".resetTimer").addEventListener("click", pomoDisplay.resetTimer);
document.querySelector(".increaseBreak").addEventListener("click", pomoBreak.increaseBreak);
document.querySelector(".decreaseBreak").addEventListener("click", pomoBreak.decreaseBreak);
document.querySelector(".increaseSession").addEventListener("click", pomoSession.increaseSession);
document.querySelector(".decreaseSession").addEventListener("click", pomoSession.decreaseSession);
