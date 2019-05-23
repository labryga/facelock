let categories = ["overview", "authorize", "authorize", "request", "contacts"];
start.style.display = "block";

function undisplay() {
	let images = [...slides.children];
	images.forEach(image => image.style.display = "none");
}

slides.addEventListener("click", (event) => {
	let x_width = event.offsetX > 24 && event.offsetX < 323;
	let target_overview = event.target.id == "overview";

	let y_back = event.offsetY > 510 && event.offsetY < 565; 
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

	let y_contacts = event.offsetY > 455 && event.offsetY < 495; 
	if (x_width && y_contacts && target_overview) {
		undisplay();
		contacts.style.display = "block";
	}

	let y_reqest = event.offsetY > 406 && event.offsetY < 440; 
	if (x_width && y_reqest && target_overview) {
		undisplay();
		request.style.display = "block";
	}

	let y_authorize = event.offsetY > 300 && event.offsetY < 340; 
	if (x_width && y_authorize && target_overview) {
		undisplay();
		authorize.style.display = "block";
	}

	let y_authenticate = event.offsetY > 355 && event.offsetY < 390; 
	if (x_width && y_authenticate && target_overview) {
		undisplay();
		authenticate.style.display = "block";
	}

	});

slides.addEventListener("mousemove", (event) => {
	let x = event.offsetX > 24 && event.offsetX < 323;
	let y = event.offsetY > 510 && event.offsetY < 565; 
	let x_contacts = event.offsetX > 24 && event.offsetX < 323;
	let y_contacts = event.offsetY > 455 && event.offsetY < 495; 
	imgx.innerHTML = event.offsetX;
	imgy.innerHTML = event.offsetY;
	if ((x && y) || (x_contacts && y_back)) {
		event.currentTarget.style.cursor = "pointer";
	}else {
		event.currentTarget.style.cursor = "default";
	}});
