/**
 *
 *  This is used to remove a session or local storage value
 *
 */

export default function RemoveStorageValue(storageType, variableName) {
  // Removes a sessionStorage value
  if (storageType == "session") {
    sessionStorage.removeItem(variableName);
  }

  // Removes a localStorage value
  if (storageType == "local") {
    localStorage.removeItem(variableName);
  }
}
