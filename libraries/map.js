
var mapArray = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 2, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 3, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 3, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
    [1, 1, 2, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 3, 0, 0, 1, 3, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

var tileArray = new Array();
var player1spawns = new Array();
var player2spawns = new Array();

function drawMap(canvas) {
    background = canvas;      
    for (var i = 0; i < mapArray.length; i++) {
        for (var j = 0; j < mapArray[i].length; j++) {
            if (parseInt(mapArray[i][j]) == 0) {
            var newTile = {
    		// color: "#00A",
    		tile: Tile("emptyTile"),
    		x: j*60,
    		y: i*60,
    		width:	60,
    		height: 60,
    		type: "floor",
    		draw: function() {
        	//canvas.fillStyle = this.color;
        	// canvas.fillRect(this.x, this.y, this.width, this.height);
        	this.tile.draw(canvas, this.x, this.y, 60, 60);
	     }
	   };

		tileArray.push(newTile);
               //console.log(newTile.x);
            //  <!--canvas.drawImage(image1, x*28, y*28);-->
	    }
            if (parseInt(mapArray[i][j]) == 1) {
	        var newTile = {
    		// color: "#00A",
    		tile: Tile("emptyTile"),
    		x: j*60,
    		y: i*60,
    		width: 60,
    		height: 60,
            type: "wall",
    
    		draw: function() {
        	//canvas.fillStyle = this.color;
        	// canvas.fillRect(this.x, this.y, this.width, this.height);
        	this.tile.draw(canvas, this.x, this.y, 60, 60);
    }
};
		tileArray.push(newTile);
            //canvas.drawImage(image2, x*28, y*28);-->
            }
            if (parseInt(mapArray[i][j]) == 3) {
	        var newTile = {
    		// color: "#00A",
    		tile: Tile("emptyTile"),
    		x: j*60,
    		y: i*60,
    		width: 60,
    		height: 60,
            type: "player1spawn",
    
    		draw: function() {
        	//canvas.fillStyle = this.color;
        	// canvas.fillRect(this.x, this.y, this.width, this.height);
        	this.tile.draw(canvas, this.x, this.y, 60, 60);
    }
};
		tileArray.push(newTile);
        player1spawns.push(newTile);
            //canvas.drawImage(image2, x*28, y*28);-->
            }
            if (parseInt(mapArray[i][j]) == 2) {
	        var newTile = {
    		// color: "#00A",
    		tile: Tile("emptyTile"),
    		x: j*60,
    		y: i*60,
    		width: 60,
    		height: 60,
            type: "player2spawn",
    
    		draw: function() {
        	//canvas.fillStyle = this.color;
        	// canvas.fillRect(this.x, this.y, this.width, this.height);
        	this.tile.draw(canvas, this.x, this.y, 60, 60);
    }
};
		tileArray.push(newTile);
        player2spawns.push(newTile);
            //canvas.drawImage(image2, x*28, y*28);-->
            }


           
            
           //background.addChild(tile);-->
        }
    }
   //canvas.addChild(background);-->     
   return tileArray;
}

