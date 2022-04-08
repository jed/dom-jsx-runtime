export {jsx, jsx as jsxs, jsx as Fragment}

function jsx(node, props) {
  if (node === jsx) node = document.createDocumentFragment()
  else if (typeof node === 'function') return node(props)
  else node = document.createElement(node)

  for (let name in props) {
    if (name !== 'children') node.setAttribute(name, props[name])
    else Array.isArray(props.children)
      ? node.append(...props.children)
      : node.append(props.children)
  }

  return node
}
