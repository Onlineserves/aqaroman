var Pos = "303px";
var PosLi = "";
var Close = true;
var dir = "right";
$('document').ready(function () {

    $("#FAQ_QMain").hover(function () { $("#FAQ_QOver").fadeIn(300); });
    $("#FAQ_QOver").hover(function () { }, function () { $("#FAQ_QOver").fadeOut(300); });

    $(".PollF").click(function () {
        var val = $(this).find("input").val();
        $("#PollButton").css("display", "block");
        if (val == "An1RadioButton")
            $("#PollButton").stop().animate({ "padding-top": "70px", "opacity": 1 }, 500);
        if (val == "An2RadioButton")
            $("#PollButton").stop().animate({ "padding-top": "122px", "opacity": 1 }, 500);
        if (val == "An3RadioButton")
            $("#PollButton").stop().animate({ "padding-top": "182px", "opacity": 1 }, 500);
    });


    var OverHeight = false;
    function SubExistClick() {
        if (Close) {

            var MainNode = $(this);
            var height = MainNode.css("height");
            if (height == "38px") {
                var LICount = MainNode.find("li").size();
                var newHeight = (parseInt(LICount) * 38) + 38;
                if (LICount != 0) {
                    var menuHeight = $("#Right_Menu").css("height").substr(0, $("#Right_Menu").css("height").length - 2);
                    var newMenuHeight = (parseInt(LICount) * 38) + parseInt(menuHeight);
                    //MainNode.unbind();
                    $("#Right_Menu").stop().animate({ "height": newMenuHeight + "px" }, 500, function () { /*MainNode.click(SubExistClick);*/ });
                    MainNode.stop().animate({ "height": newHeight + "px" }, 500);
                    MainNode.find(".SubUL").slideDown(500);
                }
                else
                    OverHeight = false;
            }

        }
    }
    $('.SubExist').click(SubExistClick);

    $(".FAQ-Q a").click(function () {
        $(this).parent().parent().parent().find(".FAQ-A").slideDown(500);
        return false;
    });

    $(".FAQ-Q-New a").click(function () {
        $(this).parent().parent().parent().parent().parent().parent().parent().find(".FAQ-A").slideDown(500);

        return false;
    });

    $("#FAQ_QMain").hover(function () { $("#FAQ_QOver").fadeIn(300); });
    $("#FAQ_QOver").hover(function () { }, function () { $("#FAQ_QOver").fadeOut(300); });

    var C = true;
    var T = true;
    var E = true;
    $("#Comments").on({
        mouseenter:
            function () {
                if (C)
                    $(this).removeClass("comment_icon").addClass("CommentsActive");
            },
        mouseleave:
            function () {
                if (C)
                    $(this).removeClass("CommentsActive").addClass("comment_icon");
            }
    });
    $("#Tell").on({
        mouseenter:
            function () {
                if (T)
                    $(this).removeClass("Tell").addClass("TellActive");
            },
        mouseleave:
            function () {
                if (T)
                    $(this).removeClass("TellActive").addClass("Tell");
            }
    });
    $("#Evaluate").on({
        mouseenter:
            function () {
                if (E)
                    $(this).removeClass("Evaluate").addClass("EvaluateActive");
            },
        mouseleave:
            function () {
                if (E)
                    $(this).removeClass("EvaluateActive").addClass("Evaluate");
            }
    });

    $("#Comments").on("click", function () {
        $("#Comments").removeClass("comment_icon").addClass("CommentsActive");
        $("#Tell").removeClass("TellActive").addClass("Tell");
        $("#Evaluate").removeClass("EvaluateActive").addClass("Evaluate");

        T = true;
        E = true;
        $("#Tell_Box").slideUp(500);
        $("#Evaluate_Box").slideUp(500);
        $("#Comments_Box").slideToggle(500, function () {
            ScrollToElement("Comments_Box");

            if ($("#Comments_Box").css("display") == "block") {
                C = false;
                $("#Comments").css("opacity", "1");
            }
            else {
                C = true;
                $("#Comments").css("opacity", "1");
            }
        });
    });
    $("#Tell").on("click", function () {
        $("#Comments").removeClass("CommentsActive").addClass("comment_icon");
        $("#Tell").removeClass("Tell").addClass("TellActive");
        $("#Evaluate").removeClass("EvaluateActive").addClass("Evaluate");
        C = true;
        E = true;
        $("#Comments_Box").slideUp(500);
        $("#Evaluate_Box").slideUp(500);
        $("#Tell_Box").slideToggle(500, function () {
            ScrollToElement("Tell_Box");

            if ($("#Tell_Box").css("display") == "block") {
                T = false;
                $("#Tell").css("opacity", "1");
            }
            else {
                T = true;
                $("#Tell").css("opacity", "1");
            }
        });
    });

    $("#Evaluate").on("click", function () {
        $("#Comments").removeClass("CommentsActive").addClass("comment_icon");
        $("#Tell").removeClass("TellActive").addClass("Tell");
        $("#Evaluate").removeClass("Evaluate").addClass("EvaluateActive");
        C = true;
        T = true;
        $("#Comments_Box").slideUp(500);
        $("#Tell_Box").slideUp(500);
        $("#Evaluate_Box").slideToggle(500, function () {
            ScrollToElement("Evaluate_Box");

            if ($("#Evaluate_Box").css("display") == "block") {
                E = false;
                $("#Evaluate").css("opacity", "1");
            }
            else {
                E = true;
                $("#Evaluate").css("opacity", "1");
            }
        });
    });

    $("#AddComment").on("click", function () {
        $("#AddCommentArea").slideToggle(500);
    });
    $("#CancelCommentButton").on("click", function () {
        $("#AddCommentArea").slideUp(500);
    });


    $("#SearchButton").click(function () {

        if ($('.SearchTextBoxCss').val().length > 3)
            window.location = 'Search.aspx?keyword=' + $('.SearchTextBoxCss').val();
        else {
            alert("Please enter more than 3 characters for search.");
            $('#SearchTextBox').focus();
        }
        return false;
    });

    $('#AP, .AP').on("click", function () {
        var FS = $(".container").css("font-size");
        var FontSize = FS.substr(0, FS.length - 2);
        var NewFS = parseInt(FontSize) + 2;
        if (NewFS <= 18) {
            $(".container").css("font-size", NewFS + "px");
            $(".container div").css("font-size", NewFS + "px");
            $(".container p").css("font-size", NewFS + "px");
            $(".container h1").css("font-size", NewFS + "px");
            $(".container h2").css("font-size", NewFS + "px");
            $(".container h3").css("font-size", NewFS + "px");
            $(".container h4").css("font-size", NewFS + "px");
            $(".container a").css("font-size", NewFS + "px");
        }
        return false;
    });

    $('#AM, .AM').on("click", function () {
        var FS = $(".wrapper").css("font-size");
        var FontSize = FS.substr(0, FS.length - 2);
        var NewFS = parseInt(FontSize) - 2;
        if (NewFS >= 8) {
            $(".wrapper").css("font-size", NewFS + "px");
            $(".wrapper div").css("font-size", NewFS + "px");
            $(".wrapper p").css("font-size", NewFS + "px");
            $(".wrapper h1").css("font-size", NewFS + "px");
            $(".wrapper h2").css("font-size", NewFS + "px");
            $(".wrapper h3").css("font-size", NewFS + "px");
            $(".wrapper h4").css("font-size", NewFS + "px");
            $(".wrapper a").css("font-size", NewFS + "px");
        }
        return false;
    });

    $('#AD, .AD').on("click", function () {
        $(".navig a").css("font-size", "15px");
        $(".ababic_a a").css("font-size", "13px");
        $(".sml_a > a").css("font-size", "14px");
        $(".bannertext").css("font-size", "20px");
        $(".tile b").css("font-size", "20px");
        $(".list_dv ul li a").css("font-size", "14px");
        $(".para").css("font-size", "13px");
        $(".para > p").css("font-size", "13px");
        $(".para > a").css("font-size", "13px");
        $(".mid p").css("font-size", "13px");
        $(".ove_h.pol > p").css("font-size", "13px");
        $(".ove_h.pol > div").css("font-size", "13px");
        $(".pollmorelink").css("font-size", "13px");
        $(".jslider .jslider-label").css("font-size", "9px");
        $(".jslider .jslider-value").css("font-size", "9px");
        $(".abai i").css("font-size", "16px");
        $(".ove_h pol a").css("font-size", "13px");
        $(".lis > b").css("font-size", "20px");
        $(".lis ul li a").css("font-size", "14px");
        $(".borkos ul li > a").css("font-size", "14px");
        $(".DaleelBox ul li a").css("font-size", "14px");
        $(".sub_menu ul li a").css("font-size", "14px");
        $(".ServiceRequestHeader").css("font-size", "14px");
        $(".Description").css("font-size", "13px");
        $(".brd_cr").css("font-size", "13px");
        return false;
    });

    $("#Newsletter_Link").on("click", function () {

        if ($("#Newsletter_Div").css("display") == "none") {
            $("#Newsletter_Div").show();
            return false;
        }
        else {
            $("#Newsletter_Div").hide();
            return false;
        }
    });

});

