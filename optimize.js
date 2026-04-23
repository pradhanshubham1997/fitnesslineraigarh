const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public/Images/gallary');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(directoryPath);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
        if (file.startsWith('temp_')) continue;
        
        const filePath = path.join(directoryPath, file);
        const tempFilePath = path.join(directoryPath, 'temp_' + file);
        
        console.log('Processing:', file);
        try {
          await sharp(filePath)
            .rotate()  // Corrects orientation based on EXIF
            .resize({ width: 1000 })
            .jpeg({ quality: 70 })
            .toFile(tempFilePath);
          
          fs.renameSync(tempFilePath, filePath);
          console.log('Successfully optimized:', file);
        } catch (err) {
          console.log('Error processing ' + file + ':', err);
        }
      }
    }
    console.log('All images processed.');
  } catch (err) {
    console.log('Unable to scan directory: ' + err);
  }
}

optimizeImages();
