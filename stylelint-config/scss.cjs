const prettierConfig = require('zonia-config-prettier');

const sharedRules = {
  'at-rule-empty-line-before': null, // Maybe in the future
  'color-named': null,
  'declaration-block-no-redundant-longhand-properties': null,
  'max-nesting-depth': null,
  'plugin/no-low-performance-animation-properties': null,
  'scss/comment-no-empty': null,
  'scss/double-slash-comment-whitespace-inside': null,
  'selector-max-compound-selectors': null,
  'selector-no-qualifying-type': null,
  'no-descending-specificity': null,
  'selector-max-id': [
    1,
    {
      ignoreContextFunctionalPseudoClasses: [':not', '/^:(h|H)as$/', '#root'],
    },
  ],
  // 'selector-no-qualifying-type': ['error', {
  //     'ignore': ['attribute']
  // }],
};

const sharedPlugins = ['stylelint-high-performance-animation', 'stylelint-order'];

const sharedExtensions = ['stylelint-config-clean-order', 'stylelint-a11y/recommended'];

const scssConfig = {
  plugins: sharedPlugins,
  extends: ['stylelint-config-standard-scss', 'stylelint-config-sass-guidelines', ...sharedExtensions],
  rules: sharedRules,
};

module.exports = scssConfig;
