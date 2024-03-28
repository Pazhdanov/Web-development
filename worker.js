self.addEventListener("message", (event) => {
    const length = event.data;
    const array = new Array(length);
    let sum = 0;
    let i = 0;
  
    while (i < length) {
      array[i] = Math.floor(Math.random() * 100) + 1;
      sum += array[i];
      i++;
  
      self.postMessage(Math.floor((i / length) * 100));
    }
  
    const avg = sum / length;
  
    self.postMessage(avg);
  });

  