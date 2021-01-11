import React from 'react';
import Modal from 'react-modal';
import BalanceSheet from './BalanceSheet';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '90%',
        width: '20%'
    }
};



function PopUp(props) {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <BalanceSheet {...props} />
            </Modal>
        </div>
    );
}

// ReactDOM.render(<App />, appElement);

export default PopUp