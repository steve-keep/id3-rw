import init from 'id3-wasm';

async function runTest() {
    const statusEl = document.getElementById('status');
    try {
        console.log('Attempting to initialize id3-wasm...');
        await init();
        console.log('id3-wasm initialized successfully!');
        statusEl.textContent = 'Status: Success! The library was imported and initialized correctly.';
        statusEl.style.color = 'green';
    } catch (error) {
        console.error('Failed to initialize id3-wasm:', error);
        statusEl.textContent = `Status: Failure. Check the console for errors.`;
        statusEl.style.color = 'red';
    }
}

runTest();
