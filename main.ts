input.onButtonPressed(Button.A, function () {
    strip2.clear()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        basic.showArrow(ArrowNames.North)
        kitronik_servo_lite.forward()
    } else if (receivedString == "down") {
        basic.showArrow(ArrowNames.South)
        kitronik_servo_lite.backward()
    } else if (receivedString == "left") {
        basic.showArrow(ArrowNames.West)
        kitronik_servo_lite.turnLeft(90)
    } else if (receivedString == "right") {
        basic.showArrow(ArrowNames.East)
        kitronik_servo_lite.turnRight(90)
    } else if (receivedString == "heart") {
        basic.showIcon(IconNames.Heart)
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (receivedString == "happy") {
        basic.showIcon(IconNames.Happy)
        strip2.showRainbow(1, 360)
    }
})
let z = 0
let y = 0
let x = 0
let strip2: neopixel.Strip = null
radio.setGroup(1)
strip2 = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB_RGB)
while (true) {
    x = input.acceleration(Dimension.X) / 2
    y = input.acceleration(Dimension.Y) / 2
    z = input.acceleration(Dimension.Z) / 2
    strip2.shift(1)
    strip2.setPixelColor(0, neopixel.rgb(x, y, 0 - z))
    strip2.show()
    basic.pause(100)
}
