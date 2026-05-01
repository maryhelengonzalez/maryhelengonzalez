// FADE-IN SECTIONS

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, { threshold: 0.2 });

sections.forEach(section => {

  observer.observe(section);

});

// PROGRESS BAR

window.onscroll = () => {

  let winScroll = document.documentElement.scrollTop;

  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrolled = (winScroll / height) * 100;

  document.getElementById("progress").style.width = scrolled + "%";

};

// CHART.JS

const ctx = document.getElementById('myChart');

new Chart(ctx, {

  type: 'bar',

  data: {

    labels: ['Python', 'JavaScript', 'React', 'Docker'],

    datasets: [{

      label: 'Skill Level',

      data: [90, 85, 80, 75],

      borderWidth: 1

    }]

  }

});
