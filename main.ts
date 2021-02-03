input.onButtonPressed(Button.A, function () {
    if (seconds <= 50) {
        seconds += 10
        basic.showNumber(seconds)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    while (seconds > 0) {
        seconds += 0 - 1
        basic.pause(1000)
        basic.showNumber(seconds)
    }
})
let seconds = 0
seconds = 0
