import { useEffect, useRef } from 'react';

const useEventListener = (
  eventType: string,
  callback: (event: Event) => void,
  element: any = Window
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (event: Event) => callbackRef.current(event);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};

export default useEventListener;
