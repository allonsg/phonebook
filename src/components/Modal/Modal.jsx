import React, {useCallback, useEffect} from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ closeModal, modalIsOpened, children }) => {
    const toggleModalCallback = useCallback(
        (e) => {
            if (e.code !== 'Escape') return;
            closeModal();
        },
        [closeModal],
    );

    useEffect(() => {
        window.addEventListener('keydown', toggleModalCallback);
        return () => {
            window.removeEventListener('keydown', toggleModalCallback);
        };
    }, [modalIsOpened, toggleModalCallback]);

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