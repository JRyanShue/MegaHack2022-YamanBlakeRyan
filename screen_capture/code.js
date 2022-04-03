var myVar;
var takeScreenShot = function() {
    clearTimeout(myVar);
    html2canvas(document.getElementById("container"), {
        onrendered: function (canvas) {
            var tempcanvas=document.createElement('canvas');
            tempcanvas.width=350;
            tempcanvas.height=350;
            var context=tempcanvas.getContext('2d');
            context.drawImage(canvas,0,0,500,700,0,0,600,800); //set coordinates of where yoou want to capture
            var link=document.createElement("a");
            link.href=tempcanvas.toDataURL('image/jpg');   //function blocks CORS
            link.download = 'screenshot.jpg';
            link.click();
        }
    });
    myVar = setTimeout(takeScreenShot, 10000);
}