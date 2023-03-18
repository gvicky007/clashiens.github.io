function showElementOnClick(buttonSelector, elementSelector) {
    $(document).ready(function() {
      $(buttonSelector).click(function() {
        var target = $(this).data('target');
        if (target === '#i1') { // if "All" button is clicked
          $(elementSelector).show(); // show all elements
        } else {
          $(elementSelector).not(target).hide(); // hide all elements except the target
          $(target).show(); // show the target element
        }
      });
    });
  }