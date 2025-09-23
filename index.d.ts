/**
Check if a Mac camera is on.

@returns Whether the camera is on.

@example
```
import isCameraOn from 'is-camera-on';

console.log(await isCameraOn());
//=> true
```
*/
export default function isCameraOn(): Promise<boolean>;

/**
Watch for camera status changes.

@returns An async iterator that yields the camera status as a boolean whenever it changes. The current status is emitted immediately.

@example
```
import {isCameraOnChanges} from 'is-camera-on';

for await (const status of isCameraOnChanges()) {
	console.log(`Camera is ${status ? 'on' : 'off'}`);
}
```
*/
export function isCameraOnChanges(): AsyncIterableIterator<boolean>;
