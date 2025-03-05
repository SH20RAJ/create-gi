#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Standard .gitignore template
const gitignoreContent = `
# Create using 'npx create-gi' command

# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env
package-lock.json
.npm

# Python
__pycache__/
*.py[cod]
*.so
*.egg-info/
*.eggs/
*.pyo
.Python
build/
develop-eggs/
dist/
downloads/
lib/
lib64/

# Virtual environments
.venv/
env/
venv/
ENV/
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE and Editor files
.vscode/
.idea/
*.swp
*.swo
*.tmp
*.sublime-workspace
*.sublime-project
.settings/
.project
.classpath

# OS-specific files
.DS_Store
Thumbs.db
.directory
Desktop.ini
$RECYCLE.BIN/

# Logs and databases
*.log
*.sql
*.sqlite
*.sqlite3

# Build and dist
dist/
build/
out/
target/

# Coverage and test
coverage/
.coverage
.pytest_cache/
htmlcov/

# Misc
.cache/
*.bak
*.backup
temp/
tmp/
`.trim();

const filePath = path.join(process.cwd(), '.gitignore');

if (fs.existsSync(filePath)) {
    console.log("⚠️  .gitignore file already exists in this directory.");
} else {
    fs.writeFileSync(filePath, gitignoreContent, 'utf8');
    console.log("✅ .gitignore file has been successfully created!");
}
