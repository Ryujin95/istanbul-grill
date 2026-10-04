const assert = require("node:assert/strict");
const test = require("node:test");

const app = require("../index");

test("GET /health returns the API status", async (t) => {
  const server = app.listen(0, "127.0.0.1");
  t.after(() => server.close());

  await new Promise((resolve) => server.once("listening", resolve));
  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/health`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "ok" });
});
