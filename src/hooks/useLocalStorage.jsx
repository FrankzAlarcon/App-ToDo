import React, { useState, useEffect } from 'react';

function useLocalStorage(keyLocalStorage, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try{
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(keyLocalStorage);
        let parsedItem;
      
        if(localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          localStorage.setItem(keyLocalStorage, JSON.stringify(initialValue));
          parsedItem = [];
        }
        setItem(parsedItem);
        setLoading(false);
      }, 1500)
    } catch (error) {
      setError(true);
    }
  }, []);

  
  const saveItem = (newItem) => {
    try {
      setItem(newItem);
      localStorage.setItem(keyLocalStorage, JSON.stringify(newItem));
    } catch (error) {
      setError(true);
    }
  }
  return {
    item,
    saveItem,
    loading,
    error,
    setItem
  }
}

export default useLocalStorage;