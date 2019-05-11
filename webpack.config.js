module.exports = {
	entry: {
    	block: './src/js/block.js',
    	dino: './src/js/Dino.js'
  	},
	output: {
    	filename: '[name].build.js',
    	path: __dirname + '/dist'
  	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				
			},
			{
		        test: /\.(png|jpe?g|gif)$/,
		        use: [
		        	{
		            	loader: 'file-loader',
		            	options: {},
		        	},
		    	],
		    }
		],
	},
};