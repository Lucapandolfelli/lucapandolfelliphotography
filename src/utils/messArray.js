export function messArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const x = Math.floor(Math.random() * (i + 1));
    const temporal = array[i];
    array[i] = array[x];
    array[x] = temporal;
  }
  return array;
}
