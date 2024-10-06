/**
 * @file Treesitter parser for markdown with pandoc extensions
 * @author Jannik Buhr <jannik.m.buhr@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "pandoc_markdown",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
