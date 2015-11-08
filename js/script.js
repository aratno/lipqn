// We'll want to get input for the following later, but for now it's a constant

const tier = 4
const omega = 'a'
const p = ['\\sqrt{a}', // [a] not yet supported by KaTeX
         '(-a)',
         // TODO '\\frac{a}{a}', This is a problem because it replaces 'a' in frac
         'a + a',
         '(a) - (a)',
         'b^{c}',
         '\\sin (a)',
         '\\ln (a)',
         '\\log_{b}(a)',
         // '\\Gamma(a)', This is a problem because it replaces 'a' in Gamma
         'b^e',
         'e^{b}',
         '(a) - b',
         'a + b',
        ]
// To fix the problem of replacing 'a' in function names, I need to create a
// shorthand for function names without the letter 'a' in them. For example,
// replace 'frac' with 'frc'

var cur = omega

for (var i = 0; i < tier; i++) {
  var index = Math.floor(Math.random() * p.length)
  var operation = p[ index ]
  cur = cur.replace('a', operation)
}

// Try to get MathJax to put the cur string into this div
console.log(cur)
$('math').html(katex.renderToString(replaceGlyphs(cur)))

console.log(replaceGlyphs(cur))

// After all this, I need to replace all the 'a's with fancy-looking Greek letters
function replaceGlyphs (input) {
  const glyphs = ['\\alpha',
                  '\\beta',
                  '\\gamma',
                  '\\delta',
                  '\\theta',
                  '\\kappa',
                  '\\lambda',
                  '\\mu',
                  '\\pi',
                  '\\tau',
                 ]
  var output = input
  output = output.replace('a', glyphs[ Math.floor(Math.random() * glyphs.length) ])
  output = output.replace('b', glyphs[ Math.floor(Math.random() * glyphs.length) ])
  return output
}