function printData(printIcon) {

    $("#Print").css("display", "none");
    $("#Print").parent().parent().show().printElement();
    $("#Print").css("display", "block");
    return false;

}

function PrintPreview() {
    var content = document.getElementById("Load_Data").innerHTML;
    win = window.open();
    self.focus();
    win.document.open();
    win.document.write('<html ><head>');
    win.document.write('<link href="Styles/Page.css" rel="stylesheet" type="text/css" />');
    win.document.write('<style>body{font-family:Arial;color:#333;background:#fff;}</style>');
    win.document.write('</head><body style="background:none;margin:10px;padding:25px;">');
    win.document.write(content);
    win.document.write('</body></html>');
    win.document.close();
    win.print();
    win.close();
    return false;
}


function ScrollToElement(id) {

    $('html, body').animate({
        scrollTop: $("#" + id).offset().top - 70
    }, 500, function () { $("#" + id).focus(); });
}

function ShowAwardDetails(id) {
    document.getElementById(id).style.display = "block";
}
function HideAwardDetails(id) {
    document.getElementById(id).style.display = "none";
}




function ChangeLang(Lang) {
    var OldURL = document.location.href;
    var NewURL = "";
    if (Lang == "ar")
        NewURL = OldURL.replace("10.18.13.100", "10.18.13.100/ar");
    else if (Lang == "en")
        NewURL = OldURL.replace("10.18.13.100/ar", "10.18.13.100");
    window.location = NewURL;
}

function ActivateCounter(Counter) {
    $("#MainCounter").parent().css("visibility", "visible");
    $("#MainCounter").text(Counter);
}