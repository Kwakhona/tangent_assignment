module.exports = {
  port: 8000,
  files: ['./build/**/*.*'],
  server: { 
      baseDir: './build',
      middleware: {
          1: require('connect-history-api-fallback')({ index: '/index.html', verbose: true })
      }
   }
}