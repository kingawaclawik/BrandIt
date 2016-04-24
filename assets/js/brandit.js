function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            window.localStorage.setItem("img",e.target.result);
            var img = document.getElementById("image_upload_preview");
            img.setAttribute('src', e.target.result);
            $("#logo-text").hide();

            img.addEventListener('load', function() {
                var vibrant = new Vibrant(img);
                var swatches = vibrant.swatches()
                var swatch=swatches['Vibrant'];
                var colorRGB=swatch.getRgb();
                console.log(colorRGB);

                window.localStorage.setItem("hexcolor",swatch.getHex());

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


                if($(".ls-color").length) {
                    $(".ls-color").css("background-color",window.localStorage.getItem("hexcolor"));
                }

                console.log(window.localStorage.getItem("img"));
                console.log(window.localStorage.getItem("hexcolor"));
                console.log(window.localStorage.getItem("color"));
            });
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function getJSON() {
    var all='[{     "url": "http://www.ikea.com/pl/pl/catalog/products/S49110931/",     "result": {         "extractorData": {          "url": "http://www.ikea.com/pl/pl/catalog/products/S49110931/",             "resourceId": "3b0b3d61129dd159d6e431c61c70f521",           "data": [{              "group": [{                     "Image main": [{                        "src": "http://www.ikea.com/pl/pl/images/products/thyge-biurko__0351207_PE538418_S4.JPG"                    }],                     "Name": [{                      "text": "THYGE"                     }],                     "Detalis": [{                       "text": "Biurko, biały, srebrny"                    }],                     "Price": [{                         "text": "349 PLN"                   }],                     "Id number": [{                         "text": "491.109.31"                    }],                     "Description": [{                       "text": "Blat można zamontować na odpowiedniej wysokości, bo nogi mają regulację w zakresie od 60 do 90 cm."                    }],                     "Size": [{                      "text": "120x60 cm"                     }]              }]          }]      },      "pageData": {           "statusCode": 200,          "timestamp": 1461413852030      }   } }, {  "url": "http://www.ikea.com/pl/pl/catalog/products/40103100/",  "result": {         "extractorData": {          "url": "http://www.ikea.com/pl/pl/catalog/products/40103100/",          "resourceId": "a45e8cfc949c4c76f253ffceeb479a9d",           "data": [{              "group": [{                     "Image main": [{                        "src": "http://www.ikea.com/pl/pl/images/products/markus-krzes-o-obrotowe-czarny__0392583_PE564516_S4.JPG"                  }],                     "Name": [{                      "text": "MARKUS"                    }],                     "Detalis": [{                       "text": "Krzesło obrotowe, czarny Glose Robust czarny"                  }],                     "Price": [{                         "text": "599 PLN"                   }],                     "Id number": [{                         "text": "401.031.00"                    }],                     "Description": [{                       "text": "Gwarancja 10 lat. Więcej informacji w broszurze gwarancyjnej."                     }]              }]          }]      },      "pageData": {           "statusCode": 200,          "timestamp": 1461415552460      }   } }, {  "url": "http://www.ikea.com/pl/pl/catalog/products/20287077/",  "result": {         "extractorData": {          "url": "http://www.ikea.com/pl/pl/catalog/products/20287077/",          "resourceId": "06ddfea3636996412cc964e490f5e874",           "data": [{              "group": [{                     "Image main": [{                        "src": "http://www.ikea.com/pl/pl/images/products/patrik-krzes-o-konferencyjne-niebieski__0251787_PE390566_S4.JPG"                  }],                     "Name": [{                      "text": "PATRIK"                    }],                     "Detalis": [{                       "text": "Krzesło konferencyjne, Ullevi niebieski"                   }],                     "Price": [{                         "text": "399 PLN"                   }],                     "Id number": [{                         "text": "202.870.77"                    }]              }]          }]      },      "pageData": {           "statusCode": 200,          "timestamp": 1461417412681      }   } }, {  "url": "http://www.ikea.com/pl/pl/catalog/products/S79006297/",     "result": {         "extractorData": {          "url": "http://www.ikea.com/pl/pl/catalog/products/S79006297/",             "resourceId": "a11848a955107fe85cd811eead04e464",           "data": [{              "group": [{                     "Image main": [{                        "src": "http://www.ikea.com/pl/pl/images/products/bekant-sto-konferencyjny-bia-y__0250463_PE388823_S4.JPG"                  }],                     "Name": [{                      "text": "BEKANT"                    }],                     "Detalis": [{                       "text": "Stół konferencyjny, biały"                     }],                     "Price": [{                         "text": "1 999 PLN"                     }],                     "Id number": [{                         "text": "790.062.97"                    }],                     "Description": [{                       "text": "Bezpłatna gwarancja 10 lat. Warunki gwarancji znajdziesz w broszurze."                     }],                     "Size": [{                      "text": "280x140 cm"                    }]              }]          }]      },      "pageData": {           "statusCode": 200,          "timestamp": 1461417697184      }   } }, {  "url": "http://www.ikea.com/pl/pl/catalog/products/30275861/",  "result": {         "extractorData": {          "url": "http://www.ikea.com/pl/pl/catalog/products/30275861/",          "resourceId": "6ae4072f98dd4eaeedaaf66b78a504dd",           "data": [{              "group": [{                     "Image main": [{                        "src": "http://www.ikea.com/pl/pl/images/products/kallax-rega-bia-y__0243965_PE383236_S4.JPG"                   }],                     "Name": [{                      "text": "KALLAX"                    }],                     "Detalis": [{                       "text": "Regał, biały"                  }],                     "Price": [{                         "text": "299 PLN"                   }],                     "Id number": [{                         "text": "302.758.61"                    }],                     "Description": [{                       "text": "Mebel można użyć jako przegrodę pokoju, ponieważ wygląda jednakowo dobrze z każdej strony."                    }],                     "Size": [{                      "text": "147x147 cm"                    }]              }]          }]      },      "pageData": {           "statusCode": 200,          "timestamp": 1461416620651      }   } }, {  "url": "http://www.ikea.com/pl/pl/catalog/products/10301564/",  "result": {         "extractorData": {          "url": "http://www.ikea.com/pl/pl/catalog/products/10301564/",          "resourceId": "c4a83d0e6e1b000c4c4d0f8f4e489705",           "data": [{              "group": [{                     "Image main": [{                        "src": "http://www.ikea.com/pl/pl/images/products/kallax-wk-ad-z-drzwiami-turkusowy__0371265_PE551207_S4.JPG"                   }],                     "Name": [{                      "text": "KALLAX"                    }],                     "Detalis": [{                       "text": "Wkład z drzwiami, turkusowy"                   }],                     "Price": [{                         "text": "40 PLN"                    }],                     "Id number": [{                         "text": "103.015.64"                    }],                     "Description": [{                       "text": "Latwo złożyć. Wkład posiada wykończenie z tyłu, dzięki czemu ładnie wygląda w przegrodzie pokoju."                     }],                     "Size": [{                      "text": "33x33 cm"                  }]              }]          }]      },      "pageData": {           "statusCode": 200,          "timestamp": 1461418156587      }   } }, {  "url": "http://www.ikea.com/pl/pl/catalog/products/20301573/",  "result": {         "extractorData": {          "url": "http://www.ikea.com/pl/pl/catalog/products/20301573/",          "resourceId": "461dec2fddddd6565f58576da4986f94",           "data": [{              "group": [{                     "Image main": [{                        "src": "http://www.ikea.com/pl/pl/images/products/kallax-wk-ad-z-szufladami-turkusowy__0371257_PE551201_S4.JPG"                     }],                     "Name": [{                      "text": "KALLAX"                    }],                     "Detalis": [{                       "text": "Wkład z 2 szufladami, turkusowy"                   }],                     "Price": [{                         "text": "75 PLN"                    }],                     "Id number": [{                         "text": "203.015.73"                    }],                     "Description": [{                       "text": "Wkład posiada wykończenie z tyłu, dzięki czemu ładnie wygląda w przegrodzie pokoju."                   }]              }]          }]      },      "pageData": {           "statusCode": 200,          "timestamp": 1461418387838      }   } }, {  "url": "http://www.ikea.com/pl/pl/catalog/products/80153254/",  "result": {         "extractorData": {          "url": "http://www.ikea.com/pl/pl/catalog/products/80153254/",          "resourceId": "15cf48f5fe0bae60cc7dfd10c16c3bce",           "data": [{              "group": [{                     "Image main": [{                        "src": "http://www.ikea.com/pl/pl/images/products/dokument-kosz-na-odpady__0095424_PE234076_S4.JPG"                     }],                     "Name": [{                      "text": "DOKUMENT"                  }],                     "Detalis": [{                       "text": "Kosz na odpady, srebrny"                   }],                     "Price": [{                         "text": "15,99 PLN"                     }],                     "Id number": [{                         "text": "801.532.54"                    }]              }]          }]      },      "pageData": {           "statusCode": 200,          "timestamp": 1461418433584      }   } }]';
    return $.parseJSON(all);
    //cena: obj[0]['result']['extractorData']['data'][0]['group'][0]['Size'][0]['text']
    //cena: obj[0]['result']['extractorData']['data'][0]['group'][0]['Price'][0]['text']
    //cena: obj[0]['result']['extractorData']['data'][0]['group'][0]['Name'][0]['text']
    //cena: obj[0]['result']['extractorData']['data'][0]['group'][0]['Image main'][0]['src']
    //cena: obj[0]['result']['extractorData']['data'][0]['group'][0]['Detalis'][0]['text']
    //cena: obj[0]['result']['extractorData']['data'][0]['group'][0]['Description'][0]['text']
    /*

    console.log(testowo[0]['result']['extractorData']['data'][0]['group'][0]['Size'][0]['text']);
    console.log(testowo[0]['result']['extractorData']['data'][0]['group'][0]['Price'][0]['text']);
    console.log(testowo[0]['result']['extractorData']['data'][0]['group'][0]['Name'][0]['text']);
    console.log(testowo[0]['result']['extractorData']['data'][0]['group'][0]['Image main'][0]['src']);
    console.log(testowo[0]['result']['extractorData']['data'][0]['group'][0]['Detalis'][0]['text']);
    console.log(testowo[0]['result']['extractorData']['data'][0]['group'][0]['Description'][0]['text']);
    */
}

