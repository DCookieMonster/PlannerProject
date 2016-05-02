///**
// * Created by dor on 26/04/2016.
// */
//
//
//var canvas = document.getElementById("board");
//var ctx = canvas.getContext("2d");
//var tileSize = canvas.offsetHeight / 3;
//
//var offset = 0;
//var robot = [
//    {
//        x: offset,
//        y: 0,
//        color: 0
//    }
//    , {
//        x: tileSize + offset,
//        y: tileSize,
//        color: 1
//    }
//];
//
//var colors = ["blue", "red"];
////var activeColor=0;
//
//var tiles = [["white", 0, 0], ["white", 0, tileSize], ["white", 0, 2 * tileSize],
//    ["white", tileSize, 0], ["white", tileSize, tileSize], ["white", tileSize, 2 * tileSize],
//    ["white", 2 * tileSize, 0], ["white", 2 * tileSize, tileSize], ["white", 2 * tileSize, 2 * tileSize]
//];
//
//var result_tiles = [["blue", 0, 0], ["red", 0, tileSize], ["blue", 0, 2 * tileSize],
//    ["red", tileSize, 0], ["blue", tileSize, tileSize], ["red", tileSize, 2 * tileSize],
//    ["blue", 2 * tileSize, 0], ["red", 2 * tileSize, tileSize], ["blue", 2 * tileSize, 2 * tileSize]
////];
var g = document.getElementById('goal');
var gctx = g.getContext('2d');
var goalHeightTileSize = g.offsetHeight / 4;
var goalWidthTileSize = g.offsetWidth / 3;
var goal_tiles = [['white', 0 * goalWidthTileSize, 0 * goalHeightTileSize], ['white', 1 * goalWidthTileSize, 0 * goalHeightTileSize], ['white', 2 * goalWidthTileSize, 0 * goalHeightTileSize], ['blue', 2 * goalWidthTileSize, 2 * goalHeightTileSize], ['red', 2 * goalWidthTileSize, 1 * goalHeightTileSize], ['red', 2 * goalWidthTileSize, 3 * goalHeightTileSize], ['blue', 0 * goalWidthTileSize, 2 * goalHeightTileSize], ['blue', 0 * goalWidthTileSize, 2 * goalHeightTileSize], ['red', 0 * goalWidthTileSize, 1 * goalHeightTileSize], ['blue', 1 * goalWidthTileSize, 1 * goalHeightTileSize], ['red', 0 * goalWidthTileSize, 3 * goalHeightTileSize], ['blue', 1 * goalWidthTileSize, 3 * goalHeightTileSize], ['red', 1 * goalWidthTileSize, 2 * goalHeightTileSize]];
var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');
var heightTileSize = canvas.offsetHeight / 4;
var widthTileSize = canvas.offsetWidth / 3;
var tiles = [['white', 0 * widthTileSize, 0 * heightTileSize], ['white', 1 * widthTileSize, 0 * heightTileSize], ['white', 2 * widthTileSize, 0 * heightTileSize], ['white', 0 * widthTileSize, 1 * heightTileSize], ['white', 1 * widthTileSize, 1 * heightTileSize], ['white', 2 * widthTileSize, 1 * heightTileSize], ['white', 0 * widthTileSize, 2 * heightTileSize], ['white', 1 * widthTileSize, 2 * heightTileSize], ['white', 2 * widthTileSize, 2 * heightTileSize], ['white', 0 * widthTileSize, 3 * heightTileSize], ['white', 1 * widthTileSize, 3 * heightTileSize], ['white', 2 * widthTileSize, 3 * heightTileSize]];
var robot = [{x: 1 * widthTileSize, y: 2 * heightTileSize, color: 0}, {
    x: 0 * widthTileSize,
    y: 0 * heightTileSize,
    color: 1
}];
var colors = ["blue", "red"];
var result_tiles = [['white', 0 * widthTileSize, 0 * heightTileSize], ['white', 1 * widthTileSize, 0 * heightTileSize], ['white', 2 * widthTileSize, 0 * heightTileSize], ['blue', 2 * widthTileSize, 2 * heightTileSize], ['red', 2 * widthTileSize, 1 * heightTileSize], ['red', 2 * widthTileSize, 3 * heightTileSize], ['blue', 0 * widthTileSize, 2 * heightTileSize], ['blue', 0 * widthTileSize, 2 * heightTileSize], ['red', 0 * widthTileSize, 1 * heightTileSize], ['blue', 1 * widthTileSize, 1 * heightTileSize], ['red', 0 * widthTileSize, 3 * heightTileSize], ['blue', 1 * widthTileSize, 3 * heightTileSize], ['red', 1 * widthTileSize, 2 * heightTileSize]];
var GridSize = "3X4"

