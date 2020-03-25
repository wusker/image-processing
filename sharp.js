const sharp = require('sharp');
const path = require('path');

function process(filename, size, width) {
  sharp(`./uploads/${filename}`)
    .resize({ width })
    .toFile(
      `./processed/${filename.replace(
        /.jpg|.png|.gif/gi,
        ''
      )}-${size}${path.extname(filename)}`
    )
    .then(() => `Done processing ${size} image`)
    .catch(err => console.log(err));
}

async function go(filename) {
  const promises = [
    process(filename, 'smallest', 600),
    process(filename, 'small', 750),
    process(filename, 'medium', 1000),
    process(filename, 'large', 1500),
  ];

  Promise.all(promises).then(() => {
    console.log('\x1b[33m', 'Done processing images ');
  });
}

module.exports = {
  process,
  go,
};
