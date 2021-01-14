#while True:
#    print("Sound level: " + input.sound_level())
#    if input.sound_level() > 150:
#        light.show_animation(light.rainbowAnimation, 500)
#    else:
#        light.clear()

while True:
    print("Light Level: " + input.light_level())
    if input.light_level() > 5:
        music.magic_wand.play()
    else:
        music.stop_all_sounds()