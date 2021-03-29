radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        basic.showIcon(IconNames.Triangle)
        kitronik_servo_lite.driveForwards(5)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
