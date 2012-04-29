// Hide misc elements on the map's page.

var attribution = document.getElementsByClassName("attribution");

for (var i = 0; i < attribution.length; i++) {
  attribution[i].style.display = "none"
}

document.getElementById("header").style.display = "none"
document.getElementById("overlay").style.display = "none"

// alert(window.innerWidth + ' by ' + window.innerHeight)

document.body.style.zoom = .5

setTimeout(function(){
    var map = document.getElementById("map-main")
    map.style.width = "2048px"
    map.style.height = "1536px"
}, 1500)

setTimeout(function () {

    function init() {
        var doc = document.documentElement;

        function getSize() {
            return new MM.Point(2048, 1536);
        }

        var parent = document.getElementById("map-main"),
            size = getSize(),
            providerName = parent.getAttribute("data-provider"),
            provider = new MM.StamenTileLayer(providerName);

        function resize() {
            try {
                size = getSize();
                if (main) main.setSize(size);
            } catch (e) {}
        }

        MM.addEvent(window, "resize", resize);

        // our main map
        var main = new MM.Map(parent, provider, size, [new MM.DragHandler(), new MM.DoubleClickHandler(), new MM.TouchHandler()]);
        parent.style.position = "absolute";
        main.autoSize = false;

        setupZoomControls(main);

        // set the initial map position
        main.setCenterZoom(new MM.Location(37.7706, -122.3782), 12);

        syncMapLinks(main, [document.getElementById("home-link")], function (parts) {
            parts.unshift(providerName);
        });

        var hasher = new MM.Hash(main);
    }

    init();

}, 2000)