//var g = document.getElementById('goal');
//var gctx = g.getContext('2d');
//var goalHeightTileSize = g.offsetHeight / 7;
//var goalWidthTileSize = g.offsetWidth / 5;
//var goal_tiles = [['white', 0 * goalWidthTileSize, 0 * goalHeightTileSize], ['white', 1 * goalWidthTileSize, 0 * goalHeightTileSize], ['white', 2 * goalWidthTileSize, 0 * goalHeightTileSize], ['white', 3 * goalWidthTileSize, 0 * goalHeightTileSize], ['white', 4 * goalWidthTileSize, 0 * goalHeightTileSize], ['red', 0 * goalWidthTileSize, 3 * goalHeightTileSize], ['red', 2 * goalWidthTileSize, 5 * goalHeightTileSize], ['blue', 1 * goalWidthTileSize, 3 * goalHeightTileSize], ['blue', 3 * goalWidthTileSize, 5 * goalHeightTileSize], ['red', 2 * goalWidthTileSize, 3 * goalHeightTileSize], ['red', 4 * goalWidthTileSize, 5 * goalHeightTileSize], ['red', 0 * goalWidthTileSize, 1 * goalHeightTileSize], ['blue', 3 * goalWidthTileSize, 3 * goalHeightTileSize], ['blue', 1 * goalWidthTileSize, 1 * goalHeightTileSize], ['blue', 0 * goalWidthTileSize, 6 * goalHeightTileSize], ['red', 4 * goalWidthTileSize, 3 * goalHeightTileSize], ['red', 2 * goalWidthTileSize, 1 * goalHeightTileSize], ['red', 1 * goalWidthTileSize, 6 * goalHeightTileSize], ['blue', 0 * goalWidthTileSize, 4 * goalHeightTileSize], ['blue', 3 * goalWidthTileSize, 1 * goalHeightTileSize], ['blue', 2 * goalWidthTileSize, 6 * goalHeightTileSize], ['red', 1 * goalWidthTileSize, 4 * goalHeightTileSize], ['red', 4 * goalWidthTileSize, 1 * goalHeightTileSize], ['red', 3 * goalWidthTileSize, 6 * goalHeightTileSize], ['blue', 2 * goalWidthTileSize, 4 * goalHeightTileSize], ['blue', 0 * goalWidthTileSize, 2 * goalHeightTileSize], ['blue', 4 * goalWidthTileSize, 6 * goalHeightTileSize], ['red', 3 * goalWidthTileSize, 4 * goalHeightTileSize], ['red', 1 * goalWidthTileSize, 2 * goalHeightTileSize], ['blue', 4 * goalWidthTileSize, 4 * goalHeightTileSize], ['blue', 2 * goalWidthTileSize, 2 * goalHeightTileSize], ['red', 0 * goalWidthTileSize, 5 * goalHeightTileSize], ['red', 3 * goalWidthTileSize, 2 * goalHeightTileSize], ['blue', 1 * goalWidthTileSize, 5 * goalHeightTileSize], ['blue', 4 * goalWidthTileSize, 2 * goalHeightTileSize]];
//var canvas = document.getElementById('board');
//var ctx = canvas.getContext('2d');
//var heightTileSize = canvas.offsetHeight / 7;
//var widthTileSize = canvas.offsetWidth / 5;
//var tiles = [['white', 0 * widthTileSize, 0 * heightTileSize], ['white', 1 * widthTileSize, 0 * heightTileSize], ['white', 2 * widthTileSize, 0 * heightTileSize], ['white', 3 * widthTileSize, 0 * heightTileSize], ['white', 4 * widthTileSize, 0 * heightTileSize], ['white', 0 * widthTileSize, 1 * heightTileSize], ['white', 1 * widthTileSize, 1 * heightTileSize], ['white', 2 * widthTileSize, 1 * heightTileSize], ['white', 3 * widthTileSize, 1 * heightTileSize], ['white', 4 * widthTileSize, 1 * heightTileSize], ['white', 0 * widthTileSize, 2 * heightTileSize], ['white', 1 * widthTileSize, 2 * heightTileSize], ['white', 2 * widthTileSize, 2 * heightTileSize], ['white', 3 * widthTileSize, 2 * heightTileSize], ['white', 4 * widthTileSize, 2 * heightTileSize], ['white', 0 * widthTileSize, 3 * heightTileSize], ['white', 1 * widthTileSize, 3 * heightTileSize], ['white', 2 * widthTileSize, 3 * heightTileSize], ['white', 3 * widthTileSize, 3 * heightTileSize], ['white', 4 * widthTileSize, 3 * heightTileSize], ['white', 0 * widthTileSize, 4 * heightTileSize], ['white', 1 * widthTileSize, 4 * heightTileSize], ['white', 2 * widthTileSize, 4 * heightTileSize], ['white', 3 * widthTileSize, 4 * heightTileSize], ['white', 4 * widthTileSize, 4 * heightTileSize], ['white', 0 * widthTileSize, 5 * heightTileSize], ['white', 1 * widthTileSize, 5 * heightTileSize], ['white', 2 * widthTileSize, 5 * heightTileSize], ['white', 3 * widthTileSize, 5 * heightTileSize], ['white', 4 * widthTileSize, 5 * heightTileSize], ['white', 0 * widthTileSize, 6 * heightTileSize], ['white', 1 * widthTileSize, 6 * heightTileSize], ['white', 2 * widthTileSize, 6 * heightTileSize], ['white', 3 * widthTileSize, 6 * heightTileSize], ['white', 4 * widthTileSize, 6 * heightTileSize]];
//var robot = [{x: 1 * widthTileSize, y: 3 * heightTileSize, color: 1}, {
//    x: 3 * widthTileSize,
//    y: 4 * heightTileSize,
//    color: 1
//}, {x: 0 * widthTileSize, y: 1 * heightTileSize, color: 0}];
//var colors = ["blue", "red"];
//var result_tiles = [['white', 0 * widthTileSize, 0 * heightTileSize], ['white', 1 * widthTileSize, 0 * heightTileSize], ['white', 2 * widthTileSize, 0 * heightTileSize], ['white', 3 * widthTileSize, 0 * heightTileSize], ['white', 4 * widthTileSize, 0 * heightTileSize], ['red', 0 * widthTileSize, 3 * heightTileSize], ['red', 2 * widthTileSize, 5 * heightTileSize], ['blue', 1 * widthTileSize, 3 * heightTileSize], ['blue', 3 * widthTileSize, 5 * heightTileSize], ['red', 2 * widthTileSize, 3 * heightTileSize], ['red', 4 * widthTileSize, 5 * heightTileSize], ['red', 0 * widthTileSize, 1 * heightTileSize], ['blue', 3 * widthTileSize, 3 * heightTileSize], ['blue', 1 * widthTileSize, 1 * heightTileSize], ['blue', 0 * widthTileSize, 6 * heightTileSize], ['red', 4 * widthTileSize, 3 * heightTileSize], ['red', 2 * widthTileSize, 1 * heightTileSize], ['red', 1 * widthTileSize, 6 * heightTileSize], ['blue', 0 * widthTileSize, 4 * heightTileSize], ['blue', 3 * widthTileSize, 1 * heightTileSize], ['blue', 2 * widthTileSize, 6 * heightTileSize], ['red', 1 * widthTileSize, 4 * heightTileSize], ['red', 4 * widthTileSize, 1 * heightTileSize], ['red', 3 * widthTileSize, 6 * heightTileSize], ['blue', 2 * widthTileSize, 4 * heightTileSize], ['blue', 0 * widthTileSize, 2 * heightTileSize], ['blue', 4 * widthTileSize, 6 * heightTileSize], ['red', 3 * widthTileSize, 4 * heightTileSize], ['red', 1 * widthTileSize, 2 * heightTileSize], ['blue', 4 * widthTileSize, 4 * heightTileSize], ['blue', 2 * widthTileSize, 2 * heightTileSize], ['red', 0 * widthTileSize, 5 * heightTileSize], ['red', 3 * widthTileSize, 2 * heightTileSize], ['blue', 1 * widthTileSize, 5 * heightTileSize], ['blue', 4 * widthTileSize, 2 * heightTileSize]];
//var GridSize = "5X7"