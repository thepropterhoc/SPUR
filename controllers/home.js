/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.example = function(req, res) {
  res.render('example', {
    title: 'Example'
  });
};