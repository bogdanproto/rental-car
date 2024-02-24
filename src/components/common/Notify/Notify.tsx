import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectError } from 'services/redux/selectors';

export const Notify = () => {
  const error = useTypeSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return <ToastContainer />;
};
