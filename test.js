const terserOptions = {
  format: { beautify: false, comments: [] },
  module: false,
  ecma: 5,
  compress: { ecma: 5, arrows: false },
  mangle: true,
  parse: {},
  sourceMap: { asObject: true },
};
const { minify } = require('terser');
const fs = require('fs');

const run = async () => {
  console.time('test')
  const result = await minify(
    {
      a: fs.readFileSync('./vendors.js', 'utf8'),
    },
    terserOptions,
  );
  console.timeEnd('test')
  console.log('>>> build success');
};

run();
