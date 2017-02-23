console.log('\'Allo \'Allo!');

(function() {
  // Load Font Awesome script avoid block render
  var css = document.createElement('link');
  
  css.href = '//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(css);
})();
