import { ChangeEvent, useRef, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { EVENT_TYPE, METHOD } from '../../variables/constants';

export const initialData = {
  firstName: '',
  lastName: '',
  ageGroup: '',
  tab: 1,
};

const useDashboard = () => {
  const [method, setMethod] = useState(METHOD.POPUP);
  const [data, setData] = useLocalStorage('demoData', initialData);
  const [popupData, setPopupData] = useState(initialData);
  const newWindow = useRef<any>(null);
  const channel = new MessageChannel();
  const broadcastChannel = new BroadcastChannel(EVENT_TYPE);

  const handleChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    handleChangeValue(key, event.target.value);
  };

  const handleChangeValue = (key: string, value: any) => {
    const updatedData = {
      ...((method === METHOD.POPUP || method === METHOD.BROADCAST) ? popupData : data),
      [key]: value,
    };
    if (method === METHOD.BROADCAST) {
      setPopupData(updatedData);
      broadcastChannel?.postMessage(updatedData);
    } else if (method === METHOD.POPUP) {
      setPopupData(updatedData);
      newWindow?.current?.postMessage({
        ...updatedData,
        type: EVENT_TYPE,
      }, [channel.port2]);
    } else if (method === METHOD.LOCAL_STORAGE) {
      setData(updatedData);
    }
  };

  const openNewWindow = () => {
    newWindow.current = window.open(
      method === METHOD.POPUP ? '/demo-channel-message' : '/demo-broadcast-channel',
      'MyWindow',
      '"height=640,width=960,toolbar=no,menubar=no,scrollbars=no,location=no,status=no"',
    );
  };
  return {
    data: (method === METHOD.POPUP || method === METHOD.BROADCAST) ? popupData : data,
    handleChange,
    handleChangeValue,
    openNewWindow,
    method,
    setMethod,
  };
};

export default useDashboard;
