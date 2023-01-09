import React, {useEffect} from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ closeModal, modalIsOpened, children }) => {
    useEffect(() => {
        window.addEventListener('keydown', toggleModal);
        return () => {
            window.removeEventListener('keydown', toggleModal);
        };
    }, [modalIsOpened]);

    const toggleModal = e => {
        if (e.code !== 'Escape') return;
        closeModal();
    };

    const onClick = e => {
        if (e.target === e.currentTarget) closeModal();
    };

    return (
        createPortal(
            <ModalWindow onClick={onClick}>
                <ModalContent>{children}</ModalContent>
            </ModalWindow>, modalRoot
        )
    );
};

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalIsOpened: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};