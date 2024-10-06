{
  "targets": [
    {
      "target_name": "tree_sitter_pandoc_markdown_binding",
      "dependencies": [
        "<!(node -p \"require('node-addon-api').targets\"):node_addon_api_except",
      ],
      "include_dirs": [
        "tree-sitter-pandoc-markdown/src",
      ],
      "sources": [
        "bindings/node/binding.cc",
        "tree-sitter-pandoc-markdown/src/parser.c",
        "tree-sitter-pandoc-markdown/src/scanner.c",
        "tree-sitter-pandoc-markdown-inline/src/parser.c",
        "tree-sitter-pandoc-markdown-inline/src/scanner.c",
      ],
      "cflags_c": [
        "-std=c11",
      ],
    }
  ]
}
