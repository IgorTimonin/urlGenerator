const { transliterate } = require("./components/transliterator");

const urlGenerator = (string) => {
  const protocol = 'https://';
  const subdomain = 'example';
  const domain = 'mysite';
  const zone = 'com';
  const port = '';
  const restrictedCharacters = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const charactersReplacements = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const specialCharactersRegExp = new RegExp(restrictedCharacters.split('').join('|'), 'g');

  return `${protocol}${subdomain}.${domain}.${zone}/${
    transliterate(string)
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // заменяем whitespace на -
      .replace(specialCharactersRegExp, (c) =>
        charactersReplacements.charAt(restrictedCharacters.indexOf(c))
      ) // заменяем специальные символы
      .replace()
      .replace(/&/g, '-and-') // заменяем & на 'and'
      .replace(/[^\w\-]+/g, '') // убираем не слова
      .replace(/\-\-+/g, '-') // заменяем несколько - на один -
      .replace(/^-+/, '') // обрезаем - в начале строки
      .replace(/-+$/, '') // обрезаем - в конце строки
  }`;
};

module.exports = urlGenerator;