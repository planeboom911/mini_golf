
let Mouse = {
  secondary: false,
  primary: false,
  x: -1,
  y: -1
}

function Mouse__set_button_state(e) {
  let flags = e.buttons !== undefined ? e.buttons : e.which;
  Mouse.primary = (flags & 1) === 1;
}

document.addEventListener("mousedown", Mouse__set_button_state);
document.addEventListener("mousemove", Mouse__set_button_state);
document.addEventListener("mouseup", Mouse__set_button_state);