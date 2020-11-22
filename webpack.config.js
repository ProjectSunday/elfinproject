const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
    devServer: {
        contentBase: './src/static/',

        // contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: true,
        }),
    ]
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    { from: "src/static", to: "./" },
                ],
            }),
        )
        // config.output.filename = '[name].[chunkhash].js'
    }
    return config;
}