go = 0
Duty = 0

def on_button_pressed_a():
    global go
    go = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global go
    go = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global Duty
    while go == 1:
        while Duty < 1023:
            pins.analog_write_pin(AnalogPin.P0, Duty)
            Duty = Duty + 1
            basic.pause(10)
        while Duty > 0:
            pins.analog_write_pin(AnalogPin.P0, Duty)
            Duty = Duty - 1
            basic.pause(10)
basic.forever(on_forever)
