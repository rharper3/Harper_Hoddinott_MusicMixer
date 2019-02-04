(() => {

	// Variables always come first 
	// set up the puzzle pieces and boards
	const buttons = ["cUp", "cDown", "cLeft", "cRight", "lTrigger", "rTrigger", "aButton", "bButton"];

	let playField = document.querySelector("#playField"),
		noteField = document.querySelector("#noteField"),
		buttonSelector = document.querySelectorAll("#buttonHolder img");

	// Functions go in the middle
	function createButtons(pictureIndex) {
		// generate puzzle pieces for the left hand side
		button.forEach((button, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

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
