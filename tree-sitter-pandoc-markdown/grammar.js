/// <reference types="tree-sitter-cli/dsl" />
// @ts-check
// This grammar only concerns the block structure 
// It is an extension of the tree-sitter-markdown grammar

const MD = require('tree-sitter-markdown/tree-sitter-markdown/grammar');

const common = require('tree-sitter-markdown/common/common');

module.exports = grammar(MD, {
  name: 'pandoc_markdown',
  rules: {
    info_string: ($, md) =>
      prec(2,
        choice(
          // md, // the original from the markdown grammar
          choice(
            seq(optional('='), $.language, repeat(choice($._line, $.backslash_escape, $.entity_reference, $.numeric_character_reference))),
            seq(
              repeat1(choice('{', '}')),
              optional('='),
              optional(choice(
                seq($.language, repeat(choice($._line, $.backslash_escape, $.entity_reference, $.numeric_character_reference))),
                seq($._whitespace, repeat(choice($._line, $.backslash_escape, $.entity_reference, $.numeric_character_reference))),
              ))
            )
          )
        )
      ),
    language: ($, _md) => prec.right(repeat1(choice($._word, common.punctuation_without($, ['{', '}', ',']), $.backslash_escape, $.entity_reference, $.numeric_character_reference))),
    ...MD.rules
  }
})

