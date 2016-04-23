function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            window.localStorage.setItem("img",e.target.result);
            var img = document.createElement('img');
            img.setAttribute('src', e.target.result)

            img.addEventListener('load', function() {
                var vibrant = new Vibrant(img);
                var swatches = vibrant.swatches()
                var swatch=swatches['Vibrant'];
                var colorRGB=swatch.getRgb();
                console.log(colorRGB);
                if(colorRGB[0]==colorRGB[1]==colorRGB[2] && colorRGB[0]>200) {
                    window.localStorage.setItem("color","white");
                } else if(colorRGB[0]==colorRGB[1]==colorRGB[2] && colorRGB[0]<55) {
                    window.localStorage.setItem("color","black");
                } else if(colorRGB[0]==colorRGB[1]==colorRGB[2]) {
                    window.localStorage.setItem("color","gray");
                } else if(colorRGB[0]>=colorRGB[1] && colorRGB[0]>=colorRGB[2]) {
                    window.localStorage.setItem("color","red");
                } else if(colorRGB[1]>=colorRGB[0] && colorRGB[1]>=colorRGB[2]) {
                    window.localStorage.setItem("color","green");
                } else if(colorRGB[2]>=colorRGB[0] && colorRGB[2]>=colorRGB[1]) {
                    window.localStorage.setItem("color","blue");
                }

                /*
                 * Results into:
                 * Vibrant #7a4426
                 * Muted #7b9eae
                 * DarkVibrant #348945
                 * DarkMuted #141414
                 * LightVibrant #f3ccb4
                 */

                 console.log(window.localStorage.getItem("img"));
                 console.log(window.localStorage.getItem("color"));
            });
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function () {
    $("input[type='file']").change(function () {
        readURL(this);
    });

})