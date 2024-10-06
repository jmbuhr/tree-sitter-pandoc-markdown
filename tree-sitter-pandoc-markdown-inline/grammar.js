// This grammar only concerns the inline structure
// It is an extension of the tree-sitter-markdown-inline grammar

const MD_INLINE = require('tree-sitter-markdown/tree-sitter-markdown-inline/grammar');

module.exports = grammar(MD_INLINE, {
    name: 'pandoc_markdown_inline',
    rules: {
      ...MD_INLINE.rules,
    }
})

