import useEventListener from './useEventListener';

const useClickOutside = (ref: any, callback: any) => {
  useEventListener(
    'click',
    (e) => {
      if (ref.current == null || ref.current.contains(e.target)) return;
      callback(e);
    },
    document
  );
};

export default useClickOutside;
