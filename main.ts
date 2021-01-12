while (true) {
    console.log("Sound level is: " + input.soundLevel())
    if (input.soundLevel() > 150) {
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
    }
    
}
