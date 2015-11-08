// TODO We'll want to get input for the following later, but for now it's a constant

const tier = 12
const omega = 'a'
var p = ['\\sqrt{a}', // [a] not yet supported by KaTeX
         // '-a', // This one sucks
         '\\frAc{a}{a}', // This is a problem because it replaces 'a' in frac
         'a + a',
         'a - a',
         'b^{c}',
         '\\sin (a)',
         '\\ln (a)',
         '\\log_{b}(a)',
         // '\\Gamma(a)', This is a problem because it replaces 'a' in Gamma
         'b^e',
         'e^{b}',
         'a - b',
         'a + b',
        ]

// Replace all the parentheses with scalable parentheses
for (var i = 0; i < p.length; i++) {
  p[i] = p[i].replace('(', '\\left(')
  p[i] = p[i].replace(')', '\\right)')
}

// To fix the problem of replacing 'a' in function names, I need to create a
// shorthand for function names without the letter 'a' in them. For example,
// replace 'frac' with 'frc'

var cur = omega

for (var i = 0; i < tier; i++) {
  var index = Math.floor(Math.random() * p.length)
  var operation = p[ index ]
  cur = cur.replace('a', operation)
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
