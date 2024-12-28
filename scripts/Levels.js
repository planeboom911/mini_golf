
/**
 * Syntax : [
 *   {
 *     golfX: 0, golfY: 0, // <-- coordinate of golfBall
 *     walls: [
 *       [Polygon_points...]
 *     ]
 *   }
 * ]
 */
/* ========== Levels for the game ========== */
let Levels = [
  // Level 1
  {
    golfPos: [100, 100],
    holePos: [300, 250],
    walls: [
      [[298, 0], [640, 200], [1005, 200], [1005, 6]],
      [[131, 604], [332, 351], [1005, 348], [1005, 604]],
    ]
  }
]