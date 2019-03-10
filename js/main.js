(() => {
	console.log("ready");

	function playNotes(event) {
		//debugger;
		//select the corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		// maybe make some new audio to go with the theme

		if (!audio) {return; }

		//rewind audio on every push of the keys and make it play
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playNotes);
})();
