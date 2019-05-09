module.exports = {
	entry: './src/js/block.js',
	output: {
		path: __dirname,
		filename: 'dist/block.build.js',
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