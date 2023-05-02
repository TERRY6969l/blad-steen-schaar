let blad_steen_schaar = 0
input.onGesture(Gesture.Shake, function () {
    blad_steen_schaar = randint(0, 3)
    if (blad_steen_schaar == 1) {
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
    } else if (blad_steen_schaar == 2) {
        basic.showIcon(IconNames.SmallSquare)
        basic.clearScreen()
    } else if (blad_steen_schaar == 3) {
        basic.showIcon(IconNames.Scissors)
        basic.clearScreen()
    }
})
