import { ChangeEvent } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const initialData = {
  firstName: '',
  lastName: '',
  ageGroup: '',
  tab: 1,
};

const useDashboard = () => {
  const [data, setData] = useLocalStorage('demoData', initialData);

  const handleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [key]: event?.target?.value || '',
    });
  };

  const handleChangeValue = (key: string, value: any) => {
    setData({
      ...data,
      [key]: value || '',
    });
  };

  return {
    data,
    handleChange,
    handleChangeValue,
  };
};

export default useDashboard;
