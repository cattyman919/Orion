class arraySeparator {
  static SeparatorFunction(projectLanguanges) {
    let languangesArray = [];
    let lastSeparatorIndex = 0;
    let separatorFound = false;
    let separator = ",";
    let key;

    for (key in projectLanguanges) {
      let stringLanguage;
      if (projectLanguanges[key] === separator) {
        separatorFound = true;

        stringLanguage = projectLanguanges.slice(lastSeparatorIndex, key);

        languangesArray.push(stringLanguage);

        key++;
        lastSeparatorIndex = key;
      }

      if (separatorFound && Number(key) === projectLanguanges.length - 1) {
        key++;
        stringLanguage = projectLanguanges.slice(lastSeparatorIndex, key);
        languangesArray.push(stringLanguage);
      } else if (
        !separatorFound &&
        Number(key) === projectLanguanges.length - 1
      ) {
        languangesArray.push(projectLanguanges);
      }
    }

    return languangesArray;
  }
}

module.exports = arraySeparator;
