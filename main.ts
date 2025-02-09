input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.Heart)
