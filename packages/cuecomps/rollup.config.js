import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    file: pkg.module,
    format: 'cjs'
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: '../../node_modules/**',
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};