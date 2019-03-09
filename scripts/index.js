'use strict';

function handleScrollToProjects() {
  $('#projects-link').click(event => {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('#project-1').offset().top - 100
    }, 750);
  });
}

$(function() {
  handleScrollToProjects();
});
