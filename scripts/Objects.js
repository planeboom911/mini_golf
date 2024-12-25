
let Shape = {
  circle: Shape__circle,
  new: Shape__new
}

function Shape__circle(x, y, radius, prevPath = undefined) {
  let path = prevPath ?? (new Path2D());
  path.arc(x, y, radius, 0, 2 * Math.PI);
  return path;
}

function Shape__new(path = undefined) {
  return (new Path2D(path))
}