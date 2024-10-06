all install uninstall clean:
	$(MAKE) -C tree-sitter-pandoc-markdown $@
	$(MAKE) -C tree-sitter-pandoc-markdown-inline $@

.PHONY: all install uninstall clean
