// We'll want to get input for the following later, but for now it's a constant

const tier = 4
const omega = 'a'
const p = ['\\sqrt[a]{a}',
         '(-a)',
         // '\\frac{a}{a}', This is a problem because it replaces 'a' in frac
         'a + a',
         '(a) - (a)',
         'a^{a}',
         '\\sin (a)',
         '\\ln (a)',
         '\\log_{b}(a)',
         // '\\Gamma(a)', This is a problem because it replaces 'a' in Gamma
         'a^e',
         'e^{a}',
         '(a) - 1',
         'a + 1',
        ]
// To fix the problem of replacing 'a' in function names, I need to create a
// shorthand for function names without the letter 'a' in them. For example,
// replace 'frac' with 'frc'

var cur = omega
console.log(cur)

for (var i = 0; i < tier; i++) {
  var index = Math.floor(Math.random() * p.length)
  var operation = p[ index ]
  cur = cur.replace('a', operation)
  console.log('~ cur is: ' + cur)
}

// After all this, I need to replace all the 'a's with fancy-looking Greek letters
