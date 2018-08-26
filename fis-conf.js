fis.hook('relative');

fis.set('project.ignore', [
  'output/**',
  'dist/**',
  'node_modules/**',
  '.git/**',
  'package.json',
  // 'package-lock.json',
  // 'jsconfig.json',
  '.gitignore',
  'dev.bat',
  'fis-conf.js',
  'README.md',
  // 'src/{common,widgets}/**',
  '.vscode'
]);

fis.match('/src/(**)', {
  release: '/$1'
});

fis.match('*.{scss,css}', {
  parser: fis.plugin('node-sass'),
  rExt: '.css'
});

fis.match('*.{ts}', {
  parser: fis.plugin('typescript'),
  rExt: '.js'
});

// fis.match('*.{js,css,ts,scss}', {
//   useHash: true
// });

// fis.match('::image', {
//   useHash: true
// });

fis.media('prod')
  // .match('**.{js, ts}', {
  //   optimizer: fis.plugin('uglify-js')
  // })
  // .match('**.{css, scss}', {
  //   optimizer: fis.plugin('clean-css')
  // })
  // .match('*.png', {
  //   optimizer: fis.plugin('png-compressor'),
  // })
  .match('*.js', {
    parser: fis.plugin('babel-5.x')
  })
  .match('**', {
    relative: true
  });

  // 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
});

// 对 SCSS 进行图片合并
fis.match('*.scss', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
