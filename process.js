const Jimp = require('jimp');

async function process(size, image, width, height, scale, quality) {
  image
    .cover(width / scale, height / scale)
    .quality(quality)
    .write(`output-${size}.jpg`);

  return `Finished processing ${size} image`;
}

async function go() {
  const image = await Jimp.read('input.jpg');
  const width = image.getWidth();
  const height = image.getHeight();

  const promises = [
    process('smallest', image, width, height, 5, 100),
    process('small', image, width, height, 3.5, 100),
    process('medium', image, width, height, 2.5, 100),
    process('large', image, width, height, 1.5, 100),
  ];

  Promise.all(promises).then(message => {
    console.log(message, '\x1b[43m', 'Done processing images ');
  });
}

go();
