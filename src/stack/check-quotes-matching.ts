import Stack from './array-stack';

const openQuotesDict: { [prop: string]: string } = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const openQuotesSet = new Set(['(', '[', '{']);
function isOpenQuote(char: string): boolean {
  return openQuotesSet.has(char);
}

const closeQuotesSet = new Set([')', ']', '}']);
function isCloseQuote(char: string): boolean {
  return closeQuotesSet.has(char);
}

export default function checkQuotesMatching(text: string): boolean {
  const openQuotesStack = new Stack<string>();
  for (let i = 0, len = text.length; i < len; i++) {
    const char = text[i];
    if (isOpenQuote(char)) {
      openQuotesStack.push(char);
    } else if (isCloseQuote(char)) {
      if (openQuotesDict[char] !== openQuotesStack.pop()) {
        return false;
      }
    }
  }
  if (openQuotesStack.size() > 0) {
    return false;
  }
  return true;
}
