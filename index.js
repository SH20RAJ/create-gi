#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Standard .gitignore template
const gitignoreContent = `
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env

# Python
__pycache__/
*.py[cod]
*.so
*.egg-info/
*.eggs/
*.pyo

# Virtual environments
.venv/
env/
venv/

# IDE and Editor files
.vscode/
.idea/
*.swp
*.swo
*.tmp

# OS-specific files
.DS_Store
Thumbs.db
`.trim();

const filePath = path.join(process.cwd(), '.gitignore');

if (fs.existsSync(filePath)) {
    console.log("⚠️  .gitignore file already exists in this directory.");
} else {
    fs.writeFileSync(filePath, gitignoreContent, 'utf8');
    console.log("✅ .gitignore file has been successfully created!");
}
