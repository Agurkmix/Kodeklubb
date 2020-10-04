input.onButtonPressed(Button.A, function () {
    basic.showNumber(min_temp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max_temp)
})
let temp = 0
let max_temp = 0
let min_temp = 0
min_temp = 300
max_temp = -300
basic.forever(function () {
    temp = input.temperature()
    if (temp > max_temp) {
        max_temp = temp
    }
    if (temp < min_temp) {
        min_temp = temp
    }
})
