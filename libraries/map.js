
var mapArray = [
    [0, 0, 0, 0 ,0],
    [0, 1, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 0, 0 ,0],
    [0, 0, 1, 1 ,0]
];

var tileArray = new Array();

function drawMap(canvas) {
    background = canvas;      
    for (var i = 0; i < mapArray.length; i++) {
        for (var j = 0; j < mapArray[i].length; j++) {
            if (parseInt(mapArray[i][j]) == 0) {
            var newTile = {
    		// color: "#00A",
    		tile: Tile("spaceship"),
    		x: j*28,
    		y: i*28,
    		width:	60,
    		height: 60,
    		
    		draw: function() {
        	//canvas.fillStyle = this.color;
        	// canvas.fillRect(this.x, this.y, this.width, this.height);
        	this.tile.draw(canvas, this.x, this.y);
	     }
	   };

		tileArray.push(newTile);
               //console.log(newTile.x);
            //  <!--canvas.drawImage(image1, x*28, y*28);-->
	    }
            if (parseInt(mapArray[i][j]) == 1) {
	        var newTile = {
    		// color: "#00A",
    		tile: Tile("enemy"),
    		x: j*28,
    		y: i*28,
    		width: 60,
    		height: 60,
    
    		draw: function() {
        	//canvas.fillStyle = this.color;
        	// canvas.fillRect(this.x, this.y, this.width, this.height);
        	this.tile.draw(canvas, this.x, this.y);
    }
};
		tileArray.push(newTile);
            //canvas.drawImage(image2, x*28, y*28);-->
            }
           
            
           //background.addChild(tile);-->
        }
    }
   //canvas.addChild(background);-->     
   return tileArray;
}

