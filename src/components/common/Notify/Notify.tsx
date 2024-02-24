import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';

export const Notify = () => {
  const { error } = useTypeSelector(selectNotify);

  useEffect(() => {
    if (error && error !== errorMessage.user_unauthorized_token) {
      toast.error(error);
    }
  }, [error]);

  return <ToastContainer />;
};
