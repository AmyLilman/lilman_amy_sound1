// while True:
//     print("Sound level: " + input.sound_level())
//     if input.sound_level() > 150:
//         light.show_animation(light.rainbowAnimation, 500)
//     else:
//         light.clear()
while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() > 0) {
        music.magicWand.play()
    } else {
        music.stopAllSounds()
    }
    
}
