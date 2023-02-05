import React, { useState, useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../utils/mutations'


import Auth from '../utils/auth'

const Login = () => {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);

    const handleChange = (event => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        });
    })

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e)
        }

        setFormState({
            username: '',
            password: '',
        });
    }

    const styles = {
        button: {
            backgroundColor: "#C19AB9",
            padding: ".25%",
            margin: ".5%",
            width: "8rem",
            border: "0px",
            color: "#140600"
        },
        createBtn: {
            backgroundColor: "#C19AB9",
            padding: ".25%",
            margin: ".5%",
            width: "10rem",
            border: "0px",
            color: "#140600"
        },
        background: {
            backgroundColor: "#8BD1E5"
        },
        modalBtn: {
            backgroundColor: "#A650D1",
            border: "0px"
        }
    }

    return (
        <main className='justify-center mb-4'>
            <div className='d-flex justify-content-center'>
                <div style={{ ...styles.background, justifyContent: "center", width: "350px" }} className="card">
                    <h4 className="card-header p-2">Login</h4>
                    <div className="card-body">
                        {data ? (
                            <Navigate to="/" />
                        ) : (
                            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleFormSubmit}>
                                <p >Username:</p>
                                <input
                                    className="form-input"
                                    placeholder="Your username"
                                    name="username"
                                    type="username"
                                    id='username-input'
                                    value={formState.username}
                                    onChange={handleChange}
                                />
                                <br></br>

                                <p >Password:</p>
                                <input
                                    className="form-input"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <br></br>
                                <div className="d-flex flex-wrap justify-content-center">
                                    <button
                                        className="btn btn-block btn-info"
                                        style={{ ...styles.button, cursor: 'pointer' }}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                    <Link to="/">If you are not an admin please return to the home page</Link>
                                </div>
                                {error && (
                                    <div className="my-3 p-3 bg-danger text-white">
                                        {error.message}
                                    </div>
                                )}
                                <br></br>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Login