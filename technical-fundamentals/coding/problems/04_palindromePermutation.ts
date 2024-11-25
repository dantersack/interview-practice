// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
  const cleanStr = str.toLowerCase().replaceAll(" ", "");
  const hash: Record<string, number> = {};
  for (let i = 0; i < cleanStr.length; i++) {
    const char = cleanStr[i];
    if (!hash[char]) hash[char] = 0;
    hash[char] += 1;
  }

  const occArr = Object.values(hash);
  const evenOcc = occArr.filter((v) => v % 2 === 1);

  return evenOcc.length <= 1;
}
