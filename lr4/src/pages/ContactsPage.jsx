import React, { useState } from 'react';

const Contacts = () => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [feedbackError, setFeedbackError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if (!feedback) {
            setFeedbackError(true);
        } else {
            setFeedbackError(false);
        }
        if (email && feedback) {
            // submit form
        }
    }

    return (
        <div>
            <div className="col-md-12">
                <h3>Наші контакти</h3>
                <p>Якщо у вас є запитання або пропозиції, будь ласка, зв'яжіться з нами за наступними контактами:</p>
                <ul>
                    <li>Телефон: 555-555-5555</li>
                    <li>Email: info@назвасайту.com</li>
                    <li>Адреса: вул. Прикладна, 1, м. Київ, Україна</li>
                </ul>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        {emailError && <p className="text-danger">Будь ласка, введіть свою електронну адресу.</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="feedback">Відгук:</label>
                        <textarea className="form-control" id="feedback" value={feedback} onChange={e => setFeedback(e.target.value)}></textarea>
                        {feedbackError && <p className="text-danger">Будь ласка, залиште свій відгук.</p>}
                    </div>
                    <button type="submit" className="btn btn-primary">Надіслати</button>
                </form>
            </div>
        </div>
    )
}

export { Contacts }