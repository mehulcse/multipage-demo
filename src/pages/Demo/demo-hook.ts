import { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const useDemo = () => {
  const [data] = useLocalStorage('demoData');
  const [channelData, setChannelData] = useState({});

  useEffect(() => {
    window.addEventListener('message', (event) => {
      console.log('Incoming message');
      console.log(event.data);
      setChannelData(event.data);
    });
  }, []);

  return {
    data: data || channelData,
  };
};

export default useDemo;
