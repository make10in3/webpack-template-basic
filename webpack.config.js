// export - 데이터 내보내기
// 'path' - node js 에서 사용할 수 있는 전역 모듈
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    // parcel index.html // parcel 의 진입점이 index.html 이다
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry:'./js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // nodejs 에서 절대경로를 필요로 한다.
        // __dirname : webpack.config.js 현재 파일이 있는 경로
        path:path.resolve(__dirname, 'dist'), // 생략 가능
        filename:'main.js', // 생략가능
        clean: true // 기존데이터 삭제 후 결과물을 만듬
    }, 

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                use: [
                    'babel-loader'
                ]
            }
            
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from:'static'} //저장한 폴더, 복사해서 dist 로 넣기
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}