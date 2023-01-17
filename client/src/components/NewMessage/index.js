import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../utils/mutations";

const NewMessage = () => {
    const [formState, setFormState] = useState({
        name: '',
        note: '',
    });
    const [addMessage, { error, data }] = useMutation(ADD_MESSAGE)

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addMessage({
                variables: { ...formState },
            });
            window.location.replace('/Messages')
        } catch (e) {
            console.error(e)
        };
    };
    const styles = {
        form: {
            display: "flex",
            justifyContent: "center"
        }
    }

    return (
        <main style={styles.form}>
            <div className="col-8 col-lg-8" >
                <div className="card">
                    <h4 className="card-header"> Post a New Message </h4>
                    <div className="card-body">
                        {data ? (
                            <p> Success! Redirecting you back to the message board!</p>
                        ) : (
                            <form onSubmit={handleFormSubmit}>
                                <p>Who is this message from?</p>
                                <input
                                    className="w-100 form-input"
                                    placeholder="Name(s)"
                                    name="name"
                                    type="name"
                                    id="name-input"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                                <br></br>
                                <p>What would you like to say?</p>
                                <textarea
                                    className="w-100 form-input"
                                    placeholder="Write your message here"
                                    name="note"
                                    type="note"
                                    id="note-input"
                                    value={formState.note}
                                    onChange={handleChange}
                                />
                                <br></br>
                                <button
                                    className="btn btn-block btn-info"
                                    style={{ cursor: "pointer" }}
                                    type="submit">
                                    Submit
                                </button>
                            </form>
                        )}
                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </main >
    )
}


export default NewMessage