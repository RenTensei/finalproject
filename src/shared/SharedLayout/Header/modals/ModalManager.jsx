import { useModal } from '../../../../context/ModalContext';
import ModalGoal from './ModalGoal';
import ModalWeight from './ModalWeight';
import ModalUser from './ModalUser';
import ModalMenuTablet from './ModalMenuTablet';

const ModalList = {
  ModalGoal,
  ModalWeight,
  ModalUser,
  ModalMenuTablet,
};

const ModalManager = () => {
  const { modal, closeModal } = useModal();

  if (!modal) {
    return null;
  }
  const Modal = ModalList[modal.name];

  return <Modal onClose={closeModal} />;
};

export default ModalManager;