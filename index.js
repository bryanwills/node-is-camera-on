import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {assertMacOSVersionGreaterThanOrEqualTo} from 'macos-version';
import {execa} from 'execa';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const binaryPath = path.join(__dirname, 'is-camera-on');

export default async function isCameraOn() {
	assertMacOSVersionGreaterThanOrEqualTo('10.15');
	const {stdout} = await execa(binaryPath);
	return stdout === 'true';
}

export async function * isCameraOnChanges() {
	assertMacOSVersionGreaterThanOrEqualTo('10.15');
	const subprocess = execa(binaryPath, ['--watch']);

	try {
		for await (const line of subprocess.stdout) {
			yield line.toString().trim() === 'true';
		}
	} finally {
		subprocess.kill();

		// Prevent unhandled rejection when the process is killed
		try {
			await subprocess;
		} catch {}
	}
}
