(function () {
  var screens = document.querySelectorAll('.screen');
  var navBtns = document.querySelectorAll('.nav-btn');
  var history = ['music'];

  function show(name) {
    screens.forEach(function (s) {
      s.classList.toggle('active', s.dataset.screen === name);
    });
    navBtns.forEach(function (b) {
      b.classList.toggle('active', b.dataset.go === name);
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', name === 'track' ? '#f4e8d4' : '#ffffff');
    if (history[history.length - 1] !== name) history.push(name);
  }

  navBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var name = b.dataset.go;
      if (name === 'home' || name === 'profile') {
        show('music');
      } else {
        show(name);
      }
    });
  });

  document.querySelectorAll('[data-go="track"]').forEach(function (el) {
    el.addEventListener('click', function () { show('track'); });
  });

  document.querySelectorAll('[data-back]').forEach(function (el) {
    el.addEventListener('click', function () {
      history.pop();
      show(history[history.length - 1] || 'music');
    });
  });

  document.querySelectorAll('.primary-tabs .tab-btn, .sub-tabs .tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var siblings = btn.parentElement.querySelectorAll('.tab-btn');
      siblings.forEach(function (s) { s.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
})();
