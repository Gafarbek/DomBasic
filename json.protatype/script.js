const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

const time = document.querySelector('#time');

const baseTime = {
    m: 0,
    s: 0,
    ms: 0
};

let stopWatch = null;

function renderStopWatch({ m, s, ms }) {
    m = m > 9 ? m : `0${m}`;
    s = s > 9 ? s : `0${s}`;
    ms = ms > 9 ? ms : `0${ms}`;

    time.innerHTML = `${m}:${s}:${ms}`;
}

function interval() {
    return setInterval(() => {
        if (baseTime.ms === 99) {
            baseTime.ms = 0;
            baseTime.s++;

            if (baseTime.s === 60) {
                baseTime.s = 0;
                baseTime.m++;
            }
        }

        baseTime.ms++;

        renderStopWatch(baseTime);
    }, 1);
};

start.addEventListener('click', () => {
    if (start.innerHTML === 'Reset') {
        clearInterval(stopWatch)
        baseTime.m = 0
        baseTime.s = 0
        baseTime.ms = 0
        renderStopWatch(baseTime)
        stop.disabled = true
        stop.innerHTML = 'Stop'
        start.innerHTML = 'Start'
    } else if (start.innerHTML === 'Start') {
        stopWatch = interval()
        start.innerHTML = 'Lap'
        stop.innerHTML = 'Stop'
        stop.disabled = false
    }
})

stop.addEventListener('click', () => {
    if (stop.innerHTML === 'Stop') {
        clearInterval(stopWatch)
        stop.innerHTML = 'Resume'
        start.innerHTML = 'Reset'
        stop.classList.remove('stop')
    } else {
        stopWatch = interval()
        stop.innerHTML = 'Stop'
        start.innerHTML = 'Lap'
        stop.classList.add('stop')
    }
})

