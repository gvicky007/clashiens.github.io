          $(document).ready(function(t) {
            $(".t").on("click touchstart", function() {
              var elem = this;
              if (elem.requestFullscreen) {
                if (!document.fullscreenElement) {
                  // Make the element full screen
                  elem.requestFullscreen();
                  // Use screen.width and screen.height to get the screen size
                  // Set the element's width and height to 60% of the screen size
                  elem.style.width = screen.width * 0.6 + "px";
                  elem.style.height = screen.height * 0.6 + "px";
                } else {
                  // Exit full screen
                  document.exitFullscreen();
                  // Reset the element's width and height to their original values
                  elem.style.width = "";
                  elem.style.height = "";
                }
              }
            });
          });
       