function getTable() {
    $(".table-order").html("");

    var arr=getJSON();
    var fullprice=0;
    for(i=0;i<arr.length;i++) {
        if(window.localStorage.getItem("desks")!=undefined && !isNaN(parseInt(window.localStorage.getItem("desks")))) {
            var quantity=parseInt(window.localStorage.getItem("desks"));
        } else {
            var quantity=0;
        }
        var price=parseFloat(arr[i]['result']['extractorData']['data'][0]['group'][0]['Price'][0]['text'].split(" PLN")[0].replace(" ","").replace(",","."));
        var sumprice=quantity*price;
        fullprice+=sumprice;
        
        if(arr[i]['result']['extractorData']['data'][0]['group'][0]['Size']!=undefined) {
            $(".table-order").append('<tr><td><span class="Name">'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Name'][0]['text']+'</span><br><span class="detalis">'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Detalis'][0]['text']+'</span></td><td><img class="img-block" src="'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Image main'][0]['src']+'"/></td><td>'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Size'][0]['text']+'</td><td>'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Price'][0]['text']+'</td><td>'+quantity+'</td><td>'+sumprice+' PLN</td></tr>');
        } else {
            $(".table-order").append('<tr><td><span class="Name">'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Name'][0]['text']+'</span><br><span class="detalis">'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Detalis'][0]['text']+'</span></td><td><img class="img-block" src="'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Image main'][0]['src']+'"/></td><td>nieznany rozmiar</td><td>'+arr[i]['result']['extractorData']['data'][0]['group'][0]['Price'][0]['text']+'</td><td>'+quantity+'</td><td>'+sumprice+' PLN</td></tr>');
        }
    }

    $("#fullpricebox").html(fullprice+" PLN");
}

