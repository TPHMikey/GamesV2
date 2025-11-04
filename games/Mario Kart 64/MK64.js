// MK64.js — loads and runs MK64.wasm (placeholder demo)

const status = document.getElementById("status");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

async function loadWasm() {
  try {
    status.textContent = "Fetching MK64.wasm...";
    const response = await fetch("MK64.wasm");
    const buffer = await response.arrayBuffer();

    const wasm = await WebAssembly.instantiate(buffer, {
      env: {
        // Example function you can call from WASM
        js_log: (value) => console.log("WASM log:", value),
      },
    });

    status.textContent = "MK64.wasm loaded successfully!";
    console.log("WASM module:", wasm);

    // Simple canvas test (pretend game frame)
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "24px sans-serif";
    ctx.fillText("MK64 WebAssembly Test", 160, 240);
  } catch (err) {
    console.error(err);
    status.textContent = "Error loading MK64.wasm 😢";
  }
}

loadWasm();
