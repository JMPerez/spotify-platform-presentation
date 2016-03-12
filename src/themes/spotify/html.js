module.exports = function(data) {
  return {
    '200.html': data.defaultTemplate(),
    'index.html': [
      '<!doctype html>',
        '<html>',
          '<head>',
            '<meta charset="utf-8"/>',
            '<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>',
            '<style>',
            "@font-face{font-family:Circular;src:url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-light.woff2) format('woff2'),url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-light.woff) format('woff');font-weight:300;font-style:normal}@font-face{font-family:Circular;src:url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-book.woff2) format('woff2'),url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-book.woff) format('woff');font-weight:400;font-style:normal}@font-face{font-family:Circular;src:url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-medium.woff2) format('woff2'),url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-medium.woff) format('woff');font-weight:500;font-style:normal}@font-face{font-family:Circular;src:url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-bold.woff2) format('woff2'),url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-bold.woff) format('woff');font-weight:700;font-style:normal}@font-face{font-family:Circular;src:url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-black.woff2) format('woff2'),url(https://sp-bootstrap.global.ssl.fastly.net/7.1.1/fonts/circular-black.woff) format('woff');font-weight:900;font-style:normal}",
            '</style>'
            '<link href="' + data.css + '" rel="stylesheet" type="text/css" />', // <-- Don't remove this
          '</head>',
          '<body>',
            '<div id="root"></div>', // <-- or this
            '<script src="' + data.main + '"></script>', // <-- or this
          '</body>',
        '</html>'
    ].join('')
  }
}
