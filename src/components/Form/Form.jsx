import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Form.module.css';

const ContactForm = () => {
  // const [code, setCode] = useState('');
  // const [inputCode, setInputCode] = useState('');

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const initialValues = { name: '', email: '', phone: '', comments: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .email('Invalid name format')
      .required('Name is required'),
    email: Yup.string()
      // .email('Invalid email address')
      .matches(emailPattern, 'Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .email('Invalid phone format')
      .required('Phone is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    setSubmitting(false);
  };

  // useEffect(() => {
  //   randomCode();
  // }, []);

  // const handleTypeInput = e => {
  //   setInputCode(e.target.value);
  // };

  // const randomCode = () => {
  //   const code = Math.random().toString(36).substring(3, 9);
  //   setCode(code);
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label className={css.label} htmlFor="name">
              Name
              <ErrorMessage name="name" component="div" className={css.error} />
            </label>
            <Field
              className={css.input}
              type="text"
              id="name"
              name="name"
              placeholder="You name"
            />
          </div>
          <div>
            <label className={css.label} htmlFor="email">
              Email
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </label>
            <Field
              className={css.input}
              type="email"
              id="email"
              name="email"
              placeholder="You email"
            />
          </div>
          <div>
            <label className={css.label} htmlFor="phone">
              Phone
              <ErrorMessage
                name="phone"
                component="div"
                className={css.error}
              />
            </label>
            <Field
              className={css.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="You phone"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${css.button} ${css.active}`}
          >
            Submit Form
          </button>
        </Form>
      )}
    </Formik>
    // <Formik
    //   initialValues={initialValues}
    //   // validate={values => {
    //   //   const errors = {};

    //   //   if (!values.email) {
    //   //     errors.email = 'Email is required';
    //   //   } else if (
    //   //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //   //   ) {
    //   //     errors.email = 'Invalid email format.';
    //   //   }

    //   //   if (!values.phone) {
    //   //     errors.phone = 'Phone is required';
    //   //   } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(values.phone)) {
    //   //     errors.phone = 'Invalid phone format';
    //   //   }

    //   //   if (!values.name) {
    //   //     errors.name = 'Name is required';
    //   //   } else if (!/^[a-zA-Z]+$/i.test(values.name)) {
    //   //     errors.name = 'Invalid name format';
    //   //   }

    //   //   return errors;
    //   // }}
    //   validationSchema={validationSchema}
    //   onSubmit={onSubmit}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //     isSubmitting,
    //   }) => (
    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="userName" className={css.label}>
    //         Name:
    //       </label>
    //       <input
    //         type="text"
    //         name="name"
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         value={values.name}
    //         placeholder="Your name"
    //         className={css.input}
    //       />
    //       {/* {errors.name && touched.name && <p>ops</p>} */}
    //       <label htmlFor="userEmail" className={css.label}>
    //         Email:
    //       </label>
    //       <input
    //         type="email"
    //         name="email"
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         value={values.email}
    //         placeholder="Your email"
    //         className={css.input}
    //       />
    //       {/* {errors.email && touched.email && errors.email} */}
    //       <label htmlFor="userPhone" className={css.label}>
    //         Phone:
    //       </label>
    //       <input
    //         type="tel"
    //         name="phone"
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         value={values.phone}
    //         placeholder="Your phone"
    //         className={css.input}
    //       />
    //       {/* {errors.phone && touched.phone && errors.phone} */}
    //       <label htmlFor="comments" className={css.label}>
    //         Comments:
    //       </label>
    //       <textarea
    //         type="textarea"
    //         name="comments"
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         value={values.comments}
    //         className={css.textarea}
    //       ></textarea>
    //       <label htmlFor="code" className={css.label}>
    //         Type the code:
    //         <span className={css.typeText}>{code}</span>
    //       </label>
    //       <input
    //         value={inputCode}
    //         onChange={handleTypeInput}
    //         type="text"
    //         className={css.input}
    //         id="type"
    //         name="code"
    //       />
    //       <button
    //         type="submit"
    //         disabled={isSubmitting}
    //         className={`${css.button} ${css.active}`}
    //       >
    //         Submit Form
    //       </button>
    //     </form>
    //   )}
    // </Formik>
  );
};

export default ContactForm;
