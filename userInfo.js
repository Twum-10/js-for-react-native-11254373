import { processArray, formatArrayStrings } from './arrayManipulation.js';
function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
    throw new Error("The length of both arrays must be the same.");
  }
  return names.map((originalName, index) => {
    return {
      id: index + 1,
      originalName: originalName,
      modifiedName: modifiedNames[index]
    };
  });
}
