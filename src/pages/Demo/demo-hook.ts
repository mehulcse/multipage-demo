import useLocalStorage from '../../hooks/useLocalStorage';

const useDemo = () => {
  const [data] = useLocalStorage('demoData');

  return {
    data,
  };
};

export default useDemo;
