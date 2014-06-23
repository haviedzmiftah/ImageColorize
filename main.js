function asli(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var x = 0;
        var y = 0;

        context.drawImage(imageObj, x, y);
      }
      
      var imageObj = new Image();
      imageObj.onload = 
      function() {
		  drawImage(this);
		  };
      var imageObj = new Image();
      imageObj.src = "images/foto.jpg";
function grayscale(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var x = 0;
        var y = 0;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for(var i = 0; i < data.length; i += 4) {
          var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
          // merah
          data[i] = brightness;
          // hijau
          data[i + 1] = brightness;
          // biru
          data[i + 2] = brightness;
        }

        // menimpa gambar asli
        context.putImageData(imageData, x, y);
      }
      
      var imageObj = new Image();
      imageObj.onload = 
      function() {
		  drawImage(this);
		  };
      var imageObj = new Image();
      imageObj.src = "images/foto.jpg";
      
function invert(imageObj) {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var x = 0;
        var y = 0;

        context.drawImage(imageObj, x, y);

        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;

        for(var i = 0; i < data.length; i += 4) {
          // merah
          data[i] = 255 - data[i];
          // hijau
          data[i + 1] = 255 - data[i + 1];
          // biru
          data[i + 2] = 255 - data[i + 2];
        }

        context.putImageData(imageData, x, y);
      }
      
      var imageObj = new Image();
      imageObj.onload = function() {
        drawImage(this);
      };
      imageObj.src = "images/foto.jpg";
