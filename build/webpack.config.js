const os = require( 'os' );
const path = require( 'path' );
const webpack = require( 'webpack' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = ( _, argv ) => {

	const dir = argv.mode === 'development' ? './' : '';

	const config = {
		entry: {
			[ `${ dir }/assets/js/script` ]: path.resolve( __dirname, '../assets/js/src/index.js' ),
			[ `${ dir }/assets/css/style` ]: path.resolve( __dirname, '../assets/css/src/index.scss' ),
		},
		output: {
			path: path.resolve( __dirname, '../' ),
			filename: '[name].js',
		},
		target: 'web',
		module: {
			rules: [
				{
					test: /\.(js)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
						}
					]
				},

				{
					test: /\.(css|scss)$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
							options: {
								url: false,
								// sourceMap: true,
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: require( './postcss.config' ),
							},
						},
						{
							loader: 'sass-loader',
							options: {
								implementation: require( 'sass' ),
							},
						},
					],
				},
			],
		},

		resolve: {
			modules: [ 'node_modules' ],
			extensions: [ '.js', '.scss' ],
		},

		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					extractComments: false,
				}),
			],
		},

		devServer: {
			host: os.platform() === 'win32' ? '127.0.0.1' : '0.0.0.0',
			port: 3000,
			static: {
				directory: path.resolve( __dirname, '../' ),
				watch: true,
			},
			open: [ dir ],
			hot: true,
		},

		plugins: [
			new webpack.DefinePlugin( {
				'process.env': {
					NODE_ENV: JSON.stringify( argv.mode ),
				}
			} ),
			new MiniCssExtractPlugin( { filename: '[name].css' } ),
			{
				apply( compiler ) {

					compiler.hooks.shouldEmit.tap( 'Remove styles from output', ( compilation ) => {

						delete compilation.assets[ 'css/style.js' ];
						return true;

					} );

				}
			},
			...(
				argv.mode === 'development' ? [
					new webpack.HotModuleReplacementPlugin(),
				] : [
					new webpack.LoaderOptionsPlugin( {
						minimize: true
					} ),
				]
			),
		],
		devtool: argv.mode === 'development' ? 'inline-source-map' : false,

	};

	return config;

};
