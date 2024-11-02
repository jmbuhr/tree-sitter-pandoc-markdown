all install uninstall clean:
	$(MAKE) -C tree-sitter-pandoc-markdown $@
	$(MAKE) -C tree-sitter-pandoc-markdown-inline $@

test:
	npm run build
	$(MAKE) -C tree-sitter-pandoc-markdown $@
	$(MAKE) -C tree-sitter-pandoc-markdown-inline $@

qparse:
	npm run build
	cd tree-sitter-pandoc-markdown && tree-sitter parse 'test/highlight/quarto.qmd'

qhighlight:
	npm run build
	tree-sitter highlight 'tree-sitter-pandoc-markdown/test/highlight/quarto.qmd'

.PHONY: all install uninstall clean test
