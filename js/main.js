(() => {
	console.log("ready");

	let draggableImages = document.querySelectorAll('#mainContent img');

	// set up the drag events and then dragover and drop
	
	function initDrag() {
		draggableImages.forEach(img => {
			img.addEventListener("dragstart", function(e)) {
				console.log("draggin...")
				e.dataTransfer.setData("text/plain", this.id)
			}
		});
	};
	
})();
