// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "TreeSitterPandocMarkdown",
    products: [
        .library(name: "TreeSitterPandocMarkdown", targets: ["TreeSitterPandocMarkdown"]),
    ],
    dependencies: [
        .package(url: "https://github.com/ChimeHQ/SwiftTreeSitter", from: "0.8.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterPandocMarkdown",
            dependencies: [],
            path: ".",
            sources: [
                "src/parser.c",
                // NOTE: if your language has an external scanner, add it here.
            ],
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterPandocMarkdownTests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterPandocMarkdown",
            ],
            path: "bindings/swift/TreeSitterPandocMarkdownTests"
        )
    ],
    cLanguageStandard: .c11
)
