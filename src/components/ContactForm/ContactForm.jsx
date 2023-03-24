import React, { Component } from "react";
import PropTypes from "prop-types";
import { 
    FormWrap, 
    LabelWrap, 
    LabelText, 
    FormInput, 
    AddBtn 
} from "./ContactForm.styled";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = evt => {
        const {name, value} = evt.currentTarget;
        this.setState({[name]: value})
    }

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
        name: '',
        number: '',
        })
    }

    render() {
      const {name, number} = this.state;
      
        return (
        <FormWrap onSubmit={this.handleSubmit}>
          <LabelWrap htmlFor="name">
            <LabelText>Name</LabelText>
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelWrap>

          <LabelWrap htmlFor="number">
            <LabelText>Number</LabelText>
            <FormInput
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelWrap>

          <AddBtn type="submit">Add contact</AddBtn>
        </FormWrap>
        )
    }
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;