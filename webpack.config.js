var webpack=require('webpack');
var path=require('path');
var hotMiddlewareScript='webpack-hot-middleware/client?reload=true';
var config={
	entry:['./main.js',hotMiddlewareScript],
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'index.js',
		publicPath:'/'
	},
	devServer:{
		inline:true,
		hot:true,
		port:7777
	},
	plugins:[
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoEmitOnErrorsPlugin()
	],
	resolve: {
	  extensions:[".js",".jsx",".json"]
	},
	module:{
		loaders:[{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			loader:'babel-loader',
			query:{
				presets:['es2015','react','react-hmre']
				// ,env:{
				// 	development:{
				// 		presets:['react-hmre']
				// 	}
				// }
			}
		},
		{
	        test: /\.css$/,
	        loader: "style-loader!css-loader?modules!postcss-loader"
	      }

		]
	}
}


module.exports=config;