module.exports = {
	entry: './block.js',
	output: {
		path: __dirname,
		filename: 'block.build.js',
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