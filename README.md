# Sharp Local Image Processor

Local drag and drop image processor that resizes and optimizes images for use on the web.

Built with: Node, Express, Multer, and Sharp.

Currently statically set to run on localhost:5500 with server @ localhost:9090. Change this configuration for your own needs.

#### Start Server

```
yarn

yarn serve
```

#### Start Client in Browser

Run index.html on localhost:5500. Drag and drop images on the screen or browse to upload. Once submitted, these files will be processed and saved to their respective folders in the directory.

Current app outputs both JPG and WebP formats. Check out [Sharp](https://github.com/lovell/sharp) for more, as it allows for much more powerful image manipulation.

## Future

The hope is to optimize this system for an efficient workflow and optimized images closer to how [Squoosh](https://squoosh.app/) handles image this process—but this with bulk processing.
