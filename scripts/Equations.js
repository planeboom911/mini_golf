/* ========== Physics equations in code ========== */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * max + min)
}

function getTangentPoints(px, py, cx, cy, r) {
  px -= cx
  py -= cy
  let r2 = r*r
  let r4 = r2*r2
  let px2 = px * px
  let py2 = py * py

  if ( px2 + py2 < r2 ) {
    return
  }

  let a = px2 + py2
  let b = -2*r2*px
  let c = r4 - r2*py2
  let d = b*b-4*a*c
  
  if ( d < 0 ) {
    return
  }

  d = Math.sqrt(d)
  let xx1 = (-b - d) / (2*a)
  let xx2 = (-b + d) / (2*a)

  if (Math.abs(py) > 1.0e-8) {
    yy1 = (r2 - px * xx1) / py
    yy2 = (r2 - px * xx2) / py
  } else {
    yy1 = Math.sqrt(r2 - xx1*xx1)
    yy2 = -yy1
  }

  let t1 = {x: xx1 + cx, y: yy1 + cy}
  let t2 = {x: xx2 + cx, y:yy2 + cy}
  return [t1, t2]
}