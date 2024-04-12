---
title: Dashboard
layout: ../../../layouts/example.astro
summary: Full page example of a dashboard for a web application.
skellyCSS: true
chartist: true
---
<style>
body {
  background-color: var(--light);
}
</style>

<link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css">
<script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js" is:inline></script>

<div class="px-4 py-3">
  <h1 class="text--center text--white my-3">
    Dashboard
  </h1>
  <div class="block-container cards blocks px-2 pb-3">
    <div class="block tablet-up-6 laptop-up-3 desktop-up-2">
      <div class="card rounded-2">
        <div class="card__content">
          <h2>Headline</h2>  
          <p class="skeleton mt-3" data-lines="3" data-animation="true"></p>
          <p class="skeleton" data-lines="5" data-animation="true"></p>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-6 desktop-up-8">
      <div class="card rounded-2">
        <div class="card__content h-100">
          <div class="card__header mb-0">
            <div class="card__group">
              <i class="pi-chart-line-up"></i>
              <h2 class="card__title text--light">Your Daily Graph</h2>
            </div>
          </div>
          <div class="ct-chart h-75 mt-4"></div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-3 desktop-up-2">
      <div class="card rounded-2">
        <div class="card__content h-100">
          <div  class="card__header">
            <div class="card__group">
              <i class="pi-chart-line-up"></i>
              <h2 class="card__title text--light">Your Daily Graph</h2>
            </div>
          </div>
          <div class="horizontal-bar-chart h-100"></div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-2">
        <div class="card__content h-100">
          <div class="card__header mb-0">
            <div class="card__group">
              <i class="pi-chart-pie"></i>
              <h2 class="card__title text--light">This chart</h2>
            </div>
          </div>
          <div class="pie-chart h-100"></div>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-2">
        <div class="card__content">
          <div class="card__header">
            <div class="card__group">
              <i class="pi-file-cabinet"></i>
              <h2 class="card__title text--light">Daily post</h2>
            </div>
          </div>
          <img class="skeleton-image skeleton-image--md mb-2">
          <p class="skeleton" data-lines="3" data-animation="true"></p>
          <p class="skeleton" data-lines="2" data-animation="true"></p>
        </div>
      </div>
    </div>
    <div class="block tablet-up-6 laptop-up-4 desktop-up-2">
      <div class="card rounded-2">
        <div class="card__content h-100">
          <div class="card__header mb-0">
            <div class="card__group">
              <i class="pi-chart-pie"></i>
              <h2 class="card__title text--light">that chart</h2>
            </div>
          </div>
          <div class="donut-chart h-100"></div>
        </div>
      </div>
    </div>
    <div class="block desktop-up-6">
      <div class="card rounded-2 text--light">
        <div class="card__content">
          <div class="card__header">
            <div class="card__group">
              <i class="pi-rocket"></i>
              <h2 class="card__title text--light">Status Messages</h2>
            </div>
          </div>
          <strong class="">System A</strong>
          <div class="message message--error">
            <p class="skeleton" data-opacity="0.2" data-color="tomato"></p>
          </div>
          <strong class="">System B</strong>
          <div class="message message--success">
            <p class="skeleton" data-lines="2" data-opacity="0.2" data-color="green"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>

  new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
      [1, 2, 3, 1, -2, 0, 1, 0],
      [-2, -1, -2, -1, -2.5, -1, -2, -1],
      [0, 0, 0, 1, 2, 2.5, 2, 1],
      [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
    ]
  }, {
    high: 3,
    low: -3,
    showArea: true,
    showLine: false,
    showPoint: false,
    fullWidth: true,
    axisX: {
      showLabel: false,
      showGrid: false
    }
  });

  new Chartist.Bar('.horizontal-bar-chart', {
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    series: [
      [5, 4, 3, 5, 5, 2, 3],
      [3, 2, 1, 5, 4, 6, 4]
    ]
  }, {
    seriesBarDistance: 10,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 70
    }
  });

  var data = {
    series: [5, 3, 4]
  };
  
  var sum = function(a, b) { return a + b };
  
  new Chartist.Pie('.pie-chart', data, {
    labelInterpolationFnc: function(value) {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
  });

  new Chartist.Pie('.donut-chart', {
    series: [20, 10, 30, 40]
  }, {
    donut: true,
    donutWidth: 60,
    donutSolid: true,
    startAngle: 270,
    showLabel: true
  });
  
</script>

<script src="https://cdn.jsdelivr.net/npm/@ritterim/skellycss/dist/skelly.js"></script>