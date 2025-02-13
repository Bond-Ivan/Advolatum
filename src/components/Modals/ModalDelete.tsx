import ReactDOM from 'react-dom';
import styles from './ModalDelete.module.css';
import { useState } from 'react';
import ModalDeleteType from './ModalDelete.types';

function ModalDelete({ onClose, onConfirm, cardTitle }: ModalDeleteType) {
    const htmlElement: HTMLElement | null = document.getElementById('modal-root');
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); 
    };

    const handleConfirm = () => {
        setIsVisible(false);
        setTimeout(onConfirm, 300); 
    };

    if (!htmlElement) return null;

    return ReactDOM.createPortal(
        <div className={`${styles.modalOverlay} ${!isVisible ? styles.hidden : ''}`}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={handleClose}>✖</button>
                <p className={styles.text}>Вы действительно хотите удалить товар: {cardTitle}</p>
                <div className={styles.inner}>
                    <button onClick={handleConfirm} className={styles.buttonDelete}>Удалить</button>
                    <button onClick={handleClose} className={styles.buttonCancel}>Отмена</button>
                </div>
            </div>
        </div>,
        htmlElement
    );
};

export default ModalDelete;