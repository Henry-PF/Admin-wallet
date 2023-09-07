import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Await, Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import swal from "sweetalert";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [access, setAccess] = useState(false);
    const [showPwd, setShowPwd] = useState(false);

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const validate = () => {
        const regexEmail = /^[^@]{1,35}@[^@]+\.[a-zA-Z]{2,}$/;
        const regexPassword = /^(?=\w*\d)(?=\w*[a-z])\S{8,16}$/
            ;
        //     Contiene al menos un dígito.
        // Contiene al menos una letra mayúscula.
        // Contiene al menos una letra minúscula.
        // Tiene una longitud total de 8 a 16 caracteres.
        // Puede contener cualquier carácter que no sea un espacio en blanco.

        const errors = {};

        if (!userData.email) {
            errors.email = "no puede estar vacio";
        } else if (!regexEmail.test(userData.email)) {
            errors.email = "debe ser un mail valido";
        } else if (!userData.password) {
            errors.password = "no puede estar vacio";
        } else if (!regexPassword.test(userData.password)) {
            errors.password = "debe ser una contraseña valida";
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            setAccess(true);
        } else {
            setAccess(false);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
        validate();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userData;

        try {
            const { data } = await axios.post('https://backend-6du3.onrender.com/auth/login', {
                user: email,
                pass: password,
            });

            if (await data.token && data.data.usuarios[0].tipo_usuario.nombre === 'admin') {
                return navigate('/admin');
            } else {
                swal(data.error)
            }
        } catch (error) {
            console.log(error);
        };
    }

    return (
        <div className={styles.loginContainer}>
            <form id="msform" className={styles.msform} onSubmit={handleSubmit}>
                <fieldset>
                    <h2 className={styles.fsTitle}>Inicia Sesion</h2>
                    <br />
                    <div className={styles.fieldGroup}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={userData.email}
                                style={errors.email ? { border: '1px solid red' } : { border: '1px solid grey' }}
                            />
                        </div>
                        <div className={styles.errorContainer}>
                            <span>{errors.email}</span>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.fieldGroup}>
                        <div className={styles.inputGroup} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '500px' }}>
                                <label htmlFor="password">Contraseña</label>
                                <div className={styles.passwordContainer}>
                                    <input
                                        type={showPwd ? "text" : "password"}
                                        name="password"
                                        placeholder="Contraseña"
                                        onChange={handleChange}
                                        value={userData.password}
                                        style={errors.password ? { border: '1px solid red' } : { border: '1px solid grey' }}
                                    />
                                    <div
                                        onClick={() => setShowPwd(!showPwd)}
                                        className={styles.eyeIconContainer}
                                    >
                                        {showPwd ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                height={"1.5rem"}
                                            >
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                height={"1.5rem"}
                                            >
                                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div />
                                </div>
                            </div>

                            <div className={styles.errorContainer}>
                                <span>{errors.password}</span>
                            </div>
                        </div>
                        <div className={styles.divider}></div>
                    </div>
                    <br />
                    <div className={styles.bothButtons}>
                        <button
                            className={styles.buttonLogIn}
                            type="submit"
                        >
                            Ingresa
                        </button>

                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Login