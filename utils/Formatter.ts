export const toTitleCase = (str: string) => {
  str = str.replace(/[_-]/g, ' '); // Remove underscores and dashes
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
  });
};
