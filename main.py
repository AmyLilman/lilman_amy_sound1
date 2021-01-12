while True:
    print("Sound is: " + input.sound_level())
    if input.sound_level() > 135:
        light.show_animation(light.rainbowAnimation, 500)
    else:
        light.clear()

