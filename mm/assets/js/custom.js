$('.news-slider').slick({
    infinite: true,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 2,
    rtl:true,
    dots:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

$('.home-slider').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    dots: false,
    arrows: false
});




AOS.init();
      
$('a[href="#search"]').click(function () {
    event.preventDefault()
    $("#search-box").addClass("-open");
    setTimeout(function () {
        inputSearch.focus();
    }, 800);
});

$('a[href="#close"]').click(function () {
    event.preventDefault()
    $("#search-box").removeClass("-open");
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        $("#search-box").removeClass("-open");
    }
});


function searchresult() {
    if ($('.SearchTextBoxCss').val().length > 3)
        window.location = 'Search.aspx?keyword=' + $('.SearchTextBoxCss').val();
    else {
        alert("Please enter more than 3 characters for search.");
        $('#SearchTextBox').focus();
    }
    return false;
}

var input = document.getElementById("inputSearch");
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        if ($('.SearchTextBoxCss').val().length > 3)
            window.location = 'Search.aspx?keyword=' + $('.SearchTextBoxCss').val();
        else {
            alert("Please enter more than 3 characters for search.");
            $('#SearchTextBox').focus();
        }
        return false;
    }
});

$('.colorSwitch').click(function () {
    $(".javrx").toggleClass('grayscale');    
});

$('.incFont').click(function () {
    if (steps == 0) {
        $affectedElements = $("div,span,label,a,li,td,th"); // Can be extended, ex. $("div, p, span.someClass")
        $affectedElements.each(function () {
            var $this = $(this);
            $this.attr('data-font-size', $this.css("font-size"));
        });
    }
    steps += 1;
    if (steps > 4) {
        steps = 4;
        return false;
    }
    initFontCur(steps);
    changeFontSize(1);
    return false;
});

$('.decFont').click(function () {
    steps -= 1;

    if (steps < 0) {
        steps = 0;
        return false;
    }

    initFontCur(steps);
    // for home page
    changeFontSize(-1);
    return false;
});



// start font increase / decrease code
var steps = 0;
initFontCur(steps);

function incFont(elem, step) {

    $('div,span,label,a,li,td,th', elem).each(function () { incFont($(this), step); });
    var currentFontSize = elem.css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);

    if (currentFontSizeNum != 0) {
        // save the default size as attribute
        if (elem.attr('df') == undefined) {
            elem.attr('df', currentFontSizeNum);
        }

        if (currentFontSizeNum < (26 + step)) {
            var newFontSize = currentFontSizeNum + 1;
            elem.css('font-size', newFontSize.toString() + 'px');
        }
    }
}

function decFont(elem, step) {
    if (currentFontSizeNum != 0) {
        var currentFontSize = elem.css('font-size');
        var currentFontSizeNum = parseFloat(currentFontSize, 10);

        if (step == 0)
            elem.css('font-size', elem.attr('df') + 'px');
        else
            if (currentFontSizeNum > (18 + step)) {
                var newFontSize = currentFontSizeNum - 1;

                if (newFontSize >= elem.attr('df'))
                    elem.css('font-size', newFontSize.toString() + 'px');
            }
    }
    $('div,span,label,a,li,td,th', elem).each(function () { decFont($(this), step); });
}

function initFontCur(step) {
    var inc = $('img#incFont');
    var dec = $('img#decFont');

    if (step >= 4) {
        inc.css('cursor', 'default');
        dec.css('cursor', 'pointer');
    }
    else if (step <= 0) {
        inc.css('cursor', 'pointer');
        dec.css('cursor', 'default');
    }
    else {
        inc.css('cursor', 'pointer');
        dec.css('cursor', 'pointer');
    }
}

var $affectedElements; // Can be extended, ex. $("div, p, span.someClass")
function changeFontSize(direction) {
    $affectedElements.each(function () {
        var $this = $(this);
        if (steps == 0) {
            $this.css("font-size", parseInt($this.attr("data-font-size")));
        } else {
            $this.css("font-size", parseInt($this.css("font-size")) + direction);
        }
    });
}

function PrintPreview() {
    window.print();

    
   // document.body.innerHTML = originalContents;
   
    //var content = document.getElementById("Load_Data").innerHTML;    
    //win = window.open();
    //self.focus();
    //win.document.open();
    //win.document.write('<html ><head>');
    //win.document.write('<link href="Styles/Page.css" rel="stylesheet" type="text/css" />');
    //win.document.write('<style>body{font-family:Arial;color:#333;background:#fff;}</style>');
    //win.document.write('</head><body style="background:none;margin:10px;padding:25px;">');
    //win.document.write(content);
    //win.document.write('</body></html>');
    //win.document.close();
    //win.print();
    //win.close();
    //return false;
}
