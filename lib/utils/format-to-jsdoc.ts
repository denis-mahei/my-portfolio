export const formatToJsDoc = (lines: string[]) => {
  const wrappedLines = lines.map((line) => `* ${line}`);
  return ['/**', ...wrappedLines, '*/'];
};
