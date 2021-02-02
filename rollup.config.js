const path = require('path');

const commonjs = require('@rollup/plugin-commonjs');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const replace = require('rollup-plugin-replace');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

module.exports = [
  {
    input: path.resolve(__dirname, 'src', './index.js'),
    output: {
      file: path.resolve(__dirname, 'dist', 'qlik-blends.js'),
      name: 'mystuff',
      format: 'umd',
      exports: 'default',
      sourcemap: true,
      globals: {
        '@nebula.js/stardust': 'stardust',
      },
    },
    external: ['@nebula.js/stardust'],
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        babelrc: false,
        exclude: './node_modules/**',
        extensions,
        include: ['src/**'],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: ['last 2 Chrome versions'],
              },
            },
          ],
        ],
        plugins: [['@babel/plugin-transform-react-jsx']],
      }),
      postcss({}),
      commonjs(),
    ],
  },
  {
    input: path.resolve(__dirname, 'src', './extDefinition.js'),
    output: {
      file: path.resolve(__dirname, 'dist', 'extDefinition.js'),
      name: 'mystuff',
      format: 'umd',
      exports: 'default',
      sourcemap: true,
      globals: {
        '@nebula.js/stardust': 'stardust',
      },
    },
    external: ['@nebula.js/stardust'],
    plugins: [
      nodeResolve({
        extensions: ['.js', '.jsx'],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        babelrc: false,
        exclude: './node_modules/**',
        extensions,
        include: ['src/**'],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: ['last 2 Chrome versions'],
              },
            },
          ],
        ],
        plugins: [['@babel/plugin-transform-react-jsx']],
      }),
      postcss({}),
      commonjs(),
    ],
  },
];
