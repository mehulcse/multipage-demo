import { useEffect, useState } from 'react';
import { initialData } from '../Dashboard/dashboard-hook';
import { EVENT_TYPE } from '../../variables/constants';

const useDemo = () => {
  const [channelData, setChannelData] = useState(null);

  useEffect(() => {
    const channel = new BroadcastChannel(EVENT_TYPE);
    channel.addEventListener('message', (event) => {
      setChannelData(event.data);
    });
  //  @ts-ignore
  }, []);

  return {
    data: channelData || initialData,
  };
};

export default useDemo;
