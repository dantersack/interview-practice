// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  const hashObj: Record<string, number> = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (hashObj[char]) {
      hashObj[char] = hashObj[char] + 1; // { a: 1 } --> { a: 2 }
    } else {
      hashObj[char] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (!hashObj[char]) return false;
    hashObj[char] = hashObj[char] - 1;
    if (hashObj[char] < 0) return false;
  }

  return true;
}
