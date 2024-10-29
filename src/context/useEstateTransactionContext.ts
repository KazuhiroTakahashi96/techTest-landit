import { useContext } from 'react';
import { EstateTransactionContext } from '../providers/EstateTransactionProvider';

export const useEstateTransactionContext = () => {
  return useContext(EstateTransactionContext);
};
