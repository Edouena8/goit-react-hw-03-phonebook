import PropTypes from 'prop-types';
import { ContactText, DeleteBtn } from "./Contact.styled";

const Contact = ({name, number, onDeleteContact}) => (
    <>
        <ContactText>{name}: {number}</ContactText>
        <DeleteBtn type="button" onClick={onDeleteContact}>Delete</DeleteBtn>
    </>
);

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;