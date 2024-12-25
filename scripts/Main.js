
let Projectile = {
  x: -1,
  y: -1,
  velX: 0,
  velY: 0,
  maxVel: 30,
  maxVelX: Math.sqrt(30*30 *2),
  maxVelY: Math.sqrt(30*30 *2)
}

let Physics = {
  delta: 0
}

Canvas.elem.addEventListener('mousemove', function(e) {
  if (!Mouse.primary) return;
  let x = e.pageX - Canvas.elem.offsetLeft
  let y = e.pageY - Canvas.elem.offsetTop

  let rX = (x - Projectile.x) * 0.8
  let rY = (y - Projectile.y) * 0.8

  Projectile.velX = Math.max(Math.min(Projectile.maxVelX, rX), -Projectile.maxVelX)
  Projectile.velY = Math.max(Math.min(Projectile.maxVelY, rY), -Projectile.maxVelY)

})

Canvas.elem.addEventListener('mousedown', function(e) {
  Projectile.x = e.pageX - Canvas.elem.offsetLeft
  Projectile.y = e.pageY - Canvas.elem.offsetTop
  Projectile.velX = 0
  Projectile.velY = 0
})

let Game = {
  prevTick: undefined,
  particleSpeed: 10,
  
}

function Gameloop(tick) {
  let delta;
  if ( Game.prevTick !== undefined) {
    delta = tick - Game.prevTick;
  }
  Game.prevTick = tick;

  Canvas.clear()

  if ( Mouse.primary ) {
    let line = Shape.new();
    line.moveTo(Projectile.x, Projectile.y)
    line.lineTo(Projectile.x + Projectile.velX, Projectile.y + Projectile.velY);
    Canvas.stroke(line, 'black', 2)
  }

  requestAnimationFrame(Gameloop)
}

requestAnimationFrame(Gameloop)