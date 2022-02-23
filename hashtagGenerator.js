function generateHashtag(str) {
  if (str.trim() === '') return false;

  const capFirstLetter = str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const withHashtag = `#${capFirstLetter.trim()}`;

  return withHashtag.length > 140 ? false : withHashtag;
}
