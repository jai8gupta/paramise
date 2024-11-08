import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: './index.js', // Entry file of your library
    output: [
        { file: 'dist/paramize.esm.js', format: 'esm' }, // ES module format
    ],
    plugins: [resolve(), commonjs()],
    treeshake: true, // Enable tree-shaking
},
{
    input: './index.js', // Entry file of your library
    output: { file: 'dist/paramize.cjs.js', format: 'cjs' }, // CommonJS format
    plugins: [resolve(), commonjs()],
    treeshake: true, // Enable tree-shaking
}

];