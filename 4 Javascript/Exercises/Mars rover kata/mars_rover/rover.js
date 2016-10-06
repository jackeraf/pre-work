
// VARIABLES


var posX = 0;
var posY = 0;
var oldX = posX;
var oldY = posY;
var facing = "N";
var oldfacing = facing;
var obstacle1X = 15;
var obstacle1Y = 7;
var obstacle2X = 6;
var obstacle2Y = 28;


// Link with html file to write:

function write()
{
  document.getElementById("position").innerHTML = "<b>Rover Position: X=" + posX + " Y=" + posY + " Facing " + facing + "</b>";
}

// COLLISION FUNCTION


function collision_control()
{
  if (posX == obstacle1X && posY == obstacle1Y)
  {
    alert("Collision at [" + obstacle1X + "," + obstacle1Y + "]. Rover returns to [" + oldX + "," + oldY + "].");
    posX = oldX; // the robot will return to the previous position and facing before running into the obstacle
    posY = oldY;
    facing = oldfacing;
    write();
  }
  else if (posX == obstacle2X && posY == obstacle2Y) 
  {
    alert("Collision at [" + obstacle2X + "," + obstacle2Y + "]. Rover returns to [" + oldX + "," + oldY + "].");
    posX = oldX;
    posY = oldY;
    facing = oldfacing;
    write();
  }
  else
  {
    write();
  }
}



// MOVEMENT FUNCTIONS


function position_control()
{
  if (posY > 9) // 10 x 10 grid where we need to make sure that the rover never goes off the grid but rather, 
    //wraps from one edge of the grid to another (planets are spheres after all)
  {
    posY = 0;
  }
  if (posY < 0)
  {
    posY = 9;
  }
  if (posX > 9)
  {
    posX = 0;
  }
  if (posX < 0)
  {
    posX = 9;
  }
}

function move_forward()
{
  switch(facing)
  {
    case "N":
      posY += 1;
      position_control();
      break;
    case "S":
      posY -= 1;
      position_control();
      break;
    case "E":
      posX += 1;
      position_control();
      break;
    case "W":
      posX -= 1;
      position_control();
      break;
  }
}

function move_backward()
{
  switch(facing)
  {
    case "N":
      posY -= 1;
      position_control();
      break;
    case "S":
      posY += 1;
      position_control();
      break;
    case "E":
      posX -= 1;
      position_control();
      break;
    case "W":
      posX += 1;
      position_control();
      break;
  }
}

function turn_left()
{
  switch(facing)
  {
    case "N":
      facing = "W";
      break;
    case "S":
      facing = "E";
      break;
    case "E":
      facing = "N";
      break;
    case "W":
      facing = "S";
      break;
  }
}

function turn_right()
{
  switch(facing)
  {
    case "N":
      facing = "E";
      break;
    case "S":
      facing = "W";
      break;
    case "E":
      facing = "S";
      break;
    case "W":
      facing = "N";
      break;
  }
}


// RESET FUNCTION


function reset()
{
  posX = 0;
  posY = 0;
  facing = "N"
  alert("Rover initial position: X=" + posX + "  Y=" + posY + "  Facing " + facing);
  document.getElementById("movement").value = "";
  
  write();
}




// MAIN FUNCTION



function move_rover()
{

  var commands= document.getElementById("movement").value;

  oldX = posX;
  oldY = posY;
  oldfacing = facing;

  for (i=0;i<commands.length;i++)
  {
    switch(commands[i])
    {
      case "f":
          move_forward();
          break;
      case "b":
        move_backward(); 
          break;
        case "l":
        turn_left(); 
          break;
      case "r":
        turn_right(); 
          break;
      default:
          alert("Syntax error!\nCommand -" + commands[i] + "- unkwnown.");
    }
  }

  collision_control();
}
