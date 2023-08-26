export const searchString = (query: string, words: string): Boolean => {
  for (let i = 0; i < words.length; i++) {
    if (query === words.slice(i, i + query.length)) return true;
  }
  return false;
};
