import Foundation
import IsCameraOn

let arguments = CommandLine.arguments

if arguments.contains("--watch") {
	Task {
		for await isOn in cameraStatusChanges(includeExternal: true) {
			print(isOn ? "true" : "false")
			fflush(stdout)
		}
	}
	RunLoop.main.run()
} else {
	print(isCameraOn(includeExternal: true))
}
