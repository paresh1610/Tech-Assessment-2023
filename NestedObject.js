function getValueFromNestedObject(obj, key) {

  const keys = key.split('.');

  let value = obj;

  for (const nestedKey of keys) {
    value = value?.[nestedKey];
    if (value === undefined) {
      return undefined;
    }
  }

  return value;
}
