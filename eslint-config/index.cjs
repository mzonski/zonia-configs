const typescript = require('./configs/typescript.cjs');
const react = require('./configs/react.cjs');

const eslintPlugin = {
	configs: {
		react,
		typescript,
	},
};
module.exports = eslintPlugin;
