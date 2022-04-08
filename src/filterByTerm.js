function filterByTerm(inputArr, searchTerm) {
  if (!inputArr.length) throw Error("inputArr cannot be empty"); 
  if (searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function (arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
  return [];
}

module.exports = filterByTerm;s
