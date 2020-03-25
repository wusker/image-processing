const sharp = require('sharp');

function process(input, size, width) {
  sharp(input)
    .resize({ width })
    .toFile(`output-${size}.jpg`)
    .then(() => `Done processing ${size} image`)
    .catch(err => console.log(err));
}

async function go(filename) {
  const input = `./uploads/${filename}`;

  const promises = [
    process(input, 'smallest', 600),
    process(input, 'small', 750),
    process(input, 'medium', 1000),
    process(input, 'large', 1500),
  ];

  Promise.all(promises).then(() => {
    console.log('\x1b[33m', 'Done processing images ');
  });
}

module.exports = {
  process,
  go,
};
