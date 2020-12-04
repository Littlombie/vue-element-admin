const POSBEM = require('postcss-bem-fix')
const POSENV = require('postcss-preset-env')

module.exports = {
  loader: 'postcss-loader',  
  "plugins": [
    POSBEM({
      style: 'suit', // suit or bem, suit by default,
      separators: {
        'descendent': '__',
        'modifier': '--'
      },
      shortcuts: {
        'component': 'b',
        'modifier': 'm',
        'descendent': 'e'
      }
    }),
    POSENV({
      browsers: ['> 1%', 'last 2 versions'],
      stage: 2,
      preserve: false, // instruct all plugins to omit pre-polyfilled CSS
      features: {
        'custom-properties': true
      },
      "autoprefixer": {}
    })
  ]
}