// Run with: node 01_modern_repeat_pyramid.js
function pyramid1(n = 5) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}
pyramid1(5);
