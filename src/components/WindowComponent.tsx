import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const RenderInWindow = (props: any) => {
  const [container, setContainer] = useState<any>(null);
  const newWindow = useRef<any>(null);

  useEffect(() => {
    // Create container element on client-side
    setContainer(document.createElement('div'));
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // When container is ready
    if (container) {
      // Create window
      newWindow.current = window.open(
        '/',
        'MyWindow',
        '"height=640,width=960,toolbar=no,menubar=no,scrollbars=no,location=no,status=no"',
      );
      // Append container
      newWindow.current.document.body.appendChild(container);

      // Save reference to window for cleanup
      const curWindow = newWindow.current;

      // Return cleanup function
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};

export default RenderInWindow;
