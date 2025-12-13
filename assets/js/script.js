'use strict';

$(function () {
  // Typing animation
  $('#headingTyping').typed({
    strings: [
      'a Senior Full Stack Engineer',
      'a MERN Stack Specialist',
      'a Cross-Platform Engineer',
      'a Cloud and DevOps Practitioner',
      'a Performance-Driven Engineer',
      'an Engineering Graduate',
    ],
    loop: true,
    startDelay: 1000,
    backDelay: 3000,
  });

  // Scroll to section
  $('.scrollBtn').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    const section = $(this).data('section');
    const $target = $('.' + section);
    if ($target.length) {
      $('html, body').animate(
        {
          scrollTop: $target.offset().top - 100,
        },
        600
      );
    }
  });

  // Header nav sticky toggle on scroll
  $(window).on('scroll', function () {
    const $navbar = $('#header-section').find('.navbar');
    const top = $(this).scrollTop();
    if (top > 500) {
      $navbar.removeClass('bg-transparent').addClass('bg-sticky');
    } else {
      $navbar.removeClass('bg-sticky').addClass('bg-transparent');
    }
  });

  // Open hire modal
  $('#hireMe').on('click', function () {
    $('#hireMeModal').modal('show');
  });

  // Project filter logic - deduplicated and refactored
  const $filterContainer = $('#project-filters');
  const $filterButtons = $filterContainer.find('.filter-btn');
  const $projectList = $('#project-list');
  const $projectItems = $projectList.find('.project-item');

  // Function to filter projects
  function filterProjects(filterValue) {
    $projectItems.each(function () {
      const $item = $(this);
      const categories = ($item.data('category') || '').split(' ');
      if (filterValue === 'all' || categories.includes(filterValue)) {
        // Show with fade in effect
        $item.css('display', 'block');
        $item.css('opacity', 0);
        setTimeout(() => $item.css('opacity', 1), 100);
      } else {
        $item.css('display', 'none');
      }
    });
  }

  // Add smooth animations for filtered items (set once)
  $projectItems.css('transition', 'opacity 0.3s ease, transform 0.3s ease');

  // Project filter button click
  $filterButtons.on('click', function () {
    $filterButtons.removeClass('active');
    $(this).addClass('active');
    const filterValue = $(this).data('filter');
    filterProjects(filterValue);
  });

  // Optional: initialize filter to show all on page ready
  filterProjects('all');

  // Make nav .active based on click
  const $navLinks = $('.navbar-nav .nav-link.scrollBtn');
  $navLinks.on('click', function () {
    $navLinks.removeClass('active');
    $(this).addClass('active');
  });
});
