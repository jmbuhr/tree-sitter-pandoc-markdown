// This grammar only concerns the block structure 
// It is an extension of the tree-sitter-markdown grammar


const MD = require('@tree-sitter-grammars/tree-sitter-markdown/tree-sitter-markdown/grammar');

module.exports = grammar(MD, {
    name: 'pandoc-markdown'
})

