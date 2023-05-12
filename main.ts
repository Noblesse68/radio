radio.onReceivedNumber(function (receivedNumber) {
	
})
radio.setGroup(7)
basic.forever(function () {
    radio.sendNumber(0)
    radio.sendString("test")
})
