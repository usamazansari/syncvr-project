module.exports = {
  content: [
    './dist/apps/web-frontend/index.html',
    './dist/apps/web-frontend/*.js',
  ],
  css: ['./dist/apps/web-frontend/*.css'],
  safelist: [/(xs|sm|md|lg|xl|focus|hover|dark):*/],
  output: './dist/apps/web-frontend',
  fontFace: true,
  keyFrames: true,
  variables: true,
  rejected: true,
};
