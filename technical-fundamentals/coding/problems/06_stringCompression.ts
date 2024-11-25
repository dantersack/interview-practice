// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  const arr: Array<{ char: string; qty: number }> = [];

  let currChar: string | undefined = undefined;
  let currQty = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== currChar) {
      if (currChar !== undefined) {
        arr.push({ char: currChar, qty: currQty });
      }
      currChar = char;
      currQty = 0;
    }
    currQty++;
  }

  if (currChar) {
    arr.push({ char: currChar, qty: currQty });
  }

  let compressed = "";

  for (let i = 0; i < arr.length; i++) {
    const { char, qty } = arr[i];
    compressed += char;
    compressed += qty;
  }

  // console.log(str, arr, compressed);

  return compressed.length < str.length ? compressed : str;
}
