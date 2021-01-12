while (true) {
    console.log("Sound is: " + input.soundLevel())
    if (input.soundLevel() > 20) {
        light.setPixelColor(0, light.rgb(255, 100, 0))
        light.setPixelColor(1, light.rgb(245, 255, 0))
        light.setPixelColor(2, light.rgb(20, 245, 20))
        light.setPixelColor(3, light.rgb(66, 245, 230))
        light.setPixelColor(4, light.rgb(103, 181, 199))
        light.setPixelColor(5, light.rgb(66, 188, 245))
        light.setPixelColor(6, light.rgb(80, 123, 242))
        light.setPixelColor(7, light.rgb(190, 95, 227))
        light.setPixelColor(8, light.rgb(245, 66, 212))
        light.setPixelColor(9, light.rgb(242, 48, 78))
    } else {
        light.clear()
    }
    
}
