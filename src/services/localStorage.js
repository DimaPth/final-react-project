export const LocalStorageService = {
  setItems: (items) => {
    Object.entries(items).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  },
  deleteItems: (itemsKeys) => {
    itemsKeys.forEach((key) => {
      localStorage.removeItem(key);
    });
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  getItems: (keys) => {
    const items = {};
    keys.forEach((key) => {
      items[key] = LocalStorageService.getItem(key);
    });
  },
};
