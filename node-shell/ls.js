// files will be an array of filenames, like ['bash.js', 'pwd.js']
const fs = require("fs");
fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  });