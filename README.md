# dom-jsx-runtime

A tiny library that turns JSX into DOM operations

## Usage

This library uses [React's new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html), so all you need to do is configure your build tool to use `https://esm.sh/dom-jsx-runtime` for `jsxImportSource`.

In Deno, for example, your `deno.json` file should look like this:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "https://esm.sh/dom-jsx-runtime"
  }
}
```

## Example

From [the test](./test.jsx), run via `deno test`:

```jsx
import {assertEquals} from 'https://deno.land/std/testing/asserts.ts'
import {DOMParser} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts'
globalThis.document = new DOMParser().parseFromString('', 'text/html')

let dom =
  <html lang='en'>
    <head>
      <title>dom-jsx-runtime</title>
    </head>
    <body>A tiny library that turns JSX into DOM operations</body>
  </html>

let source = dom.outerHTML
let target = '<html lang="en"><head><title>dom-jsx-runtime</title></head><body>A tiny library that turns JSX into DOM operations</body></html>'

Deno.test(
  'Input and output HTML are identical',
  () => assertEquals(source, target)
)
```
