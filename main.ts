function getInput(){
    return input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)
}

let roundInProgress = false
let randTime = 0

function round(){

    randTime = randint(500, 5000)
    roundInProgress = true
    music.playTone(Note.C, randTime)

}

round()


let wp = getInput()
let startTime
let endTime

while (true){
    if (getInput()){
        if (!wp && roundInProgress){
            startTime = control.millis()
        }
        wp = true
    }else{
        if (wp && roundInProgress){
            
            endTime = control.millis()
            roundInProgress = false
            let score = ""

            if (Math.abs((endTime - startTime)-randTime) >= 1000){
                score = "NIC MOC"
            } else if (Math.abs((endTime - startTime) - randTime) >= 750){
                score = "DECENTNI"
            } else if (Math.abs((endTime - startTime) - randTime) >= 400) {
                score = "DOBRE"
            } else if (Math.abs((endTime - startTime) - randTime) >= 150) {
                score = "SKVELE"
            } else if (Math.abs((endTime - startTime) - randTime) <= 75) {
                score = "PERFEKTNI"
            }

            
            basic.showString(score)
            basic.pause(500)

            round()
        }
        wp = false
    }
}