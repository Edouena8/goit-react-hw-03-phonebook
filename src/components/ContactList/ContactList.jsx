import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import { 
    ContactWrap, 
    ContactItem 
} from "./ContactList.styled";

const ContactList = ({options, onDeleteContact}) => (
    <ContactWrap>
        {options.map(({id, name, number}) => (
            <ContactItem key={id}>
                <Contact name={name} number={number} onDeleteContact={() => onDeleteContact(id)}/>
            </ContactItem>
        ))}
    </ContactWrap>
);

ContactList.propTypes = {
    options: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;