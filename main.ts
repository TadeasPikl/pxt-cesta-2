let offset1 = 0
let offset2 = 19
let offset3 = 8
let offset4 = 16.5
// calibrated speed in cm/ms, °/ms
let speed = 0.024
let rotate_right_speed = 0.125
let rotate_left_speed = 0.142
// center point of the car starts at: 0, 0; rotation: 0°
let X = 0
let Y = 0
let rotation = 0
basic.forever(function on_forever() {
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    M(0, 30)
    M(30, 30)
    M(30, 0)
    Z()
})
function forward(distance: number) {
    
    magicbit.Servo(magicbit.Servos.S1, 180 - offset1)
    magicbit.Servo(magicbit.Servos.S2, 0 + offset2)
    magicbit.Servo(magicbit.Servos.S4, 0 + offset4)
    magicbit.Servo(magicbit.Servos.S3, 180 - offset3)
    basic.pause(distance / speed)
    magicbit.Servo(magicbit.Servos.S1, 90)
    magicbit.Servo(magicbit.Servos.S2, 90)
    magicbit.Servo(magicbit.Servos.S4, 90)
    magicbit.Servo(magicbit.Servos.S3, 90)
}

function rotate_right(degrees: number) {
    
    magicbit.Servo(magicbit.Servos.S1, 180 - offset1)
    magicbit.Servo(magicbit.Servos.S2, 180 - offset2)
    magicbit.Servo(magicbit.Servos.S4, 180 - offset4)
    magicbit.Servo(magicbit.Servos.S3, 180 - offset3)
    basic.pause(degrees / rotate_right_speed)
    magicbit.Servo(magicbit.Servos.S1, 90)
    magicbit.Servo(magicbit.Servos.S2, 90)
    magicbit.Servo(magicbit.Servos.S4, 90)
    magicbit.Servo(magicbit.Servos.S3, 90)
    if (rotation + degrees > 360) {
        rotation += degrees - 360
    } else {
        rotation += degrees
    }
    
}
