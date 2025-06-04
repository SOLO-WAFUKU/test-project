# Test Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen)](https://nodejs.org)
[![Code Style: ESLint](https://img.shields.io/badge/code%20style-ESLint-4B32C3.svg)](https://eslint.org/)

A simple JavaScript learning project with modern development setup.

## 🚀 Features

- ✅ Modern JavaScript (ES6+)
- ✅ ESLint for code quality
- ✅ Jest for testing
- ✅ GitHub Actions CI/CD
- ✅ VS Code integration

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/SOLO-WAFUKU/test-project.git
cd test-project

# Install dependencies
npm install
```

## 🛠️ Available Scripts

```bash
# Run linter
npm run lint

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📁 Project Structure

```
test-project/
├── src/              # Source code
│   ├── index.js
│   ├── buggy.js
│   └── todo.js
├── tests/            # Test files
│   ├── index.test.js
│   └── buggy.test.js
├── docs/             # Documentation
├── .vscode/          # VS Code settings
├── package.json      # Project configuration
├── jest.config.js    # Jest configuration
└── eslint.config.js  # ESLint configuration
```

## 🧪 Testing

The project uses Jest for testing. Tests are located in the `tests/` directory.

Current test coverage:
- `buggy.js`: 100% coverage
- `index.js`: 0% coverage (TODO)
- `todo.js`: 0% coverage (TODO)

## 📝 TODO

- [ ] Add more tests for `index.js`
- [ ] Implement functionality in `todo.js`
- [ ] Add CI badge once GitHub Actions is set up
- [ ] Create a simple web application

## 📄 License

This project is licensed under the MIT License.