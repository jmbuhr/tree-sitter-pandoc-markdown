import XCTest
import SwiftTreeSitter
import TreeSitterPandocMarkdown

final class TreeSitterPandocMarkdownTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_pandoc_markdown())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading PandocMarkdown grammar")
    }
}
