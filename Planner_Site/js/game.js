/**
 * Created by dor on 22/04/2016.
 */

var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");


function initGoal() {
    var g = document.getElementById("goal");
    var gctx = g.getContext("2d");
    var tileSize2 = g.offsetHeight / 3;
    var goal_tiles = [["blue", 0, 0], ["red", 0, tileSize2], ["blue", 0, 2 * tileSize2],
        ["red", tileSize2, 0], ["blue", tileSize2, tileSize2], ["red", tileSize2, 2 * tileSize2],
        ["blue", 2 * tileSize2, 0], ["red", 2 * tileSize2, tileSize2], ["blue", 2 * tileSize2, 2 * tileSize2]
    ];
    for (var i = 0; i < goal_tiles.length; i++) {
        gctx.beginPath();
        gctx.fillStyle = goal_tiles[i][0];
        gctx.rect(goal_tiles[i][1], goal_tiles[i][2], tileSize2, tileSize2);
        gctx.stroke();
        gctx.fill();
    }

}

var score = 0;

var tileSize = canvas.offsetHeight / 3;

var offset = 0;
var robot = [
    {
        x: offset,
        y: 0,
        color: 0
    }
    , {
        x: tileSize + offset,
        y: tileSize,
        color: 1
    }
];
var activeRobot = 0;
// Handle keyboard controls
var keysDown = {};
//

var colors = ["blue", "red"];
//var activeColor=0;

var tiles = [["white", 0, 0], ["white", 0, tileSize], ["white", 0, 2 * tileSize],
    ["white", tileSize, 0], ["white", tileSize, tileSize], ["white", tileSize, 2 * tileSize],
    ["white", 2 * tileSize, 0], ["white", 2 * tileSize, tileSize], ["white", 2 * tileSize, 2 * tileSize]
];

var result_tiles = [["blue", 0, 0], ["red", 0, tileSize], ["blue", 0, 2 * tileSize],
    ["red", tileSize, 0], ["blue", tileSize, tileSize], ["red", tileSize, 2 * tileSize],
    ["blue", 2 * tileSize, 0], ["red", 2 * tileSize, tileSize], ["blue", 2 * tileSize, 2 * tileSize]
];


var states = [{
    robot: jQuery.extend(true, [], robot),
    tiles: jQuery.extend(true, [], tiles),
    activeRobot: activeRobot,
    score: score
}]

function draw_tiles() {

    for (var i = 0; i < tiles.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = tiles[i][0];
        ctx.rect(tiles[i][1], tiles[i][2], tileSize, tileSize);
        ctx.stroke();
        ctx.fill();
    }

}


window.addEventListener("keydown", function (e) {
    console.log(e.keyCode)
    keysDown[e.keyCode] = true;
    update(200);
    render();
    // space and arrow keys
    if ([32, 37, 38, 39, 40, 83, 87, 67, 88].indexOf(e.keyCode) > -1) {
        console.log(e.keyCode)
        delete keysDown[e.keyCode];

        e.preventDefault();
    }
}, false);


// Reset the game when the player catches a monster
var undo = function () {
    if (states.length < 2) {
        return
    }
    states.pop();
    var state = states[states.length - 1];

    robot = jQuery.extend(true, [], state.robot);
    activeRobot = state.activeRobot;
    tiles = jQuery.extend(true, [], state.tiles);
    render();

};

