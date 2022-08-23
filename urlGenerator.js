const urlGenerator = (string) => {
  const restrictedCharacters = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const charactersReplacements = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const specialCharactersRegExp = new RegExp(restrictedCharacters.split('').join('|'), 'g');

  return `http://${string.toString().toLowerCase()
    .replace(/\s+/g, '-') // заменяем whitespace на -
    .replace(specialCharactersRegExp, c => charactersReplacements.charAt(restrictedCharacters.indexOf(c))) // заменяем специальные символы
    .replace(/&/g, '-and-') // заменяем & на 'and'
    .replace(/[^\w\-]+/g, '') // убираем не слова
    .replace(/\-\-+/g, '-') // заменяем несколько - на один -
    .replace(/^-+/, '') // обрезаем - в начале строки
    .replace(/-+$/, '') // обрезаем - в конце строки
  }`
};

module.exports = urlGenerator;