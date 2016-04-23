var img = document.createElement('img');
img.setAttribute('src', 'file:///Users/fzarebinski/Downloads/BrandIt/dist/assets/js/vibrant/examples/octocat.png')

img.addEventListener('load', function() {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches()
    var swatch=swatches['Vibrant'];
    var colorRGB=swatch.getRgb();
    console.log(colorRGB);
    if(colorRGB[0]==colorRGB[1]==colorRGB[2] && colorRGB[0]>200) {
        console.log("white");
    } else if(colorRGB[0]==colorRGB[1]==colorRGB[2] && colorRGB[0]<55) {
        console.log("black");
    } else if(colorRGB[0]==colorRGB[1]==colorRGB[2]) {
        console.log("gray");
    } else if(colorRGB[0]>=colorRGB[1] && colorRGB[0]>=colorRGB[2]) {
        console.log("red");
    } else if(colorRGB[1]>=colorRGB[0] && colorRGB[1]>=colorRGB[2]) {
        console.log("green");
    } else if(colorRGB[2]>=colorRGB[0] && colorRGB[2]>=colorRGB[1]) {
        console.log("blue");
    }

    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
});
        