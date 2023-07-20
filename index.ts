const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;
const TPS = 2;
const DELAY = FPS / TPS;

interface Tile {
  explode(x: number, y: number, type: Tile): void;
  move(x: number, y: number): void;
  gameover(): void;
  update(x: number, y: number): void;
  moveUpToThis(x: number, y: number): void;
  moveDownTothis(x: number, y: number): void;
  moveLeftToThis(x: number, y: number): void;
  moveRightToThis(x: number, y: number): void;
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void;
  colorCode: string;
}

class Air implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
  }
  colorCode: string = null;
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new Air();
    map[y + 1][x] = new TmpMonsterDown();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new Air();
    map[y][x - 1] = new MonsterLeft();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new Air();
    map[y][x + 1] = new TmpMonsterRight();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new Air();
    map[y - 1][x] = new MonsterUp();    
  }
  update(x: number, y: number): void {
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    playery += y;
    playerx += x;
  }
}

class Unbreakable implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#999999";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {}
  move(x: number, y: number): void {
    
  }
}

class Stone implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#0000cc";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    if (Math.random() < 0.1) 
      map[y][x] = new ExtraBomb();
    else
      map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class Bomb implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#770000";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y][x] = new BombClose();
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    bombs++;
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class BombClose implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#cc0000";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y][x] = new BombReallyClose();
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    bombs++;
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class BombReallyClose implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#ff0000";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    explode(x + 0, y - 1, new Fire());
    explode(x + 0, y + 1, new TmpFire());
    explode(x - 1, y + 0, new Fire());
    explode(x + 1, y + 0, new TmpFire());
    bombs++;
    map[y][x] = new Fire();
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    bombs++;
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class TmpFire implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = null;
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y][x] = new Fire();
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class Fire implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#ffcc00";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y][x] = new Air();
  }
  gameover(): void {
    gameOver = true;
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    playery += y;
    playerx += x;
  }
}

class ExtraBomb implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#00cc00";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    playery += y;
    playerx += x;
    bombs++;
    map[playery][playerx] = new Air();
  }
}

class MonsterUp implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#cc00cc";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y - 1][x].moveUpToThis(x, y);
  }
  gameover(): void {
    gameOver = true;
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class MonsterRight implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#cc00cc";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y][x + 1].moveRightToThis(x, y);
  }
  gameover(): void {
    gameOver = true;
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class TmpMonsterRight implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = null;
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class MonsterDown implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#cc00cc";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y + 1][x].moveDownTothis(x, y);
  }
  gameover(): void {
    gameOver = true;
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class TmpMonsterDown implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = null;
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  gameover(): void {
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

class MonsterLeft implements Tile {
  fillRect(x: number, y: number, g: CanvasRenderingContext2D): void {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  colorCode: string = "#cc00cc";
  moveDownTothis(x: number, y: number): void {
    map[y][x] = new MonsterLeft();
  }
  moveLeftToThis(x: number, y: number): void {
    map[y][x] = new MonsterUp();
  }
  moveRightToThis(x: number, y: number): void {
    map[y][x] = new MonsterDown();
  }
  moveUpToThis(x: number, y: number): void {
    map[y][x] = new MonsterRight();
  }
  update(x: number, y: number): void {
    map[y][x - 1].moveLeftToThis(x, y);
  }
  gameover(): void {
    gameOver = true;
  }
  explode(x: number, y: number, type: Tile): void {
    map[y][x] = type;
  }
  move(x: number, y: number): void {
    
  }
}

interface Input {
  move(): void;
}

class Up implements Input {
  move(): void {
    move(0, -1);
  }
}

class Down implements Input {
  move(): void {
    move(0, 1);
  }
}

class Left implements Input {
  move(): void {
    move(-1, 0);
  }
}

class Right implements Input {
  move(): void {
    move(1, 0);
  }
}

class Place implements Input {
  move(): void {
    placeBomb();
  }
}

let playerx = 1;
let playery = 1;

let map: Tile[][] = [
  [new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable()],
  [new Unbreakable(), new Air(), new Air(), new Stone(), new Stone(), new Stone(), new Stone(), new Stone(), new Unbreakable()],
  [new Unbreakable(), new Air(), new Unbreakable(), new Stone(), new Unbreakable(), new Stone(), new Unbreakable(), new Stone(), new Unbreakable()],
  [new Unbreakable(), new Stone(), new Stone(), new Stone(), new Stone(), new Stone(), new Stone(), new Stone(), new Unbreakable()],
  [new Unbreakable(), new Stone(), new Unbreakable(), new Stone(), new Unbreakable(), new Stone(), new Unbreakable(), new Stone(), new Unbreakable()],
  [new Unbreakable(), new Stone(), new Stone(), new Stone(), new Stone(), new Air(), new Air(), new Air(), new Unbreakable()],
  [new Unbreakable(), new Stone(), new Unbreakable(), new Stone(), new Unbreakable(), new Air(), new Unbreakable(), new Air(), new Unbreakable()],
  [new Unbreakable(), new Stone(), new Stone(), new Stone(), new Stone(), new Air(), new Air(), new MonsterRight(), new Unbreakable()],
  [new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable(), new Unbreakable()],
];

let inputs: Input[] = [];

let delay = 0;
let bombs = 1;
let gameOver = false;

function explode(x: number, y: number, type: Tile) {
  type.explode(x, y, type);
}

function move(x: number, y: number) {
  map[playery + y][playerx + x].move(x, y);
}

function placeBomb() {
  if (bombs > 0) {
    map[playery][playerx] = new Bomb();
    bombs--;
  }
}

function update() {
  while (!gameOver && inputs.length > 0) {
    let current = inputs.pop();
    current.move();
  }

  map[playery][playerx].gameover();

  initDelay();

  for (let y = 1; y < map.length; y++) {
    for (let x = 1; x < map[y].length; x++) {
      map[y][x].update(x, y);
    }
  }
}

function initDelay() {
  if (--delay > 0) return;
  delay = DELAY;
}

function draw() {
  let canvas = <HTMLCanvasElement>document.getElementById("GameCanvas");
  let g = canvas.getContext("2d");

  g.clearRect(0, 0, canvas.width, canvas.height);

  // Draw map
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].colorCode != null)
        g.fillStyle = map[y][x].colorCode;

      map[y][x].fillRect(x, y, g);
    }
  }

  // Draw player
  drawPlayer(g);
}

function drawPlayer(g: CanvasRenderingContext2D) {  
  if (!gameOver) {    
    g.fillStyle = "#00ff00";  
    g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  gameLoop();
};

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", (e) => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
  else if (e.key === " ") inputs.push(new Place());
});
