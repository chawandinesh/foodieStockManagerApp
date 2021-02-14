import React from 'react';
import {View, Text} from 'react-native';
export const FoodieStockManagerContext = React.createContext(null);
const initialState = {
  welcome: true,
  Protein: [],
  Fats: [],
  Vitamins: [],
  Minerals: [],
  'Fiber and Water': [],
};
export function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <FoodieStockManagerContext.Provider value={{state, setState}}>
      {props.children}
    </FoodieStockManagerContext.Provider>
  );
}
