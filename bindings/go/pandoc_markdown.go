package tree_sitter_pandoc_markdown

// #cgo CPPFLAGS: -I../../tree-sitter-pandoc-markdown
// #cgo CFLAGS: -std=c11 -fPIC
// #include "../../tree-sitter-pandoc-markdown/src/parser.c"
// #include "../../tree-sitter-pandoc-markdown/src/scanner.c"
import "C"

import "unsafe"

// Get the tree-sitter Language for the block grammar.
func Language() unsafe.Pointer {
	return unsafe.Pointer(C.tree_sitter_pandoc_markdown())
}
