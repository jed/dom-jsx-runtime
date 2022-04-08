import {assertEquals} from 'https://deno.land/std/testing/asserts.ts'
import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
globalThis.document = new DOMParser().parseFromString('', 'text/html')

let dom =
  <html lang='en'>
    <head>
      <title>dom-jsx-runtime</title>
    </head>
    <body>A tiny library that turns {'JSX'} into {'DOM'} operations</body>
  </html>

let source = dom.outerHTML
let target = '<html lang="en"><head><title>dom-jsx-runtime</title></head><body>A tiny library that turns JSX into DOM operations</body></html>'

Deno.test(
  'Input and output HTML are identical',
  () => assertEquals(source, target)
)
