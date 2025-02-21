const adVideo = document.getElementById('adVideo');
        const actionButton = document.getElementById('actionButton');

        // Add an event listener to the video element to detect when it ends
        adVideo.addEventListener('ended', function() {
            // Enable the button when the ad finishes
            actionButton.disabled = false;
            actionButton.style.backgroundColor = "green"
        });