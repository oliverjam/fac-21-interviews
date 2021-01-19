function test(actual, expected) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  console.log(`
---
${actual === expected ? "✅ Correct" : "❌ Incorrect"}
Received: ${actual}
Expected: ${expected}
---`);
}

global.test = test;
