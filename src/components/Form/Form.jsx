import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import resetImage from '../../image/reset.png';
import css from './Form.module.css';

const ContactForm = () => {
  const [code, setCode] = useState('');
  const [messageActive, setMessageActive] = useState(false);

  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    comments: '',
    code: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(namePattern, 'Only latin is allowed')
      .min(3, 'Minimum 3 characters')
      .max(20, 'Maximum 20 characters')
      .required('Name is required'),
    email: Yup.string()
      .matches(emailPattern, 'Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phonePattern, 'Format XXX-XXX-XXXX')
      .required('Phone is required'),
    code: Yup.string()
      .test('code-match', 'Invalid code', function (value) {
        return value === code;
      })
      .required('Type the code'),
  });

  const randomCode = () => {
    const newCode = Math.random().toString(36).substring(3, 9);
    setCode(newCode);
  };

  useEffect(() => {
    randomCode();
  }, []);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form data', values);
    resetForm();
    setMessageActive(true);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, resetForm }) => (
        <Form>
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <ErrorMessage name="name" component="span" className={css.error} />
            <Field
              className={css.input}
              type="text"
              id="name"
              name="name"
              placeholder="You name"
            />
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <ErrorMessage name="email" component="span" className={css.error} />
            <Field
              className={css.input}
              type="email"
              id="email"
              name="email"
              placeholder="You email"
            />
          </div>
          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor="phone">
              Phone
            </label>
            <ErrorMessage name="phone" component="span" className={css.error} />
            <Field
              className={css.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="You phone"
            />
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="comments" className={css.label}>
              Comments:
            </label>
            <Field
              as="textarea"
              name="comments"
              className={css.textarea}
              placeholder="Comments"
            />
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="code" className={css.label}>
              Type the code:
              <span className={css.typeText}>{code}</span>
              <button
                className={css.resetCodeBtn}
                type="button"
                onClick={randomCode}
              >
                <img src={resetImage} alt="Reset" width={24} height={24} />
              </button>
            </label>
            <ErrorMessage name="code" component="span" className={css.error} />
            <Field
              type="text"
              name="code"
              className={css.input}
              placeholder="Code"
            />
          </div>
          {messageActive ? (
            <div className={css.btnWrapper}>
              <p>Thank you! We will contact you shortly!</p>
              <button
                type="button"
                className={css.button}
                onClick={() => setMessageActive(false)}
              >
                Ok
              </button>
            </div>
          ) : (
            <div className={css.btnWrapper}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={css.button}
              >
                Submit Form
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                className={css.button}
                onClick={resetForm}
              >
                Reset Form
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
