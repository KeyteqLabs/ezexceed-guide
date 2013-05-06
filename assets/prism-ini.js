Prism.languages.ini = {
    'comment': /\#.*/,
    'string': /("|'=)(\\?.)*?\1/g,
    'keyword': /\B\[.+\]\B/g,
    'string': /.+\=/g
};
