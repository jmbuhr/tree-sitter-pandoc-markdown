package tree_sitter_pandoc_markdown_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_pandoc_markdown "github.com/jmbuhr/tree-sitter-pandoc-markdown/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_pandoc_markdown.Language())
	if language == nil {
		t.Errorf("Error loading PandocMarkdown grammar")
	}
}
