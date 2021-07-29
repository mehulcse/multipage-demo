import { useEffect, useState } from 'react';
import { initialData } from '../Dashboard/dashboard-hook';
import { EVENT_TYPE } from '../../variables/constants';

const useDemo = () => {
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      console.log(event.data);
      if (event?.data?.type === EVENT_TYPE) {
        setChannelData(event.data);
      }
    });
  }, []);

  return {
    data: channelData || initialData,
  };
};

export default useDemo;