$(document).ready(function () {

    if(window.localStorage.getItem("desks")!=undefined && window.localStorage.getItem("size")!=undefined && window.localStorage.getItem("color")!=undefined && window.localStorage.getItem("hexcolor")!=undefined) {
        if($(".ls-desks").length) {
            $(".ls-desks").val(window.localStorage.getItem("desks"));
        }
        if($(".ls-size").length) {
            $(".ls-size").val(window.localStorage.getItem("size"));
        }
        if($(".ls-color").length) {
            $(".ls-color").css("background-color",window.localStorage.getItem("hexcolor"));
        }
        if($(".ls-img").length) {
            $(".ls-img").attr("src",window.localStorage.getItem("img"));
        }
    }

    if($(".order-table").length) {
        getTable();
    }

    $("input[type='file']").change(function () {
        readURL(this);
    });

    $("input[type='number']").focusout(function() {
      window.localStorage.setItem("desks",$($("input[type='number']")[0]).val())
      window.localStorage.setItem("size",$($("input[type='number']")[1]).val())
      getTable();
    });

    $("input[type='number']").keyup(function() {
      window.localStorage.setItem("desks",$($("input[type='number']")[0]).val())
      window.localStorage.setItem("size",$($("input[type='number']")[1]).val())
      getTable();
    });
    $('#designTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
})