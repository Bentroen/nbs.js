import { readFile } from "node:fs/promises";
import { fromArrayBuffer, toArrayBuffer } from "../../src";

test("Import and export identical songs", async () => {
	const originalFile = await readFile("tests/sample/simple.nbs");
	const originalBuffer = new Uint8Array(originalFile);
	const originalSong = fromArrayBuffer(originalBuffer.buffer);

	const exportedArray = toArrayBuffer(originalSong);
	const exportedBuffer = new Uint8Array(exportedArray);

	expect(Buffer.compare(originalBuffer, exportedBuffer)).toBe(0);
});
