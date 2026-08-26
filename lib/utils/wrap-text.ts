export const wrapText = (
  text: string,
  maxWidth: number,
): string[] => {
  const words = text.split(' ');
  const res = [];
  let currLine = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if ((currLine + ' ' + word).length <= maxWidth) {
      currLine += ' ' + word;
    } else {
      res.push(currLine.trim());
      currLine = word;
    }
  }
  if (currLine) {
    res.push(currLine);
  }
  return res;
};
