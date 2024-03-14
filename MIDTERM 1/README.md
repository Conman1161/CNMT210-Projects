# Terry's Wow Factor(s)!
I'm vey proud of the sit I've put together. There are two things that I'm very proud of:
## Translucent Header
I spent a good while trying to figure out a good way to have a translucent header so the header image could still be visible underneath my header links. While I ended up removing the header image in the end, this was what my code looked like for the translucent effect:
```CSS
ul.headerLinks {
    /* Other code...*/
    /* Red, Green, Blue, Alpha*/
    background-color: rgba(255, 255, 255, .5);
}
```
The **rgba()** parameter takes an additional parameter, 'alpha', which controls how translucent the color is. I think it was very effective in showing off my header image, while present, and was worth figuring out how to make it work.
## Div disappear when not enough space
On some of the pages, it didn't make sense for the image used to fill dead space to be visible when the screen width didn't require it. To remove the image, this is the code I used:
```CSS
@media screen and (max-width: 975px) {
    div.leftHalf, div.rightHalf {
        width: 100%;
    }
    div.rightHalf{
        display: none;
    }
}
```
This is for my pages with two "halves", where the left half contains content and the right half contains an image to fill dead space. It applies the CSS once the **max-width** has been met, making both halves have a width of 100% and hiding the right half (image).