export const getFirstLetterUpperCase = (str: string) => {
  const arrayLetter = str.split('');
  arrayLetter.splice(0, 1, str[0].toUpperCase());
  return arrayLetter.join('');
}

export const removeUnderlineFromLetter = (str: string) => {
  const arrayWithoutUnderline = str.split('_');
  return arrayWithoutUnderline.join(' ');
};
