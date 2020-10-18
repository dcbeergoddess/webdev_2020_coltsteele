# CSS COLORS
- different ways to assign a color or associate a color with
- a typical computer can display ~16,000,000 different colors

## NAMED COLORS
- most limited set
- browsers recognize 140 named colors
- [COLOR NAME REF](https://htmlcolorcodes.com/color-names/)

## RGB COLORS
- RED, GREEN, BLUE Channels
- Each channel ranges from 0-255
    - How much light being introduced - higher number = more light
- [RGB COLOR MODEL](https://en.wikipedia.org/wiki/RGB_color_model)
- 0,0,0 = black
- 255, 255, 255 = white
- [COLOR PICKER](https://htmlcolorcodes.com/color-picker/)

```css

h1 {
  color: rgb(0,225,0);
  /* color: green */
}

h2 {
  color: rgb(100, 0, 100);
  /* color: purpleish */
}

h3 {
  color: rgb(11, 99, 150);
  /* color: blueish */
}

```

## RGBA
- Just like RGB, but with alpha (transparency) channel. Ranges from 0.0-1.0

```css

h1 {
  color: rgb(11, 99, 150, 1);
  /* transparency: none, full alpha */

}

h2 {
  color: rgb(11, 99, 150, .6);
  /* transparency: more */

}

h3 {
  color: rgb(11, 99, 150, .2);
  /* transparency: most, barley visible */
  

}

```

## Hexadecimal
  - Still red, green, and blue channels
  - Each ranges from 0-255 BUT represented with hexadecimal
  - #+ String of 6 hexadecimal numbers (from 0-F)
  - hash symbol = octothorpe
  - does not mix like regular colors
  - [COLOR PICKER](https://htmlcolorcodes.com/color-picker/)

```css

h1 {
  color: #00000;
}

h2 {
  color: #4B0082;
}

```
Base = How many choice you have
3 Digit Number Choices
---
Decimal -- Base 10
0,1,2,3,4,5,6,7,8,9

Largest = 999
Smallest = 001
---
BINARY - Base 2
0,1

Largest = 111 = not the same as one hundred and eleven
---
HEXADECIMAL - Base 16
0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

Largest = FFF
Smallest = 000

First Two: How much Red
Second Two: How much green
Third Two: How much blue

Does not work like mixing color, based on how light works
#FFFFFF = white
#000000 = black

FF = 255
0 - FF Range for each

- Can Have a three digit Hexadecimal number if each triplet is the exact same digit
- #000 : Black
- #c5e : #cc55ee

```css

h1 {
  color: #FF0000;
  color: red;
}

h1 {
  color: #ff8000;
  color: orange;
}

```

## hsl Color System
- Look up Colt's Video on YouTube

