import test from 'ava';
import isCameraOn, {isCameraOnChanges} from './index.js';

test('main', async t => {
	const isOn = await isCameraOn();
	t.is(typeof isOn, 'boolean');
	console.log(`Camera is ${isOn ? 'on' : 'off'}`);
});

test('watch camera status', async t => {
	const statusIterator = isCameraOnChanges();

	// Get the first value
	const result = await statusIterator.next();
	t.false(result.done);
	t.is(typeof result.value, 'boolean');

	// Clean up by returning early from the async generator
	await statusIterator.return();
	t.pass();
});
