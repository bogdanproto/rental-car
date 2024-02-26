import { ModalWindow } from 'components/common';
import { CardDetail } from 'components/common/CardDetail/CardDetail';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { selectModalContent } from 'services/redux/selectors';
import { openModal } from 'services/redux/slice/dataSlice';

export const CardDetailModal = () => {
  const advert = useTypeSelector(selectModalContent);
  const dispatch = useTypeDispatch();

  const handleClose = () => {
    dispatch(openModal(null));
  };

  return (
    <ModalWindow isOpen={advert ? true : false} onClose={handleClose}>
      {advert && <CardDetail advert={advert} />}
    </ModalWindow>
  );
};
