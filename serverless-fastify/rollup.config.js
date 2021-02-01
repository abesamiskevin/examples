import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import execute from 'rollup-plugin-execute';

const dev = process.env.ROLLUP_WATCH === 'true';

export default {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'cjs'
	},
	plugins: [commonjs(), typescript(), dev && execute(['sls offline'])]
};
