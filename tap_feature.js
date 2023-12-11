document.addEventListener("DOMContentLoaded", function () {
    const taps_container = document.querySelector("#taps_container");
    const taps = document.querySelectorAll('[data-id^="tap_"]');
    const tap_contents = document.querySelectorAll(".tap-content");

    /*
    * This side of the script contains the taps functionality
    **/

    taps_container.addEventListener("click", (event) => {
      console.log('tap clicked')
      let clickedTap = event.target.closest('[data-id^="tap_"]');

      if (clickedTap) {
        // Remove 'active' class from all taps
        taps.forEach((tap) => {
          tap.classList.remove("active");
        });

        // Add 'active' class to the clicked tap
        clickedTap.classList.add("active");

        // Hide all tap contents
        tap_contents.forEach((content) => {
          content.classList.add("hidden");
        });

        // Show the corresponding tap content
        const contentId = clickedTap.getAttribute("data-id");
        const contentToShow = document.getElementById(contentId);
        if (contentToShow) {
          contentToShow.classList.remove("hidden");
        }
      }
    });
  });