import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Layout = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім');
    const [formValid, setFormValid] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email');
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.length > 8) {
            setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів');
            if (!e.target.value) {
                setPasswordError('Пароль не може бути порожнім');
            }
        } else {
            setPasswordError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailError && !passwordError) {
            //successful form submission
            alert('Успешно');
            handleClose();
        } else {
            //unsuccessful form submission
        }
    }
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/posts">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
                <Button className="ms-2" onClick={handleShow}>Login</Button>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
                            <Form.Control onChange={e => emailHandler(e)} name="email" value={email} onBlur={e => blurHandler(e)} type="email" placeholder="Введіть е-мейл" />
                            <Form.Text className="text-muted">
                                Ми не розкриваємо ваші дані.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            {(passwordError && passwordDirty) && <div style={{ color: "red" }}>{passwordError}</div>}
                            <Form.Control onChange={e => passwordHandler(e)} name="password" value={password} onBlur={e => blurHandler(e)} type="password" placeholder="Введіть пароль" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Підтвердити
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export { Layout }