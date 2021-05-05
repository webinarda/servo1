pins.analogSetPeriod(AnalogPin.P0, 20000)
let açı = 90
pins.servoWritePin(AnalogPin.P0, açı)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, pins.map(
    input.acceleration(Dimension.Y),
    0,
    1023,
    35,
    145
    ))
    basic.pause(200)
})
