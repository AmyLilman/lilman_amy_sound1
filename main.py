while True:
    print("Sound is: " + input.sound_level())
    if input.sound_level() < 6:
        light.set_all(light.rgb(0, 0, 255))
    else:
        light.clear()
