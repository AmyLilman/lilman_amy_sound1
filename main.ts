// while True:
//     print("Sound level: " + input.sound_level())
//     if input.sound_level() > 150:
//         light.show_animation(light.rainbowAnimation, 500)
//     else:
//         light.clear()
while (true) {
    if (input.lightLevel() > 8) {
        music.baDing.playUntilDone()
    }
    
}
