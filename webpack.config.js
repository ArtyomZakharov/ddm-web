module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
            	test: /\.css$/, loader: 'style!css'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=es2015&presets[]=react']
            }
        ]

    }
};
