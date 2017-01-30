var JSX = require('node-jsx').install(),
  React = require('react'),
  carouselQApp = React.createFactory(require('./components/carouselQApp.react'))
  //Tweet = require('./models/Tweet');

module.exports = {

  index: function(req, res) {
    // Call static model method to get tweets in the db
    

      // Render React to a string, passing in our fetched tweets
      var markup = React.renderToString(
        carouselQApp()
      );

      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        // Pass current state to client side - cuttaði það út
      });
  }

  //page: function(req, res) {
  //  // Fetch tweets by page via param
  //  Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
//
  //    // Render as JSON
  //    res.send(tweets);
//
  //  });
  //}

}
