(() => {
	// Set up button variables
	const buttons = ["cUp", "cDown", "cLeft", "cRight", "lTrigger", "rTrigger", "aButton", "bButton"];

	let playField = document.querySelector("#playField"),
		noteField = document.querySelector("#noteField"),
		buttonSelector = document.querySelectorAll("#buttonHolder img");

	// Functions go in the middle
	function createButtons(pictureIndex) {
		// generate buttons
		button.forEach((button, index) => {
			let newPuzzlePiece = `<img id="button${index}" class="button-image" src="images/${button + pictureIndex}.jpg" alt="thumbnail">`;

			playField.innerHTML += newButton;
		});
		
	}

	function resetButtons() {
		// empty the thumbnail container
		noteField.innerHTML = ""
		createButtons(this.dataset.buttonRef)
	}

	// Event handling down here
	buttonSelector.forEach(button => button.addEventListener("click", resetButtons));

	createButtons(0);

})();
