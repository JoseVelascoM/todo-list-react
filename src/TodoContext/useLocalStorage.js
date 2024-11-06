import { useState, useEffect } from 'react';

export function useLocalStorage(itemName, initialValue) {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {
        let parsedItems;
        const localStorageItems = localStorage.getItem(itemName);

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }

        setItems(parsedItems);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log('error: ', error);
      setError(true);
      setLoading(false);
    }
  }, []);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  }

  return { items, saveItems, loading, error };
}