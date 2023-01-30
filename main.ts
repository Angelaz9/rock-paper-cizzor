function UpdateScores () {
    OLED.clear()
    OLED.writeStringNewLine("Player , 1" + player1)
    OLED.clear()
    OLED.writeStringNewLine("Player , 2" + player2)
    OLED.clear()
    OLED.writeStringNewLine("Ties" + ties)
    OLED.clear()
    OLED.writeStringNewLine("Rounds" + rounds)
    UpdateScores()
}
let ties = 0
let player2 = 0
let player1 = 0
let rounds = 0
OLED.init(128, 64)
OLED.writeStringNewLine("SHALL WE PLAY A GAME?")
rounds = 0
player1 = 0
player2 = 0
ties = 0
basic.pause(2000)
OLED.clear()
