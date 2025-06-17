function firstWord(s) {
  if (!s) return '';
  s = s.trim();
  const index = s.indexOf(' ');
  return index === -1 ? s : s.slice(0, index);
}

const s = prompt("Enter String:");
alert(firstWord(s));
