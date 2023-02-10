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
    if (KSB045.getJoystickValue(KSB045.valueType.X) < 0) {
        radio.sendNumber(4)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.X) > 0) {
        radio.sendNumber(6)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) < 0) {
        radio.sendNumber(2)
    }
    if (KSB045.getJoystickValue(KSB045.valueType.Y) > 0) {
        radio.sendNumber(8)
    }
})
