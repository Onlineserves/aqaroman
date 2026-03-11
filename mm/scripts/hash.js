$().ready(function () {
    setInterval("checkAnchor()", 300);
});
var currentAnchor = null;
var currentSection = null;

function checkAnchor() {

    if (currentAnchor != document.location.hash) {
        currentAnchor = document.location.hash;
        if (currentAnchor != "") {
            if (currentAnchor.length > 1) {
                var splits = currentAnchor.substring(1).split('&');
                var section = splits[0];
                splits.splice(0, 1);
                var params = splits.join('&');

                if (params == "MID=27&PGID=195")
                    window.location = "Poll.aspx";
                if (params == "MID=28&PGID=207")
                    window.location = "Feedback.aspx";

                $("#Pages_Left").html("<div style='text-align:center;padding-top:100px;'><img src='Images/load.gif' /></div>");
                $.ajaxSetup({ cache: false });

                $("#MainCounter").parent().css("visibility", "hidden");

                $.post(section + ".aspx", params, function (data) {
                    $("#Pages_Left").html(data);

                    if ($("#Comments_Tell_Area").length) {
                        $("#Comments_Tell_Area").html("<div style='padding-top:10px;'><img src='Images/load.gif' /></div>");
                        $.post("Comments_Tell.aspx", "section=" + section + "&" + params, function (data) {
                            $("#Comments_Tell_Area").html(data);
                        });
                    }

                    if ($("#RSBanners_Area").length) {
                        $("#RSBanners_Area").html("<div style='text-align:center;padding-top:10px;'><img src='Images/load.gif' /></div>");
                        $.post("RSBanners.aspx", "section=" + section + "&" + params, function (data) {
                            $("#RSBanners_Area").html(data);
                        });
                    }

                    if ($("#player").length) {
                        flowplayer("player", { src: "flowplayer-3.2.5.swf", wmode: 'opaque' });
                    }
                });

                if ($("#tab-head-" + splits[0].split('=')[1]).length) {
                   // $("#contentdiv").removeClass("col-md-12");
                  //  $("#contentdiv").addClass("col-md-110");
                    var Li = $("#tab-head-" + splits[0].split('=')[1]);
                    var Position = Li.offset();
                    Pos = Position.top;
                    PosLi = Li.attr("id");
                    var idattr = Li.attr("idstr");

                    Li.addClass("active");
                    if ($("#tab" + idattr).length) {
                        $("#tab" + idattr).addClass("current");
                        if ($("#tab" + idattr + " ul li:first").length) {
                            var sub = splits[1];

                            if (sub.includes("MoID")) {

                                var modid = sub.split('=')[1];

                                if ($("#subtabitem-page-mod_" + modid).length) {

                                    $("#subtabitem-page-mod_" + modid).addClass("active");
                                }
                                
                            }
                            if (sub.includes("PGID")) {
                                var pageid = sub.split('=')[1];
                                if ($("#subtabitem-page-mod_" + pageid).length) {
                                    $("#subtabitem-page-mod_" + pageid).addClass("active");
                                }
                            }
                        }
                    }
                }
                //else {
                //    $("#contentdiv").addClass("col-md-12");
                //}
                //if (splits.length > 2) {
                //    if (splits[2].split('=')[1] == "True")
                //        Li.trigger('click');
                //    if (splits[1].split('=')[1] == "True")
                //        Li.trigger('click');
                //}



                $("#PathDiv").html("<img src='Images/load.gif' />");
                $.post("Path.aspx", params, function (data) {
                    $("#PathDiv").html(data);
                });
                $(".PathDiv").html("<img src='Images/load.gif' />");
                $.post("Path.aspx", params, function (data) {
                    $(".PathDiv").html(data);
                });
            }
        }
    }
}