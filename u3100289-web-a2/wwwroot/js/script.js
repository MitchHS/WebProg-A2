// JavaScript source code


function openWeb(url) {
  window.location.assign(url);
}

// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var Centre = new google.maps.LatLng(40.062109, -101.817383);
// Initialise the map
function initMap() {
    // Define the properties for Canberra Centre map
    var techMap = {
        center: Centre,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), techMap);

    // Add markers below this line
    
    
    addOracleMarker(map);
    addAmazon(map);
    addGoogle(map);
    addIBM(map);
    addMicrosoft(map);
    addSAS(map);

}
// functions
function addOracleMarker(map)
{
    var oracleHQ = new google.maps.LatLng(37.529202, -122.264678);
    var markerOracleHQ = new google.maps.Marker({
        position: oracleHQ,
    });

    markerOracleHQ.setMap(map);

    var contentOracle = ' <h1 style="color:black">Oracle HeadQuarters</h1>' +
        ' <img src="../resources/images/oracle.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Oracle</b> the parent of java provides a number of ' +
        'services including cloud, virtualisation and infrastructure solutions. <br>' +
        '<a href="https://www.oracle.com/index.html' +
        '">View more here</a>' +
        ' </p>';
    var infoOracleHQ = new google.maps.InfoWindow({
        content: contentOracle
    });

    google.maps.event.addListener(markerOracleHQ, 'click',
        function () {
            infoOracleHQ.open(map, markerOracleHQ);
        });
}



function addSAS(map) {

    var SASHQ =
        new google.maps.LatLng(35.828470, -78.764033);
    var markerSASHQ = new google.maps.Marker({
        position: SASHQ,
    });

    markerSASHQ.setMap(map);

    var contentSAS =
        ' <h1 style="color:black">SAS HQ</h1>' +
        ' <img src="../resources/images/sas.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>SAS institute</b> is one of the worlds ' +
        'leading analytics firms providing software solutions and more. <br>' +
        '<a href="https://www.sas.com/en_us/home.html_' +
        '">View more here</a>' +
        ' </p>';

    var infoWindowSAS= new google.maps.InfoWindow({
        content: contentSAS
    });


    google.maps.event.addListener(markerSASHQ, 'click',
        function () {
            infoWindowSAS.open(map, markerSASHQ);
        });

}


function addMicrosoft(map) {

    var MicrosoftHQ =
        new google.maps.LatLng(47.642346, -122.136988);
    var markerMicrosoftHQ = new google.maps.Marker({
        position: MicrosoftHQ,
    });

    markerMicrosoftHQ.setMap(map);

    var contentMicrosoft =
        ' <h1 style="color:black">Microsoft HQ</h1>' +
        ' <img src="../resources/images/microsoft.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Microsoft</b> is debatebly the most influential ' +
        'tech company in the world. It provides a variety of services, ' +
        'software and hardware. <br>' +
        '<a href="https://azure.microsoft.com/en-au/' +
        '">View more here</a>' +
        ' </p>';

    var infoWindowMicrosoft = new google.maps.InfoWindow({
        content: contentMicrosoft
    });


    google.maps.event.addListener(markerMicrosoftHQ, 'click',
        function () {
            infoWindowMicrosoft.open(map, markerMicrosoftHQ);
        });

}

function addGoogle(map) {

    var googleHQ =
        new google.maps.LatLng(37.422020, -122.084042);
    var markerGoogleHQ = new google.maps.Marker({
        position: googleHQ,
    });

    markerGoogleHQ.setMap(map);

    var contentGoogle =
        ' <h1 style="color:black">Google HQ</h1>' +
        ' <img src="../resources/images/amazon.png" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Google</b> is one of the leading technology' +
        'enterprises in the world. Google provides a varity of services. <br> ' +
        '<a href="https://cloud.google.com/' +
        '">View More Here</a>' +
        ' </p>';

    var infoWindowGoogle = new google.maps.InfoWindow({
        content: contentGoogle
    });


    google.maps.event.addListener(markerGoogleHQ, 'click',
        function () {
            infoWindowGoogle.open(map, markerGoogleHQ);
        });

}


function addIBM(map) {

    var IBMHQ =
        new google.maps.LatLng(41.108336, -73.720420);
    var markerIBMHQ = new google.maps.Marker({
        position: IBMHQ,
    });

    markerIBMHQ.setMap(map);

    var contentIBM =
        ' <h1 style="color:black">IBM HQ</h1>' +
        ' <img src="../resources/images/ibm.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>International Business Machines</b> operates in over 170 countries' +
        ' and is most iconic computer companies to date. </p><br>' +
        ' <a href="https://www.ibm.com/au-en' +
        '">View more here</a>' +
        ' </p>';

    var infoWindowIBM = new google.maps.InfoWindow({
        content: contentIBM
    });


    google.maps.event.addListener(markerIBMHQ, 'click',
        function () {
            infoWindowIBM.open(map, markerIBMHQ);
        });

}

function addAmazon(map) {

    var amazonHQ =
        new google.maps.LatLng(47.622274, -122.336481);
    var markerAmazonHQ = new google.maps.Marker({
        position: amazonHQ,
    });

    markerAmazonHQ.setMap(map);

    var contentAmazon = 
        ' <h1 style="color:black">Amazon HQ</h1>' +
        ' <img src="../resources/images/amazon.png" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Amazon Web Servies</b> commonly known as a online retailer ' +
        ' is one of the leading web service providers in 2019. <br>' +
        '<a href="https://aws.amazon.com/_' +
        '"> View More Here</a>' +
        ' </p>';

    var infoWindowAmazon = new google.maps.InfoWindow({
        content: contentAmazon
    });


    google.maps.event.addListener(markerAmazonHQ, 'click',
        function () {
            infoWindowAmazon.open(map, markerAmazonHQ);
        });

}



// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);

