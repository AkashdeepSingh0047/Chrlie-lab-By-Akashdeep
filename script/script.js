document.addEventListener("DOMContentLoaded", function () {
    // Variable to store the initial background color
    var initialBackgroundColor = getComputedStyle(document.body).background;

    // Function to handle image drag start
    function drag(event) {
        event.preventDefault();
        event.dataTransfer.setData("text", event.target.alt);

        // Change background color based on the dragged image
        var draggedImage = event.target;

        switch (draggedImage.alt) {
            case 'Left Image':
                document.body.style.background = 'linear-gradient(to bottom, #ff7e5f, #feb47b)';
                break;
            case 'Right Image':
                document.body.style.background = 'linear-gradient(to bottom, #5f97ff, #7bafff)';
                break;
            // Add more cases for additional images if needed
        }

        // Change H1 font when an image is dragged
        document.querySelector("h1").style.fontFamily = "Arial, sans-serif";

        // Change font to Castellar when the background color is changed
        if (getComputedStyle(document.body).background !== initialBackgroundColor) {
            document.querySelector("h1").style.fontFamily = "Castellar, 'Bodoni MT Black', sans-serif";
        }

        // Display the magic message when an image is dragged
        document.querySelector("#magicMessage").textContent = "WOW! Magic by Akashdeep Singh";

        // Check if background color has been changed from the initial setting
        if (getComputedStyle(document.body).background !== initialBackgroundColor) {
            // Show the reset button
            document.querySelector(".resetButton").style.display = "block";
        } else {
            // Hide the reset button
            document.querySelector(".resetButton").style.display = "none";
        }

        console.log("Image dragged: " + draggedImage.alt);
    }

    // Function to handle container drag over
    function allowDrop(event) {
        event.preventDefault();
    }

    // Add event listeners to the container
    var container = document.getElementById("container");
    container.addEventListener("dragover", allowDrop);
    container.addEventListener("dragstart", drag);

    // Function to reset background color, H1 font, and magic message
    function resetStyles() {
        // Reset background color and H1 font
        document.body.style.background = initialBackgroundColor;
        document.querySelector("h1").style.fontFamily = "'Bodoni MT Black', sans-serif";

        // Reset the magic message
        document.querySelector("#magicMessage").textContent = "";

        // Hide the reset button after reset
        document.querySelector(".resetButton").style.display = "none";

        console.log("Background color, H1 font, and magic message reset");
    }

    // Add event listener to the reset button
    var resetButton = document.querySelector(".resetButton");
    resetButton.addEventListener("click", resetStyles);

    // Initially hide the reset button
    resetButton.style.display = "none";
});
