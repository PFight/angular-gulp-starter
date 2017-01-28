var nodeResolve = require('rollup-plugin-node-resolve');
var nodePath = require("path");
var conf = require('./variables.js');

class RollupNG2 {
  resolveId(id, from) {
    if (id.startsWith('rxjs/')) {
        return nodePath.resolve(`${conf.RXJS_TO_ES_DIR}/${id.replace('rxjs/', '')}.js`);
    }
    return undefined;
  }
}

const rollupNG2 = () => new RollupNG2();

module.exports = {
  sourceMap: false,
  treeshake: true,
  format: 'cjs',
  context: 'window',
  plugins: [
    rollupNG2(),
    nodeResolve({
      jsnext: true, main: true, module: true
    })
  ],
  onwarn: function ( message ) {
    console.warn( message );
  }
};
