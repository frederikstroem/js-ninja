// Game version.
gameVersion = "null";

function getGameVersion() {
  return gameVersion;
}

// Game size.
width = 640;
height = 480;

function getNewFallVelocity (gravity, yVelocity) {
  return gravity + yVelocity;
}

// Return if an object is colliding with the tilemap.
function objectCollidingWithTilemap (objectX, objectY, objectWidth, objectHeight) {
  // TODO: Might be able to optimize this.
  // Loop though each tile to check if an object is coliding with the tilemap.
  var currentRow = 1;
  var currentCol = 1;
  for (var i = 0; i < tilemap.map.length; i++) {

  }
  return false; // If not coliding, retun false.
}

// Get canvas context.
var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext("2d");
