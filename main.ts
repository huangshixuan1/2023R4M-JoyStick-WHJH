radio.setGroup(98)
basic.forever(function () {
    if (KSB045.getJoystickValue(KSB045.valueType.X) < 500 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(4)
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) < 500 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(8)
    } else if (KSB045.getJoystickValue(KSB045.valueType.X) > 540 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(6)
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) > 520 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.X) < 600) {
        radio.sendNumber(2)
    } else if (KSB045.getBtnValue(KSB045.btnName.E)) {
        radio.sendNumber(1)
    } else if (KSB045.getBtnValue(KSB045.btnName.C)) {
        radio.sendNumber(3)
    } else if (KSB045.getBtnValue(KSB045.btnName.F)) {
        radio.sendNumber(7)
    } else if (KSB045.getBtnValue(KSB045.btnName.D)) {
        radio.sendNumber(9)
    } else {
        radio.sendNumber(0)
    }
})
