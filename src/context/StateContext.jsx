import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  // show cart or not
  const [cart, setCart] = useState(false);

  // to show the notification when adding sth to the cart
  const [notify, setNotify] = useState(false);

  // what's in the cart
  const [cartItems, setCartItems] = useState([]);

  // what's the total price
  const [totalPrice, setTotalPrice] = useState();

  // total cart quantities
  const [totalQuant, setTotalQuant] = useState();

  // product page quant
  const [qty, setQty] = useState(1);

  return (
    <MyContext.Provider
      value={{
        cart,
        setCart,
        notify,
        setNotify,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuant,
        setTotalQuant,
        qty,
        setQty,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

export const useStateContext = () => {
  return useContext(MyContext);
};
