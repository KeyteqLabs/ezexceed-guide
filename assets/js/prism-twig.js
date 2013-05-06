Prism.languages.twig = {
    'keyword': /(\{\%\s\w*)|(\%\})|with/g,
    'operator': /('|")\w+\1\s?\:/g,
    'boolean': /\b(true|false)\b/g,
    'string': /[^\}\{]/g
};
