let go = 0
let Duty = 0
input.onButtonPressed(Button.A, function () {
    go = 1
})
input.onButtonPressed(Button.B, function () {
    go = 0
})
basic.forever(function () {
    while (go == 1) {
        while (Duty < 1023) {
            pins.analogWritePin(AnalogPin.P0, Duty)
            Duty = Duty + 1
            basic.pause(10)
        }
        while (Duty > 0) {
            pins.analogWritePin(AnalogPin.P0, Duty)
            Duty = Duty - 1
            basic.pause(10)
        }
    }
})
