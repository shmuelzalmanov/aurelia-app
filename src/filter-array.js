export class FilterValueConverter {
  toView(array, property, query) {
    if (query === void 0 || query === null || query === "" || !Array.isArray(array)) {
      return array;
    }

    let properties = (Array.isArray(property) ? property : [property]),
      term = String(query);

    return array.filter((entry) =>
      properties.some((prop) =>
        String(entry[prop]) == term));
  }
}