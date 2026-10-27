/**
 * localStorage can throw when the browser blocks site data, so saved
 * preferences are read and written defensively and the site still renders.
 */
export const readStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const writeStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Without storage the choice simply lasts for this visit.
  }
};
