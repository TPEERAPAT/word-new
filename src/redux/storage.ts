export const getLocalStorage = (name: string, defaultValue = null) => {
  const value = localStorage.getItem(name);
  if (value === null) return defaultValue;
  return JSON.parse(value);
};

export const setLocalStorage = (name: string, value: any) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const removeLocalStorage = (name: string) => {
  localStorage.removeItem(name);
};

export const getSessionStorage = (name: string, defaultValue = null) => {
  const value = sessionStorage.getItem(name);
  if (value === null) return defaultValue;
  return JSON.parse(value);
};

export const setSessionStorage = (name: string, value: any) => {
  if (typeof window !== 'undefined')
    sessionStorage.setItem(name, JSON.stringify(value));
};

export const removeSessionStorage = (name: string) => {
  sessionStorage.removeItem(name);
};
