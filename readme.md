# tree-sitter-pandoc-markdown

A [tree-sitter](https://tree-sitter.github.io) grammar for Pandoc's Markdown as an extension of the [tree-sitter-markdown grammar](https://github.com/tree-sitter-grammars/tree-sitter-markdown).

## Setup

Install [treesitter dependencies](https://tree-sitter.github.io/tree-sitter/creating-parsers#dependencies), then

```bash
git clone --recurse-submodules git@github.com:jmbuhr/tree-sitter-pandoc-markdown.git
cd tree-sitter-pandoc-markdown
npm install
npm run build
npm run test
```

Note: `tree-sitter-markdown` is added here as a git module, such that it can be used in `package.json` as
`"tree-sitter-markdown": "file:./tree-sitter-markdown",`.
When used via npm it wouldn't find its `common/common.js` file.

## Testing in Neovim

Run

```bash
sudo make install
```

Add to your `init.lua` file:

```lua
vim.treesitter.language.add('pandoc_markdown', { path = "/usr/local/lib/libtree-sitter-pandoc-markdown.so" })
vim.treesitter.language.add('pandoc_markdown_inline', { path = "/usr/local/lib/libtree-sitter-pandoc-markdown-inline.so" })
vim.treesitter.language.register('pandoc_markdown', { 'quarto', 'rmarkdown' })
```

Open e.g. a quarto file `test.qmd`.
