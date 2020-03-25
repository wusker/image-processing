const sharp = require('sharp');
const makeDir = require('./util');

function process(filename, size, width) {
  sharp(`./uploads/${filename}`)
    .resize({ width })
    .webp({ lossless: true })
    .toFile(
      `./processed-webp/${filename.replace(
        /.jpg|.jpeg|.png|.gif/gi,
        ''
      )}-${size}.webp`
    )
    .then(() => `Done processing ${size} image`)
    .catch(err => console.log(err));
}

async function go(filename) {
  makeDir();

  const promises = [
    process(filename, 'smallest', 600),
    process(filename, 'small', 750),
    process(filename, 'medium', 1000),
    process(filename, 'large', 1500),
  ];

  Promise.all(promises).then(() => {
    console.log('\x1b[33m', 'Done processing images as WebP ');
  });
}

module.exports = {
  process,
  go,
};
