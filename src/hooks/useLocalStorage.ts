import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue?: any) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      if (item) {
        return JSON.parse(item);
      } if (initialValue) {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
      return null;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    const handleChange = ({ key: storageKey, oldValue, newValue }: StorageEvent) => {
      console.log({
        oldValue, newValue,
      });
      if (storageKey === key) {
        setStoredValue(newValue ? JSON.parse(newValue) : null);
      }
    };
    window.addEventListener(
      'storage',
      handleChange,
      false,
    );

    return () => window.removeEventListener('storage', handleChange);
  }, [key]);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
