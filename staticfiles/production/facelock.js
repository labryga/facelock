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
  var x_width = event.offsetX > 24 && event.offsetX < 323;
  var target_overview = event.target.id == "overview";
  var y_back = event.offsetY > 510 && event.offsetY < 565;

  if (x_width && y_back) {
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

  var y_contacts = event.offsetY > 455 && event.offsetY < 495;

  if (x_width && y_contacts && target_overview) {
    undisplay();
    contacts.style.display = "block";
  }

  var y_reqest = event.offsetY > 406 && event.offsetY < 440;

  if (x_width && y_reqest && target_overview) {
    undisplay();
    request.style.display = "block";
  }

  var y_authorize = event.offsetY > 300 && event.offsetY < 340;

  if (x_width && y_authorize && target_overview) {
    undisplay();
    authorize.style.display = "block";
  }

  var y_authenticate = event.offsetY > 355 && event.offsetY < 390;

  if (x_width && y_authenticate && target_overview) {
    undisplay();
    authenticate.style.display = "block";
  }
});
slides.addEventListener("mousemove", function (event) {
  var x = event.offsetX > 24 && event.offsetX < 323;
  var y = event.offsetY > 510 && event.offsetY < 565;
  var x_contacts = event.offsetX > 24 && event.offsetX < 323;
  var y_contacts = event.offsetY > 455 && event.offsetY < 495;

  if (x && y || x_contacts && y_back) {
    event.currentTarget.style.cursor = "pointer";
  } else {
    event.currentTarget.style.cursor = "default";
  }
});