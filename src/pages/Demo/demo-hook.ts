import { initialData } from '../Dashboard/dashboard-hook';
import useLocalStorage from '../../hooks/useLocalStorage';

const useDemo = () => {
  const [data] = useLocalStorage('demoData');

  return {
    data: data || initialData,
  };
};

export default useDemo;
