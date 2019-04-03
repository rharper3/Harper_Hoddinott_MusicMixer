(() => {
	console.log("ready");

	let draggableImages = document.querySelectorAll('#mainContent img'),
		dropZones = document.querySelectorAll(".drop-zone");


	// set up the drag events and then dragover and drop
	
	function initDrag() {
		draggableImages.forEach(img => {
			img.addEventListener("dragstart", function(e) {
				console.log("draggin...")
				e.dataTransfer.setData("text/plain", this.id)
			})
		});
	};

	dropZones.forEach(zone => { // dropZone SHOULD BE dropZones (SEE LET STATEMENT ABOVE)
		// add drag event handling
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("you dragged over me!");
		});

		// add drop event handling
		zone.addEventListener("drop", function(e) {
			e.preventDefault();

			console.log("you dropped sumpin on me");

			//dont drop if theres aready something here

			if (e.target.nodeName.toLowerCase() == "img" || e.target.children.length > 0) {
				return;
			}

			let piece = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));

			// get a reference to the data track
			let newAudioSource = e.currentTarget.firstElementChild.dataset.track;

			// create a new audio element
			// set the source
			// load it 
			// play it
			
			let sound = document.createElement("audio");
				sound.src = newAudioSource;

				sound.load();
				sound.play();
		});
	});



	initDrag()
	
})();
