const text2tables = (text) => {
  if(!text)
    return {};

  return text.split(' ').reduce(
    (prev, word) => {
      if(word in prev)
        return {...prev, [word]: prev[word]+1 };
      return {...prev, [word]: 1 };
    }, {})
}

module.exports = text2tables;