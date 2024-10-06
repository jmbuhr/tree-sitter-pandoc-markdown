package tree_sitter_pandoc_markdown

// #cgo CPPFLAGS: -I../../tree-sitter-pandoc-markdown-inline
// #cgo CFLAGS: -std=c11 -fPIC
// #include "../../tree-sitter-pandoc-markdown-inline/src/parser.c"
// #include "../../tree-sitter-pandoc-markdown-inline/src/scanner.c"
import "C"

import "unsafe"

// Get the tree-sitter Language for the inline grammar.
func InlineLanguage() unsafe.Pointer {
	return unsafe.Pointer(C.tree_sitter_pandoc_markdown_inline())
}
