function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.9385541,30.323)
  }
  var GoogleMap = new google.maps.Map(document.querySelector(".js-map"), mapOptions);
  var image = "../img/map-marker.svg";
  var myLatLng = new google.maps.LatLng(59.93855,30.323);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: GoogleMap,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
