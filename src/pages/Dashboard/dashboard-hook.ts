import { ChangeEvent, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const initialData = {
  firstName: '',
  lastName: '',
  ageGroup: '',
  tab: 1,
};

const useDashboard = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const [data, setData] = useLocalStorage('demoData', initialData);
  const channel = new MessageChannel();

  const handleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [key]: event?.target?.value || '',
    });
    if (openWindow) {
      // @ts-ignore
      window.postMessage(data, [channel.port2]);
    }
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
    openWindow,
    setOpenWindow,
  };
};

export default useDashboard;
