const urlGenerator= require('./urlGenerator.js');
const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

it ('generate url string', () => {
    expect(typeof urlGenerator('řâñđöḿ text')).toBe('string');
    expect(urlGenerator('řâñđöḿ text')).toMatch(urlRegEx);
})