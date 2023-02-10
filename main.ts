KSB045.onBtnChanged(KSB045.btnName.C, KSB045.pushType.down, function () {
	
})
KSB045.onBtnChanged(KSB045.btnName.D, KSB045.pushType.down, function () {
	
})
KSB045.onBtnChanged(KSB045.btnName.F, KSB045.pushType.down, function () {
	
})
KSB045.onBtnChanged(KSB045.btnName.E, KSB045.pushType.down, function () {
	
})
radio.setGroup(200)
basic.forever(function () {
    if (KSB045.getJoystickValue(KSB045.valueType.X) < 500 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) < 500 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(8)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.X) > 520 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(6)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) > 520 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.X) < 600) {
        radio.sendNumber(2)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
    	
    }
})
