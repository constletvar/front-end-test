import { createContext, FC, useContext, useEffect, useState } from "react";

interface MinicartItem {
  id: number;
  quantity: number;
}

interface MinicartContextData {
  items: MinicartItem[];
  addToCart: (item: number) => void;
}

const MinicartContext = createContext({} as MinicartContextData);

export const MinicartProvider: FC = ({
  children
}) => {

  const [items, setItems] = useState<MinicartItem[]>([]);

  const saveOnLocalStorage = (items: MinicartItem[]) => {
    localStorage.setItem(process.env.REACT_APP_CART_STORAGE_KEY || '@corebizteststore:cart', JSON.stringify(items));
  }

  const loadFromLocalStorage = () => {
    const items = localStorage.getItem(process.env.REACT_APP_CART_STORAGE_KEY || '@corebizteststore:cart');

    if (!items) return;

    const parsedItems = JSON.parse(items);

    setItems(parsedItems);
  }

  const addToCart = (id: number) => {
    const itemIndex = items.findIndex(i => i.id === id);

    if (itemIndex === -1) {
      const newItem = {
        id,
        quantity: 1
      }

      const newItems = [...items, newItem];

      setItems(newItems);
      saveOnLocalStorage(newItems);
    } else {
      const newItems = [...items];
      newItems[itemIndex].quantity++;
      setItems(newItems);
      saveOnLocalStorage(newItems);
    }
  }

  useEffect(() => {
    loadFromLocalStorage();
  }, [])

  return (
    <MinicartContext.Provider value={{ items, addToCart }}>
      {children}
    </MinicartContext.Provider>
  )
}

export const useMinicart = () => useContext(MinicartContext);