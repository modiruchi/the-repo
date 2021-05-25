import path, { resolve } from 'path';
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const HtmlWebpackPlugin = require('html-webpack-plugin');

export default (): Configuration => ({
    mode: 'development',
    entry: "./packages/responsive/app/index.tsx",
    output: {
        filename: '[name].[chunkhash].js',
        path: `${__dirname}/build`,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader')
                    },
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            configFile: path.resolve(`${__dirname}/tsconfig.build.json`)
                        }
                    }
                ]
            },
            {
                test: /.s?css$/,
                use: [require.resolve('style-loader'), require.resolve('css-loader'), require.resolve('sass-loader')],
              },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MyResponsiveApp',
            chunks: ['main'],
            template: resolve(__dirname, 'template.html'),
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
    }
});