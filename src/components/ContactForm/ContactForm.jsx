import React from "react";
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid'
import css from './Contact-style.module.css'

export const ContactForm = ({ addContact }) => {
    const handleSubmit = ({ name, number }, { resetForm }) => {
        const id = nanoid();

        addContact({ name, number, id });
        resetForm();
    };

    return (
        <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit} >
            <Form className={css.form}>
                <label htmlFor="name" className={css.inputLabel}> <span>Name</span>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Add the name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label htmlFor="number" className={css.inputLabel}><span>Number</span>
                    <Field
                        type="tel"
                        name="number"
                        placeholder="Add the phone number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )





}