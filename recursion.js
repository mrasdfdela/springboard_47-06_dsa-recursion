/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length===1) return nums[0];
  return nums[0] * product( nums.slice(1) );
}

/** longest: return the length of the longest word in an array of words. */

// function longest(words) {
//   if (words.length===1) return words[0].length;
//   const wordLength = words[0].length;
//   let otherLength = longest(words.slice(1));
//   return wordLength > otherLength ? wordLength : otherLength;
// }

function longest(words,i=0){
  if (i>=words.length-1) return words[i].length;
  return words[i].length > longest(words, i+1)
    ? words[i].length
    : longest(words, i+1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if (i>str.length-1) return "";
  let restOfString = everyOther(str, i + 1);
  return i % 2 === 0 ? str[i] + restOfString : restOfString;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length<=1) return true;
  return str[0] === str.slice(-1) && isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx >= arr.length) return -1;
  return arr[idx] === val ? idx : findIndex(arr,val,idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 0) return "";
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (Object.keys(obj).length === 0) return;
  let arr = [];
  for (const [k,v] of Object.entries(obj)){
    if (typeof v === 'object') arr.push(...gatherStrings(v));
    if (typeof v === 'string') arr.push(v);
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, lIdx=0, rIdx=arr.length-1) {
  if (lIdx > rIdx) return -1;
  let evalIdx = Math.floor( (rIdx+lIdx)/2 );
  if (arr[evalIdx]===val) {
    return evalIdx;
  } else if (arr[evalIdx]<val) {
    return binarySearch(arr, val, evalIdx + 1, rIdx);
  } else {
    // console.log(`idx: ${evalIdx}, val=${arr[evalIdx]}, bottom slice`);
    return binarySearch(arr, val, lIdx, evalIdx-1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
