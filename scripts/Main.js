


Canvas.elem.addEventListener('mousemove', function(e) {
  
  MouseMoveEvent.forEach(async func => {
    func(e);
  })

})

Canvas.elem.addEventListener('mousedown', function(e) {

  MouseDownEvent.forEach(async func => {
    func(e);
  })

})

Canvas.elem.addEventListener('mouseup', function(e) {

  MouseUpEvent.forEach(async func => {
    func(e);
  })

})

let Game = {
  prevTick: undefined,
  particleSpeed: 10,
  prevDelta: 1,
  time: 0
}

function Gameloop(tick) {

  let delta = 1;
  let tickDiff = (tick - (Game.prevTick ?? 0))
  if ( Game.prevTick !== undefined) {
    delta = Game.prevDelta == 1 ? tick : tickDiff / delta
  }

  delta = delta / 1000

  Game.prevDelta = delta
  Game.prevTick = tick;

  Physics.forEach(physicsFunc => {
    physicsFunc(delta)
  })

  Canvas.clear()
  Drawables.forEach(drawFunc => {
    drawFunc();
  })
  
  requestAnimationFrame(Gameloop)
}



// Start the game right away
setTimeout(async () => {
  await Level__init();
  requestAnimationFrame(Gameloop);
})