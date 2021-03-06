$(document).ready(function() {
  $(".music .content table button").bind("click", function() {
    if (!$(this).hasClass("active")) {
      $(".music .content .placeholder").remove();
      $(".grooveshark > param").attr("value", "playlistID=" + $(this).data("grooveshark") + "&p=1");
      $(".grooveshark").css("display", "block");

      var obj = $(".grooveshark");
      var orig = obj.html();
      obj.html(orig);

      $("button").removeClass("active");
      $(this).addClass("active");

      _gaq.push(['_trackEvent', 'Playlists', 'Play (Grooveshark)', $(this).data("grooveshark").toString()]);
      setTimeout(function(){$(".grooveshark").css("opacity", "1");}, 200);
    } else {
    _gaq.push(['_trackEvent', 'Playlists', 'Play (Disabled)', $(this).data("grooveshark").toString()]);
    }
  });
});
