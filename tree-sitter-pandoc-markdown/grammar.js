/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
// This grammar only concerns the block structure 
// It is an extension of the tree-sitter-markdown grammar

const MD = require('tree-sitter-markdown/tree-sitter-markdown/grammar');

module.exports = grammar(MD, {
    name: 'pandoc_markdown',
    rules: {
      // ...MD.rules,
  }
})

