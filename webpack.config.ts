import webpack from 'webpack';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                        url: true,
                        esModule: false,
                        }
                    },
                    {
                        loader: "resolve-url-loader",
                    },
                    {
                        loader: "sass-loader",
                        options: {
                        sourceMap: true,
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|gif|mp3|ico)$/,
                use: [{
                loader: "file-loader",
                options: {
                    name: 'images/[hash]-[name].[ext]',
                    esModule: false,
                },
                }],
            },
            {
                test: /\.svg$/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: 10000,
                    },
                },
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@pages': path.resolve(__dirname, 'src/pages/')
        },
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CopyPlugin({
        patterns: [
            {
                from: 'src/favicons',
                to: 'favicons'

            },
            {
                from: 'src/images',
                to: 'images'
            },
        ],
        }),
    ],
    devServer: {
        historyApiFallback: true,
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, 'dist/'),
        },
        devMiddleware: {
            publicPath: 'http://localhost:5001/',
        },
        client: {
            overlay: false,
        },
        hot: true,
        port: 5001,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
        },
    },
};

export default config;