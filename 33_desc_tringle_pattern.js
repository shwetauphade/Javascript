let n = 5;

// Outer loop iterate over each row
for (let i = n; i >= 1; i--) {    
  let line = '';
  
  // Inner loop prints number
  for (let j = 1; j <= i; j++) { 
    line += j + ' ';
  }
  
  // Print ith row 
  console.log(line);
}