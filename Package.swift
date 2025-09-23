// swift-tools-version:5.9
import PackageDescription

let package = Package(
	name: "IsCameraOnCLI",
	platforms: [
		.macOS(.v10_15)
	],
	products: [
		.executable(
			name: "is-camera-on",
			targets: [
				"IsCameraOnCLI"
			]
		)
	],
	dependencies: [
		.package(
			url: "https://github.com/sindresorhus/is-camera-on",
			from: "3.0.0"
		)
	],
	targets: [
		.executableTarget(
			name: "IsCameraOnCLI",
			dependencies: [
				.product(
					name: "IsCameraOn",
					package: "is-camera-on"
				)
			]
		)
	]
)
