while (true) {
    console.log("Sound is: " + input.soundLevel())
    if (input.soundLevel() > 135) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
}
