// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import vuePlugin from '@vitejs/plugin-vue';
import filesize from 'rollup-plugin-filesize';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

export default async () => ({
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      name: 'menu',
      sourcemap: false,
      globals: { vue: 'vue', 'element-plus': 'element-plus' },
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'menu',
      sourcemap: false,
      globals: { vue: 'vue', 'element-plus': 'element-plus' },
    },
  ],
  plugins: [
    vuePlugin(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),

    // Components({
    //   resolvers: [ElementPlusResolver({ importStyle: 'css' })],
    // }),

    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    // 打包css
    postcss({
      minimize: isProduction,
      autoModules: true,
      extensions: ['.sass', '.less', '.scss', '.css'],
      extract: path.resolve('./dist/index.css'), // 打包之后的地址
    }),
    nodeResolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    typescript({
      // tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      // tsconfig: './tsconfig.json',
      exclude: 'node_modules/**',
      useTsconfigDeclarationDir: true,
      extensions: ['.js', '.ts', '.tsx'],
    }),

    isProduction && terser(),
    filesize(), // 显示文件大小
  ],
  onwarn(_warning, _warn) {},
  external: ['vue', 'element-plus'],
});
