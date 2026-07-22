let n = 5;
let count = 1;

// Outer loop iterate over each row
for (let i = 1; i <= n; i++) {     
  let line = '';
  
  // Inner loop prints number
  for (let j = 1; j <= i; j++) {  
    line += count + ' ';
    
    // Increase the count
    count++;  
  }
  console.log(line);
}