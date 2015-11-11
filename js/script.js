// TODO We'll want to get input for tier, but for now it's a constant

$('document').ready(function () {
  generate()
})

function generate () {
  const tier = 20
  const omega = 'a'
  var p_1 = ['a + a',
             'a - a',
             '(\\frAc{a}{a})'
            ]
  var p   = ['\\sqrt{a}', // [a] not yet supported by KaTeX
             // '-a', // This one sucks
             'b^{c}',
             '\\sin (a)',
             '\\ln (a)',
             '\\log_{b}(a)',
             // '\\Gamma(a)', This is a problem because it replaces 'a' in Gamma
             'b^e',
             'e^{b}'
             //'a - b',
             //'a + b'
            ]

  // Replace all the parentheses with scalable parentheses
  for (var i = 0; i < p.length; i++) {
    p[i] = p[i].replace('(', '\\left(')
    p[i] = p[i].replace(')', '\\right)')
  }
  for (var i = 0; i < p_1.length; i++) {
    p_1[i] = p_1[i].replace('(', '\\left(')
    p_1[i] = p_1[i].replace(')', '\\right)')
  }

  // To fix the problem of replacing 'a' in function names, I need to create a
  // shorthand for function names without the letter 'a' in them. For example,
  // replace 'frac' with 'frc'

  var cur = omega
  const simpleThreshold = 6
  var index
  var operation

  for (var i = 0; i < tier; i++) {
    if ( i < simpleThreshold) {
      index = Math.floor(Math.random() * p_1.length)
      operation = p_1[ index ]
      cur = cur.replace('a', operation)
    }
    else {
      index = Math.floor(Math.random() * p.length)
      operation = p[ index ]
      cur = cur.replace('a', operation)
    }
  }

  cur = replaceGlyphs(cur)
  cur = replaceShorthand(cur)
  $('math').html(katex.renderToString(cur))

  // After all this, I need to replace all the 'a's with fancy-looking Greek letters
  function replaceGlyphs (input) {
    const glyphs = ['\\AlphA',
                    '\\BetA',
                    '\\gAmmA',
                    '\\deltA',
                    '\\thetA',
                    '\\kAppA',
                    '\\lAmBdA',
                    '\\mu',
                    '\\pi',
                    '\\tAu',
                   ]
    var output = input
    output = output.replace('a', glyphs[ Math.floor(Math.random() * glyphs.length) ])
    output = output.replace('b', glyphs[ Math.floor(Math.random() * glyphs.length) ])
    return output
  }

  // Properly replace shorthands for functions with 'a' in them, like 'frac'
  function replaceShorthand (input) {
    return input.toLowerCase()
  }

  // Using clipboard.js, create button to copy plaintext
  $('#plain-text-area').text(cur)
  var clipboard = new Clipboard('#clipbtn');
}

$('h1').click(generate)
