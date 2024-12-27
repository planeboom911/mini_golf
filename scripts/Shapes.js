let Shape = {
  circle: Shape__circle,
  new: Shape__new,
  polygon: Shape__polygon
}

function Shape__new(path = undefined) {
  return (new Path2D(path))
}

function Shape__circle(x, y, radius, prevPath = undefined) {
  let path = prevPath ?? Shape__new();
  path.arc(x, y, radius, 0, 2 * Math.PI);
  return path;
}

function Shape__line(x1, y1, x2, y2, prevPath = undefined) {
  let path = prevPath ?? Shape__new();
  path.moveTo(x1, y1);
  path.lineTo(x2, y2);
  return path;
}

function Shape__polygon(x1, y1, linePoints, closePath = true, prevPath = undefined) {
  let path = Shape__new();
  path.moveTo(x1, y1);
  linePoints.forEach(([x, y]) => {
    path.lineTo(x, y);
  })
  if ( closePath ) {
    path.closePath()
  }
  return path;
}