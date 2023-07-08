import { useEffect, useState } from 'react';
import {
  CloseButton,
  ModalBack,
  ModalBody,
  ModalBox,
  ModalContainer,
  ModalTitle,
} from '../../utils/components/ModalStyles';

interface IModal {
  title?: string;
  msg: string;
  isAuto: boolean;
}

function Modal({ title, msg, isAuto }: IModal) {
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    if (isAuto) {
      const timeout = setTimeout(() => {
        setShowModal(false);
        clearTimeout(timeout);
      }, 1500);
    }
  }, []);

  const handleCloseModal = () => setShowModal(false);

  return (
    <ModalContainer style={{ display: showModal ? '' : 'none' }}>
      {!isAuto && <ModalBack onClick={handleCloseModal} />}
      <ModalBox>
        {title && (
          <ModalTitle>
            {title}
            {!isAuto && (
              <CloseButton onClick={handleCloseModal}>
                <i className="fa-solid fa-times" />
              </CloseButton>
            )}
          </ModalTitle>
        )}
        <ModalBody>{msg}</ModalBody>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
