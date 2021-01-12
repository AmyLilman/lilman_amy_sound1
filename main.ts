while (true) {
    console.log("Sound is: " + input.soundLevel())
    if (input.soundLevel() < 6) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.clear()
    }
    
}
