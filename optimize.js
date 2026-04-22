const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public/images/gallary');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  
  files.forEach((file) => {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
      const filePath = path.join(directoryPath, file);
      const tempFilePath = path.join(directoryPath, 'temp_' + file);
      
      console.log('Processing:', file);
      sharp(filePath)
        .resize({ width: 1000 })
        .jpeg({ quality: 70 })
        .toFile(tempFilePath)
        .then(() => {
          fs.renameSync(tempFilePath, filePath);
          console.log('Successfully optimized:', file);
        })
        .catch(err => {
          console.log('Error processing ' + file + ':', err);
        });
    }
  });
});
