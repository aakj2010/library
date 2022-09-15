import React, { useEffect } from 'react'
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function CreateBook() {

        const params = useParams()
        const navigate = useNavigate()

        const formik = useFormik({
            initialValues: {
                name: "",
                author: "",
                pages: ""

            },
            validate: (values) => {
                let errors = {};

                if (values.name === "") {
                    errors.name = "Please Enter Name";
                }
                if (values.author === "") {
                    errors.author = "Please Enter Author";
                }
                if (values.pages === "") {
                    errors.pages = "Please Enter No.Of Pages";
                }

                return errors;
            },
            onSubmit: async (values) => {
                let Book = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/Books", values);
                alert("Book Created")
                navigate("/books")
            }
        });

        return (
            <div className="container ">
                <h2 className="text-center">Create Book</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row ">
                        <div className="col-lg-6">
                            <label>Name</label>
                            <input className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                                type={"text"}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                name="name" />
                            <span style={{ color: 'red' }}>{formik.errors.name}</span>
                        </div>
                        <hr />
                        <div className="col-lg-6">
                            <label>Author</label>
                            <input className={`form-control ${formik.errors.author ? `input-error` : ``}`}
                                type={"text"}
                                value={formik.values.author}
                                onChange={formik.handleChange}
                                name="author" />
                            <span style={{ color: 'red' }}>{formik.errors.author}</span>
                        </div>
                        <hr />
                        <div className="col-lg-6">
                            <label>no.Of Pages</label>
                            <input className={`form-control ${formik.errors.pages ? `input-error` : ``}`}
                                type={"text"}
                                value={formik.values.pages}
                                onChange={formik.handleChange}
                                name="pages" />
                            <span style={{ color: 'red' }}>{formik.errors.pages}</span>
                        </div>
                        <hr /><hr />

                        <div className="col-lg-6">
                            <input className="btn btn-primary mt-2"
                                type={"submit"}
                                value="Submit"
                                disabled={!formik.isValid} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    export default CreateBook