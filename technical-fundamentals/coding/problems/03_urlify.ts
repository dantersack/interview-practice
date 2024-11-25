// 3.  URLify:

// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

export default function URLify(s1: string): string {
  const output = [];
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (char === " ") output.push("%20");
    else output.push(char);
  }
  return output.join("");
}
