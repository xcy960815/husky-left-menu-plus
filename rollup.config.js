import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import vuePlugin from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import replace from 'rollup-plugin-replace'
import del from 'rollup-plugin-delete'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
const isProduction = process.env.NODE_ENV === 'production'

export default async () => ({
    input: './src/components/index.ts',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            name: 'menu',
            sourcemap: false,
            globals: { vue: 'Vue' },
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'menu',
            sourcemap: false,
            globals: { vue: 'Vue' },
        },
    ],
    plugins: [
        vuePlugin(),
        //源代码更改马上清空dist文件夹下面打包过的文件 防止代码冗余
        del({
            targets: ['dist/', './demo/'],
        }),
        // es6 => es5
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        // 打包css
        postcss({
            minimize: isProduction,
            autoModules: true,
            extensions: ['.css', '.less'], // 包括那些文件
            extract: path.resolve('./dist/index.css'), //打包之后的地址
        }),
        nodeResolve(),
        commonjs(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),

        typescript({
            useTsconfigDeclarationDir: true,
        }),

        isProduction &&
            (
                await import('rollup-plugin-terser')
            ).terser() /*线上开启压缩代码*/,
        filesize(), // 显示文件大小
    ],
    onwarn(_warning, _warn) {},
    external: ['vue'],
})
