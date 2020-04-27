const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['images/input/*.png'], {
	destination: 'images/output',
	plugins: [
		imageminPngquant({
			quality:[0,0.05]
		})
	]
});

console.log('Images optimized');
