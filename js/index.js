'use strict';

// this is the declaration section of all main elements used
var tmax_options = {
  repeat: -1,
  yoyo: true
};
var treeTime = 1;
var treeTimeline = new TimelineMax(tmax_options);
var tween_options_to = {
  css: {
    transform: 'scale(0)',
    transformOrigin: 'center center'
  },
  ease: Cubic.easeInOut,
  force3D: true
};
var windowTime = new TimelineMax(tmax_options);
var moonPath = MorphSVGPlugin.pathDataToBezier("#moonPath", { align: "#moon" });
var no = { repeat: 0 };
var santa = new TimelineMax(no);
var moon = new TimelineMax(no);
var snow = new TimelineMax({ repeat: -1 });
// a few simple functions to help with posittioning
function santaPath() {
  return $(window).width();
}
function snowDrift() {
  return $(window).height();
}
function fontSize() {
  var path = santaPath() / 10;
  if (path > 185) {
    return 185;
  } else {
    return path;
  }
}
function centerText() {
  var minus = fontSize() / 1.8;
  return santaPath() / 4 - minus;
}
// +++++++++++ this is where all the magic starts to happen +++++++++
// this is to set the moon on the center of it's path
TweenMax.set($('#moon'), { xPercent: -50, yPercent: -50 });
// This is the begining of the santa text timeline.
santa.to($('.santa'), 10, { left: santaPath(), ease: Power0.easeNone, width: '20%', top: '20px' }).to($('.santa'), 2.5, { rotationY: "+=180", visibility: "hidden" }).to($('.santa'), 8, { left: -santaPath(), visibility: "visible", ease: Power0.easeNone, width: '32%', top: '30px' }).to($('.santa'), 1.5, { rotationY: "+=180", visibility: "hidden" }).to($('.santa'), 6, { left: santaPath(), visibility: "visible", ease: Power0.easeNone, width: '45%', top: '40px' }).to($('.santa'), 0.1, { display: "none" })
// this is the text part
.to($('#merry'), 2, { ease: Sine.easeOut, display: "block", left: centerText(), fontSize: fontSize() }).to($('#merry'), 0.5, { fontSize: '8px', opacity: '0', ease: Sine.easeOut }, '+=5');
// Tree timeline Loop === back and forth side to side
treeTimeline.to($('.red'), treeTime, { rotation: 10, transformOrigin: "50% 50%", ease: Power0.easeNone }, 0).to($('.green'), treeTime, { rotation: -8, transformOrigin: "50% 50%", ease: Power0.easeNone }, 0);
// set the moon on it's path
moon.to($('#moon'), 90, { bezier: { values: moonPath, type: "cubic" } });
// turns the light on in the house.
windowTime.to($('.windows'), 2.5, { fill: '#ffff99' }, '+=4');
// animates the snow fall
snow.to($('.snow'), 40, { ease: Power0.easeNone, top: "+=" + snowDrift() + "px", height: "100%" });
console.log('font-size: ' + fontSize());
console.log('center-text: ' + centerText());