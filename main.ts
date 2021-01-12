while (true) {
    console.log("Sound is: " + input.soundLevel())
    if (input.soundLevel() > 135) {
        light.rainbowAnimation
    } else {
        light.clear()
    }
    
}
