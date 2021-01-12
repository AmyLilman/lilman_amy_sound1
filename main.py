while True:
    print("Sound is: " + input.sound_level())
    if input.sound_level() > 135:
        light.rainbow_animation
    else:
        light.clear()

