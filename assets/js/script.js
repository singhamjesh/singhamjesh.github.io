'use strict';

$(function () {
  /* Typing animation  */
  $('#headingTyping').typed({
    strings: ['Amjesh Singh', 'a Developer', 'a Designer'],
    loop: true,
    startDelay: 1e3,
    backDelay: 2e3,
  });

  /* Scroll on given section */
  $('.scrollBtn').click(function (e) {
    $('.navbar-collapse').collapse('hide');
    const section = $(this).data('section');
    $('html, body').animate({
      scrollTop: $(`.` + section).offset().top - 100,
    });
  });

  /* Header scroll nav design */
  $(window).scroll(function (e) {
    const navbar = $('#header-section').find('.navbar');
    const top = $(this).scrollTop();
    console.log(navbar);
    if (top > 500) {
      navbar.removeClass('bg-transparent');
      navbar.addClass('bg-sticky');
    } else {
      navbar.removeClass('bg-sticky');
      navbar.addClass('bg-transparent');
    }
  });

  /* Open hire modal */
  $('#hireMe').click(function (e) {
    $('#hireMeModal').modal('show');
  });

  // Optional: Highlight nav on scroll or click for user friendliness
  document.addEventListener('DOMContentLoaded', function () {
    // Make nav .active based on scroll position or click
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link.scrollBtn');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectItems.forEach((item) => {
          const categories = item.getAttribute('data-category').split(' ');

          if (filterValue === 'all' || categories.includes(filterValue)) {
            item.style.display = 'block';
            // Add fade-in animation
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.opacity = '1';
            }, 100);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Add smooth animations for filtered items
    projectItems.forEach((item) => {
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
  });
});
