let n = 5;

// Outer loop iterate over each row
for (let i = 1; i <= n; i++) {
  let line = '';
  
  // This inner loop prints spaces
  for (let s = 1; s <= n - i; s++) { 
    line += ' '; 
  }
  
  // This inner loop prints number
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  console.log(line);
}