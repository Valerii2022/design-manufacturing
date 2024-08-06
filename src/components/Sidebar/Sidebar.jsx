import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterContext } from 'context/FilterContext';
import css from './Sidebar.module.css';

const Sidebar = () => {
  const [code, setCode] = useState('');
  const [submitBtn, setSubmitBtn] = useState(true);
  const [inputCode, setInputCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const{setFilter}=useContext(FilterContext)
  const navigate = useNavigate();

  useEffect(() => {
    randomCode();
  }, []);

  const handleProductsLinksClick = e => {
    setFilter(e.target.textContent)
    navigate('/content');
  };

  const randomCode = () => {
    const code = Math.random().toString(36).substring(3, 9);
    setCode(code);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.table(data);
    setInputCode('');
    setSubmitBtn(true);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
  };

  const handleTypeInput = e => {
    setInputCode(e.target.value);
    if (code === e.target.value) {
      setSubmitBtn(false);
      return;
    }
    setSubmitBtn(true);
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.catalog}>
        <h2 className={css.title}>Product Quick Find...</h2>
        <div className={css.linkWrapper} onClick={handleProductsLinksClick}>
          <button type="button" className={css.link}>
            View All
          </button>
          <button type="button" className={css.link}>
            Feed Bunks & Bale Feeders
          </button>
          <button type="button" className={css.link}>
            Feed Through Panels
          </button>
          <button type="button" className={css.link}>
            Sucker Rod Panels & Gates
          </button>
          <button type="button" className={css.link}>
            Freestand Panels & Windbreak
          </button>
          <button type="button" className={css.link}>
            Pipe, Sucker Rods, & Posts
          </button>
          <button type="button" className={css.link}>
            Calf Shelter & Hopper Cones
          </button>
          <button type="button" className={css.link}>
            Calf Catcher
          </button>
        </div>
      </div>
      <div className={css.formWrapper}>
        <h2 className={css.title}>Contact Us</h2>
        <p className={css.text}>
          Simply fill out and submit the form below to send us an email.{' '}
          <span>All fields are required.</span>
        </p>
        <form action="#" onSubmit={handleSubmitForm}>
          <div className={css.inputWrap}>
            <label htmlFor="userName" className={css.label}>
              Name:
            </label>
            <input
              required
              pattern="[a-zA-Zа-яА-Я]+ ?[a-zA-Zа-яА-Я]+"
              title="Only letters are allowed"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              type="text"
              className={css.input}
              id="userName"
              name="name"
            />
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="userEmail" className={css.label}>
              Email:
            </label>
            <input
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              type="email"
              className={css.input}
              id="userEmail"
              name="email"
            />
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="userPhone" className={css.label}>
              Phone:
            </label>
            <input
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Phone need to be at format of 000-000-0000"
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
              }}
              type="tel"
              className={css.input}
              id="userPhone"
              name="phone"
            />
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="comments" className={css.label}>
              Comments:
            </label>
            <textarea
              value={comments}
              onChange={e => {
                setComments(e.target.value);
              }}
              type="textarea"
              className={css.textarea}
              id="comments"
              name="comments"
            ></textarea>
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="code" className={css.label}>
              Type the words:
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
          </div>
          {submitBtn ? (
            <button
              disabled={true}
              type="submit"
              className={`${css.button} ${css.disabled}`}
            >
              Submit Form
            </button>
          ) : (
            <button type="submit" className={`${css.button} ${css.active}`}>
              Submit Form
            </button>
          )}
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