//Update game objects
var update = function (modifier) {
    if (38 in keysDown) { // Player holding up
        if (robot[activeRobot].y - modifier <= 0) {
            return;
        }
        robot[activeRobot].y -= modifier;
        score += 3;
    }
    if (40 in keysDown) { // Player holding down
        if (robot[activeRobot].y + modifier >= canvas.offsetWidth - tileSize) {
            return;
        }
        robot[activeRobot].y += modifier;
        score += 1;

    }
    if (37 in keysDown) { // Player holding left
        if (robot[activeRobot].x - modifier <= 0 + offset) {
            return;
        }
        robot[activeRobot].x -= modifier;
        score += 1;

    }
    if (39 in keysDown) { // Player holding right
        if (robot[activeRobot].x + modifier >= canvas.offsetWidth - tileSize + offset) {
            return;
        }
        robot[activeRobot].x += modifier;
        score += 1;

    }
    if (83 in keysDown) {
        console.log("s")
        score += 1;

        for (var i = 0; i < tiles.length; i++) {
            if (robot[activeRobot].x == tiles[i][1] && robot[activeRobot].y + tileSize == tiles[i][2]) {
                tiles[i][0] = colors[robot[activeRobot].color];
            }
        }
        if (checkGoal()) {
            //TODO:win
            alert("you win");
        }
    }
    if (87 in keysDown) {
        console.log("w")
        score += 1;
        for (var i = 0; i < tiles.length; i++) {
            if (robot[activeRobot].x == tiles[i][1] && robot[activeRobot].y - tileSize == tiles[i][2]) {
                tiles[i][0] = colors[robot[activeRobot].color];
            }
        }
        if (checkGoal()) {
            //TODO:win
            alert("you win");

        }
    }
    if (67 in keysDown) {
        console.log("c");
        score += 5;

        robot[activeRobot].color = (robot[activeRobot].color + 1) % colors.length;
        $("#color_span").text(colors[robot[activeRobot].color]);
    }
    if (88 in keysDown) {
        console.log("x");
        score += 0;

        activeRobot = (activeRobot + 1) % robot.length;
        $("#robot_span").text(activeRobot);
        $("#color_span").text(colors[robot[activeRobot].color]);


    }
    states.push({
        robot: jQuery.extend(true, [], robot),
        tiles: jQuery.extend(true, [], tiles),
        activeRobot: activeRobot,
        score: score
    });
    // Are they touching?
    //if (
    //    hero.x <= (monster.x + 32)
    //    && monster.x <= (hero.x + 32)
    //    && hero.y <= (monster.y + 32)
    //    && monster.y <= (hero.y + 32)
    //) {
    //    ++monstersCaught;
    //    reset();
    //}
};

function checkGoal() {
    for (var i = 0; i < tiles.length; i++) {
        for (var j = 0; j < result_tiles.length; j++) {
            if (tiles[i][1] == result_tiles[j][1] && tiles[i][2] == result_tiles[j][2]) {
                if (tiles[i][0] != result_tiles[j][0]) {
                    return false;
                }
            }
        }
    }
    return true;
}


// Draw everything
var render = function () {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw_tiles();

    if (heroReady) {
        for (var i = 0; i < robot.length; i++) {
            if (i == activeRobot) {
                ctx.drawImage(activeRobotimg, robot[i].x, robot[i].y);

            }
            else {
                ctx.drawImage(heroImage, robot[i].x, robot[i].y);

            }
            ctx.beginPath();
            ctx.fillStyle = colors[robot[i].color];
            ctx.rect(robot[i].x + heroImage.width / 2 - 15, robot[i].y + 3 * heroImage.height / 4 - 10, 30, 30);
            ctx.stroke();
            ctx.fill();


        }
    }


    $("#color_span").text(colors[robot[activeRobot].color]);
    $("#robot_span").text(activeRobot);
};

var activeRobotimg = new Image();
activeRobotimg.src = "../img/robot3.png";

var heroReady = false;
var heroImage = new Image();
heroImage.src = "../img/robot2.png";


// The main game loop
var main = function () {
    //var now = Date.now();
    //var delta = now - then;
// Background image

    heroImage.onload = function () {
        activeRobotimg.onload = function () {
            heroReady = true;
            render();
        }

    };

};


// Let's play this game!
//var then = Date.now();
//draw_tiles();
$("#color_span").text(colors[robot[activeRobot].color]);
$("#robot_span").text(activeRobot);

main();
initGoal();
