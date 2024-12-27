
/* ========== GolfBall object ========== */
let GolfBall = {
  x: 300,
  y: 250,
  r: 30,
  eX: 0,
  eY: 0,
  tX: -1,
  tY: -1,
  tX2: -1,
  tY2: -1,
  velX: 0,
  velY: 0,
  speed: 1000,
  holding: false,
  shouldMove: false
}

/* ========== GolfBall draw ========== */
function GolfBall__draw() {
  let golfBallOuter = Shape.circle(GolfBall.x, GolfBall.y, GolfBall.r)
  let golfBallInner = Shape.circle(GolfBall.x, GolfBall.y, 0.6 * GolfBall.r)
  if ( GolfBall.holding && Mouse.primary ) {
    let line = Shape.polygon(
      GolfBall.tX, GolfBall.tY,
      [
        [GolfBall.eX, GolfBall.eY],
        [GolfBall.tX2, GolfBall.tY2],
      ]
    );
    Canvas.fill(line, 'black')
  }
  Canvas.fill(golfBallOuter, 'black')
  Canvas.fill(golfBallInner, 'white')
}

Drawables.push(GolfBall__draw)

/* ========== GolfBall physics ========== */
function GolfBall__physics(delta) {
  if ( !GolfBall.shouldMove ) return;

  GolfBall.x += GolfBall.velX * GolfBall.speed * delta
  GolfBall.y += GolfBall.velY * GolfBall.speed * delta
}

Physics.push(GolfBall__physics);

/* ========== GolfBall events ========== */
function GolfBall__init() {
  GolfBall.tX = -1
  GolfBall.tY = -1
  GolfBall.tX2 = -1
  GolfBall.tY2 = -1
}

function GolfBall__drag(e) {
  if (!Mouse.primary) return;
  let [cx, cy] = [GolfBall.x, GolfBall.y]
  let [px, py] = [e.pageX - Canvas.elem.offsetLeft, e.pageY - Canvas.elem.offsetTop]
  
  let r = GolfBall.r
  let rX = px - cx
  let rY = py - cy
  let d = (rX*rX + rY*rY)

  if ( d > 200*200 || d <= r*r ) {
    return;
  }

  let tP = getTangentPoints(px, py, cx, cy, r)
  if ( tP === undefined ) return
  
  GolfBall.eX = px
  GolfBall.eY = py
  GolfBall.tX = tP[0].x
  GolfBall.tY = tP[0].y
  GolfBall.tX2 = tP[1].x
  GolfBall.tY2 = tP[1].y
  GolfBall.holding = true
}

function GolfBall__shouldMove() {
  let [cx, cy] = [GolfBall.x, GolfBall.y]
  let [px, py] = [GolfBall.eX, GolfBall.eY]

  let rX = cx - px
  let rY = cy - py
  let r = GolfBall.maxVel

  if ( rX * rX + rY * rY <= r*r) {
    return
  }

  let velUnit = Math.sqrt(rX * rX + rY * rY)

  GolfBall.velX = (cx - px) / velUnit
  GolfBall.velY = (cy - py) / velUnit
  GolfBall.holding = false
  GolfBall.shouldMove = true
}

// init on mouse down
MouseDownEvent.push(GolfBall__init)
// Draggable on mouse movement
MouseMoveEvent.push(GolfBall__drag)
// Move ball when mouse released
MouseUpEvent.push(GolfBall__shouldMove)