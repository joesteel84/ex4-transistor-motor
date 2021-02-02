let go = 0
input.onButtonPressed(Button.A, function () {
    go = 1
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("ON")
})
input.onButtonPressed(Button.B, function () {
    go = 0
    music.playTone(175, music.beat(BeatFraction.Whole))
    basic.showString("OFF")
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    if (go == 1) {
        if (input.temperature() > 18) {
            pins.analogWritePin(AnalogPin.P0, 1023)
        } else {
            pins.analogWritePin(AnalogPin.P0, 0)
        }
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
