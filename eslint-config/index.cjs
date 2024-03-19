const typescript = require('./configs/typescript.cjs');
const react = require('./configs/react.cjs');

/** @type import("eslint-define-config").Plugin */
module.exports = {
  configs: {
    react,
    typescript,
  },
};
