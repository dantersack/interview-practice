// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  const hashObj: Record<string, boolean> = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (hashObj[char]) return false;
    hashObj[char] = true;
  }
  return true;
}
