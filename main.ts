while (true) {
    console.log("Sound is: " + input.soundLevel())
    if (input.soundLevel() > 150) {
        light.rainbowAnimation
    } else {
        light.clear()
    }
    
}
