import isCameraOn, {isCameraOnChanges} from './index.js';

const isOn = await isCameraOn();
console.log(`Camera is ${isOn ? 'on' : 'off'}`);

console.log('\nWatching for camera changes (Ctrl+C to stop)...\n');

for await (const status of isCameraOnChanges()) {
	const time = new Date().toLocaleTimeString();
	console.log(`[${time}] Camera: ${status ? 'ON' : 'OFF'}`);
}
