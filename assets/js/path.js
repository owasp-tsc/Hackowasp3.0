// $(window).ready(function () {
//   var quantity = 80, //number of dots
//     duration = 3, //duration (in seconds)
//     path = [
//       { x: 1028, y: 210 },
//       { x: 500, y: 210 },
//       { x: 485, y: 210 },
//       { x: 485, y: 220 },
//       { x: 485, y: 300 },
//       { x: 485, y: 338 },
//       { x: 485, y: 340 },
//       { x: 505, y: 340 },
//       { x: 540, y: 340 },
//       { x: 590, y: 340 },
//       { x: 690, y: 340 },
//       { x: 890, y: 340 },
//       { x: 1010, y: 340 },
//       { x: 1024, y: 340 },
//       { x: 1024, y: 350 },
//       { x: 1024, y: 390 },
//       { x: 1024, y: 420 },
//       { x: 1024, y: 480 },
//       { x: 1024, y: 540 },
//       { x: 1024, y: 543 },
//       { x: 1010, y: 543 },
//       { x: 950, y: 545 },
//       { x: 900, y: 545 },
//       { x: 800, y: 545 },
//       { x: 700, y: 545 },
//       { x: 600, y: 545 },
//       { x: 500, y: 545 },
//       { x: 470, y: 545 },
//     ], //points on the path (BezierPlugin will plot a Bezier through these). Adjust however you please.
//     position = { x: path[0].x, y: [path[0].y] }, //tracks the current position, so we set it initially to the first node in the path. It's the target of the tween.
//     tween = TweenMax.to(position, quantity, {
//       bezier: path,
//       ease: Linear.easeNone,
//     }), //this does all the work of figuring out the positions over time.
//     tl = new TimelineMax({ repeat: 1, yoyo: false }), //we'll use a TimelineMax to schedule things. You can then have total control of playback. pause(), resume(), reverse(), whatever.
//     i,
//     dot;

//   //we can remove the first point on the path because the position is already there and we want to draw the Bezier from there through the other points
//   path.shift();

//   for (i = 0; i < quantity; i++) {
//     tween.time(i); //jumps to the appropriate time in the tween, causing position.x and position.y to be updated accordingly.
//     dot = $("<div />", { id: "dot" + i })
//       .addClass("dot")
//       .css({ left: position.x + "px", top: position.y + "px" })
//       .appendTo("body"); //create a new dot, add the .dot class, set the position, and add it to the body.
//     tl.set(dot, { visibility: "visible" }, i * (duration / quantity)); //toggle the visibility on at the appropriate time.
//   }
// });
