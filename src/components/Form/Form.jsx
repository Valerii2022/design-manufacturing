import { useEffect, useState } from 'react';
import css from './Form.module.css';
import { Formik } from 'formik';

const Form = () => {
  const [code, setCode] = useState('');
  const [inputCode, setInputCode] = useState('');

  useEffect(() => {
    randomCode();
  }, []);

  const handleTypeInput = e => {
    setInputCode(e.target.value);
  };

  const randomCode = () => {
    const code = Math.random().toString(36).substring(3, 9);
    setCode(code);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', comments: '' }}
      validate={values => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email format.';
        }

        if (!values.phone) {
          errors.phone = 'Phone is required';
        } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(values.phone)) {
          errors.phone = 'Invalid phone format';
        }

        if (!values.name) {
          errors.name = 'Name is required';
        } else if (!/^[a-zA-Z]+$/i.test(values.name)) {
          errors.name = 'Invalid name format';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName" className={css.label}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Your name"
            className={css.input}
          />
          {errors.name && touched.name && errors.name}
          <label htmlFor="userEmail" className={css.label}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Your email"
            className={css.input}
          />
          {errors.email && touched.email && errors.email}
          <label htmlFor="userPhone" className={css.label}>
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            placeholder="Your phone"
            className={css.input}
          />
          {errors.phone && touched.phone && errors.phone}
          <label htmlFor="comments" className={css.label}>
            Comments:
          </label>
          <textarea
            type="textarea"
            name="comments"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comments}
            className={css.textarea}
          ></textarea>
          <label htmlFor="code" className={css.label}>
            Type the code:
            <span className={css.typeText}>{code}</span>
          </label>
          <input
            value={inputCode}
            onChange={handleTypeInput}
            type="text"
            className={css.input}
            id="type"
            name="code"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${css.button} ${css.active}`}
          >
            Submit Form
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
