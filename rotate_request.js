const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public/Images/gallary');

// User request:
// trainers-> tk 01, tk02,tk03 -> rotate anticlock wise 
// services -> strength , free weight , crossfit -> rotate image anti clock wise 

// TK-01: gym8.JPG
// TK-02: gym7.JPG
// TK-03: gym10.JPG
// Strength: gym8.JPG
// Free Weight: freeweight.JPG
// Crossfit: gym2.JPG

const filesToRotate = [
  'gym8.JPG',
  'gym7.JPG',
  'gym10.JPG',
  'freeweight.JPG',
  'gym2.JPG'
];

async function rotateCCW() {
  for (const file of filesToRotate) {
    const filePath = path.join(directoryPath, file);
    const tempFilePath = path.join(directoryPath, 'req_' + file);
    try {
      if (fs.existsSync(filePath)) {
        console.log('Rotating 90deg CCW:', file);
        await sharp(filePath).rotate(-90).toFile(tempFilePath);
        fs.renameSync(tempFilePath, filePath);
        console.log('Successfully rotated 90deg CCW:', file);
      }
    } catch (err) {
      console.log('Error rotating ' + file + ':', err);
    }
  }
}

rotateCCW();
