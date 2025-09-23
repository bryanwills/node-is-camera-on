# is-camera-on

> Check if a Mac camera is on

## Install

```sh
npm install is-camera-on
```

Requires macOS 10.15 or later.

## Usage

```js
import isCameraOn, {isCameraOnChanges} from 'is-camera-on';

console.log(await isCameraOn());
//=> true

// Watch for camera status changes
for await (const status of isCameraOnChanges()) {
	console.log(`Camera is ${status ? 'on' : 'off'}`);
}
```

## API

### isCameraOn()

Returns a promise that resolves with a boolean indicating whether the camera is on.

### isCameraOnChanges()

Returns an async iterator that yields the camera status as a boolean whenever it changes. The current status is emitted immediately.

## Related

- [is-camera-on-cli](https://github.com/sindresorhus/is-camera-on-cli) - CLI for this package
