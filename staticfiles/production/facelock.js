"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") { return Array.from(iter); } }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var categories = ["overview", "authorize", "authorize", "request", "contacts"];
start.style.display = "block";

function undisplay() {
  var images = _toConsumableArray(slides.children);

  var _a = images;

  var _f = function _f(image) {
    return image.style.display = "none";
  };

  for (var _i = 0; _i < _a.length; _i++) {
    _f(_a[_i], _i, _a);
  }

  undefined;
}

slides.addEventListener("click", function (event) {
  var x_back = event.offsetX > 24 && event.offsetX < 323;
  var y_back = event.offsetY > 510 && event.offsetY < 565;

  if (x_back && y_back) {
    if (event.target.id == "start") {
      undisplay();
      overview.style.display = "block";
    } else if (event.target.id == "overview") {
      undisplay();
      start.style.display = "block";
    } else {
      undisplay();
      overview.style.display = "block";
    }
  }

  var x_contacts = event.offsetX > 24 && event.offsetX < 323;
  var y_contacts = event.offsetY > 455 && event.offsetY < 495;

  if (x_contacts && y_contacts && event.target.id == "overview") {
    undisplay();
    contacts.style.display = "block";
  }

  var x_request = event.offsetX > 24 && event.offsetX < 323;
  var y_reqest = event.offsetY > 406 && event.offsetY < 440;

  if (x_request && y_reqest && event.target.id == "overview") {
    undisplay();
    request.style.display = "block";
  }

  var x_authorize = event.offsetX > 24 && event.offsetX < 323;
  var y_authorize = event.offsetY > 353 && event.offsetY < 390;

  if (x_authorize && y_authorize && event.target.id == "overview") {
    undisplay();
    authorize.style.display = "block";
  }
});
slides.addEventListener("mousemove", function (event) {
  var x = event.offsetX > 24 && event.offsetX < 323;
  var y = event.offsetY > 510 && event.offsetY < 565;
  var x_contacts = event.offsetX > 24 && event.offsetX < 323;
  var y_contacts = event.offsetY > 455 && event.offsetY < 495;
  imgx.innerHTML = event.offsetX;
  imgy.innerHTML = event.offsetY;

  if (x && y || x_contacts && y_back) {
    event.currentTarget.style.cursor = "pointer";
  } else {
    event.currentTarget.style.cursor = "default";
  }
});