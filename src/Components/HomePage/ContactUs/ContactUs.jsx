import React, { useState, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import axios from 'axios';
import styles from './ContactUs.module.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const inputs = document.querySelectorAll(`.${styles.input}`);

        const focusFunc = (event) => {
            let parent = event.target.parentNode;
            parent.classList.add(styles.inputContainerFocus);
        };

        const blurFunc = (event) => {
            let parent = event.target.parentNode;
            if (event.target.value === "") {
                parent.classList.remove(styles.inputContainerFocus);
            }
        };

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        // Cleanup event listeners on unmount
        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("focus", focusFunc);
                input.removeEventListener("blur", blurFunc);
            });
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/contactus/save', {
                name,
                email,
                phone,
                message,
            });
            setEmailSent(true);
            setError('');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            window.alert('Message sent successfully! Our Team Will Contact You Shortly!');
        } catch (error) {
            console.error("There was an error sending the message!", error);
            setEmailSent(false);
            alert('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <div className={styles.backgroundcontactform}>
            <div className={styles.container}>
                <span className={styles.bigCircle}></span>
                <img src="img/shape.png" className={styles.square} alt="Background Shape" />
                <div className={styles.form}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.contactInfoTitle}>Let's get in touch</h3>
                        <p className={styles.text}>
                            We'd love to hear from you!<br />
                            At Flavörs, your feedback, questions, and suggestions are important to us.
                        </p>

                        <div className={styles.info}>
                            <div className={styles.information}>
                                <IoLocationSharp className={styles.icon} />
                                <p className={styles.text}>Sri Krishna College Of Technology, Coimbatore, 641042</p>
                            </div>
                            <div className={styles.information}>
                                <IoMdMail className={styles.icon} />
                                <p className={styles.textmail}>727822tuit157@skct.edu.in</p>
                            </div>
                        </div>

                        <div className={styles.socialMedia}>
                            <p className={styles.socialMediaText}>Connect with us :</p>
                            <div className={styles.socialIcons}>
                                <FcGoogle className={styles.socialicon} />
                                <FaMeta className={styles.socialicon} />
                                <BsTwitterX className={styles.socialicon} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <span className={`${styles.circle} ${styles.circleOne}`}></span>
                        <span className={`${styles.circle} ${styles.circleTwo}`}></span>

                        <form className='contactusform' onSubmit={handleSubmit} autoComplete="off">
                            <h3 className={styles.title}>Contact us</h3>
                            <div className={styles.inputContainer}>
                                <input
                                    type="text"
                                    name="name"
                                    className={styles.input}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    aria-label="Name"
                                    required
                                />
                                <label className={styles.label}>Name</label>
                                <span className={styles.span}>Name</span>
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="email"
                                    name="email"
                                    className={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    aria-label="Email"
                                    required
                                />
                                <label className={styles.label}>Email</label>
                                <span className={styles.span}>Email</span>
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="tel"
                                    name="phone"
                                    className={styles.input}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    aria-label="Phone"
                                    required
                                />
                                <label className={styles.label}>Phone</label>
                                <span className={styles.span}>Phone</span>
                            </div>
                            <div className={`${styles.inputContainer} ${styles.textarea}`}>
                                <label className={styles.textareaLabel}>Message</label>
                                <textarea
                                    name="message"
                                    className={styles.input}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    aria-label="Message"
                                    required
                                ></textarea>
                                <span className={styles.span}>Message</span>

                                <span className={`${styles.circle} ${styles.circleOne}`}></span>
                                <span className={`${styles.circle} ${styles.circleTwo}`}></span>
                            </div>
                            <input type="submit" value="Let's Talk" className={styles.btn} />
                            {error && <p className={styles.errorMessage}>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
