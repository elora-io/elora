// Look in ./config folder for webpack.dev.js
var webpack = require('./config/webpack.prod.js');

var config = {
	module: {

    loaders: [
    	{
		  test: /\.(jpe?g|png|jpg|gif|svg)$/i,
		  loader:'file'
		}
    ]
  }
}