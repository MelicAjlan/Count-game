//
//  Ovaj file bi trebao biti za brojanje koliko puta je korisnik stisnuo button
//

var counts = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");

btn.onclick = function () {
    counts++;
    disp.innerJavaScript = counts;
}