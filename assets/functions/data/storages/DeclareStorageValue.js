/**
 *
 *  This is used to declare a session or local storage value
 *
 */

export default function DeclareStorageValue(
  storageType,
  variableName,
  variableValue
) {
  // Declares a sessionStorage value
  if (storageType == "session") {
    sessionStorage.setItem(variableName, variableValue);
  }

  // Declares a localStorage value
  if (storageType == "local") {
    localStorage.setItem(variableName, variableValue);
  }
}
