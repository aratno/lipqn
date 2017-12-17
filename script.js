document.addEventListener('DOMContentLoaded', function( event ) {
  main()
})

let main = function () {

  let sentinel = 'NOCNOCNOC'

  let replacements = [
    `${ sentinel }+${ sentinel }`,
    `${ sentinel }-${ sentinel }`,
    `\\frac{${ sentinel }}{${ sentinel }}`,
    `\\sqrt{${ sentinel }}`,
    `\\sin \\left(${ sentinel }\\right)`,
    `\\ln \\left(${ sentinel }\\right)`,
    `e^{\\left(${ sentinel }\\right)}`,
  ]

  let eqn = `${ sentinel }`

  let iterations = 10

  for( let i = 0; i < iterations; i++ ) {
    let randReplacement = _.sample( replacements )
    eqn = eqn.replace(sentinel, randReplacement)
  }

  while( eqn.includes( sentinel ) ) {
    eqn = eqn.replace(sentinel, 'a')
  }

  katex.render(eqn, document.querySelector( '.rendered > math' ))
}
