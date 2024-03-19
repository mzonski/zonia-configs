# zonia-configs

This repository contains configuration packages for ESLint, Prettier, and Stylelint, designed to support TypeScript and React projects. These configurations aim to provide a comprehensive set of rules and styles for maintaining code quality and consistency across projects.

## Packages

The workspace includes the following packages:

- **eslint-config**: ESLint configuration supporting TypeScript and React.
- **prettier-config**: Prettier configuration for code formatting.
- **stylelint-config**: Stylelint configuration for styling rules and guidelines.

### eslint-config (eslint-plugin-zonia)

The ESLint configuration is built on top of various plugins to support a wide range of JavaScript, TypeScript, and React best practices. Here's a list of included plugins:

- `eslint-config-airbnb`: Enforces Airbnb's JavaScript style guide, one of the most popular style guides for writing clean and readable JavaScript.
- `eslint-config-airbnb-typescript`: Extends Airbnb's ESLint configuration to TypeScript, ensuring TypeScript code adheres to Airbnb's style guidelines.
- `eslint-config-prettier`: Disables ESLint rules that might conflict with Prettier formatting, ensuring consistency between ESLint and Prettier.
- `eslint-define-config`: Provides a better TypeScript experience when configuring ESLint, offering type-checking for ESLint configurations.
- `eslint-import-resolver-typescript`: Adds TypeScript support for ESLint's import/resolver, ensuring correct path resolution for TypeScript imports.
- `eslint-plugin-import`: Provides linting rules to help validate proper imports, preventing issues like misspellings or path errors.
- `eslint-plugin-jsx-a11y`: Checks JSX elements for accessibility issues, promoting better web practices for users with disabilities.
- `eslint-plugin-prettier`: Runs Prettier as an ESLint rule, integrating Prettier's formatting into ESLint's workflow.
- `eslint-plugin-react`: Contains rules specific to React, ensuring code quality and consistency in React applications.
- `eslint-plugin-react-hooks`: Enforces the Rules of Hooks in React, ensuring hooks are used correctly and efficiently.
- `eslint-plugin-react-refresh`: Supports the fast refresh feature in React applications, mainly used during development for quicker reloads.
- `eslint-plugin-regexp`: Offers rules for regular expressions, improving readability and correctness.
- `eslint-plugin-sonarjs`: Provides rules that help catch bugs and suspicious patterns in the code, inspired by SonarQube's detection capabilities.

This configuration ensures your TypeScript and React projects adhere to the industry's best practices and Airbnb's style guide, enhanced with Prettier for formatting and additional rules for better code quality.

### prettier-config (zonia-config-prettier)

My Prettier configuration is tailored to improve readability and maintain a consistent coding style across my projects:

- **Print Width**: Set to 120 characters.
- **Tab Width**: Uses 2 spaces per indentation level, improving readability by keeping the indentation consistent.
- **Use Tabs**: False, meaning space characters are used for indentation.
- **Semicolons**: True, ensuring statements are terminated with semicolons.
- **Single Quote**: True, preferring single quotes over double quotes for strings.
- **Trailing Comma**: Set to 'all', adding a trailing comma to the end of objects, arrays, and parameter lists in function calls.
- **Arrow Parens**: Always include parentheses around arrow function parameters for clarity.
- **End Of Line**: 'auto', maintaining the existing line endings across different operating systems.

This setup ensures that your code is not only consistent and clean but also adheres to widely accepted formatting standards.

### stylelint-config (stylelint-config-zonia)

The Stylelint configuration relies on a curated selection of packages to enforce best practices and guidelines for styling. Included packages are:

- `@ronilaukkarinen/stylelint-a11y`: Focuses on enforcing accessibility best practices in CSS and SCSS.
- `stylelint-config-sass-guidelines`: Enforces best practices and conventions found in the Sass Guidelines.
- `stylelint-config-standard`: Provides a standard set of rules for styling, promoting consistency and avoiding errors.
- `stylelint-config-standard-scss`: Extends `stylelint-config-standard` for SCSS syntax, applying standard styling rules to SCSS.
- `stylelint-high-performance-animation`: Warns about the use of low-performance animation and transition properties.
- `stylelint-no-unsupported-browser-features`: Prevents the use of CSS features that aren't supported across your target browsers.
- `stylelint-order`: Enforces a consistent order for CSS properties, improving readability.
- `stylelint-config-clean-order`: Provides a predefined order for CSS properties, aiming to keep stylesheets tidy.
- `stylelint-prettier`: Integrates Prettier's formatting rules into Stylelint, ensuring consistent styling across CSS/SCSS.

This configuration aims to ensure high-quality CSS/SCSS coding standards, focusing on accessibility, performance, and order, seamlessly integrated with Prettier for style formatting.
