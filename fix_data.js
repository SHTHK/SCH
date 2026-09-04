const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');
data = data.replace(/personality:\s*(.*?),\n\s*appearance:\s*(.*?),/g, 'info: $1 + "\\n\\n" + $2,');
fs.writeFileSync('src/data.ts', data);
