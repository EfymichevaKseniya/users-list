import React, { createContext } from 'react';

interface IFilterContext {
  filter: string;
  setFilterContext?: (data: string) => void;
}

export const defaultState = {
  filter: '',
  setFilterContext: () => {},
};

const FilterContext = createContext<IFilterContext>(defaultState);

export default FilterContext;
