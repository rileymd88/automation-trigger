const path = require('path');

const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const replace = require('rollup-plugin-replace');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const sproutCssIndex = path.resolve(__dirname, 'node_modules', '@qlik', 'sprout-css-modules', 'src', 'css', 'index.ts');
const sproutDeprecatedIndex = path.resolve(__dirname, 'node_modules', '@qlik', 'sprout-css-modules', 'src', 'deprecated', 'index.ts');

function sproutDeprecatedResolver() {
  return {
    name: 'sprout-deprecated-resolver',
    resolveId(source, importer) {
      if (
        source
        && importer
        && importer.includes('@qlik/sprout-css-modules/src/classNames.js')
      ) {
        if (source === './css') {
          return sproutCssIndex;
        }

        if (source === './deprecated') {
          return sproutDeprecatedIndex;
        }
      }

      return null;
    },
  };
}

module.exports = [
  {
    input: path.resolve(__dirname, 'src', './index.js'),
    output: {
      file: path.resolve(__dirname, 'dist', 'automation-trigger.js'),
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
      sproutDeprecatedResolver(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
      }),
      json(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        babelrc: false,
        extensions,
        include: ['src/**', 'node_modules/@qlik/sprout-css-modules/src/**/*.ts'],
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
          '@babel/preset-typescript',
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
      sproutDeprecatedResolver(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
      }),
      json(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        babelrc: false,
        extensions,
        include: ['src/**', 'node_modules/@qlik/sprout-css-modules/src/**/*.ts'],
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
          '@babel/preset-typescript',
        ],
        plugins: [['@babel/plugin-transform-react-jsx']],
      }),
      postcss({}),
      commonjs(),
    ],
  },
];
