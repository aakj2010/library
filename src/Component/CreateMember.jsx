import React, { useEffect } from 'react'
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function CreateMember() {

    const params = useParams()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            number: "",
            email: ""

        },
        validate: (values) => {
            let errors = {};

            if (values.name === "") {
                errors.name = "Please Enter Name";
            }
            if (values.gender === "") {
                errors.gender = "Please Enter Gender";
            }
            if (values.number === "") {
                errors.number = "Please Enter Phone Number";
            }
            if (values.email === "") {
                errors.email = "Please Enter Email";
            }

            return errors;
        },
        onSubmit: async (values) => {
           let Member = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/Teachers", values);
            alert("Member Created")
            navigate("/members")
        }
    });

    return (
        <div className="container">
            <h2 className="text-center">Create Member</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Name</label>
                        <input className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                            type={"text"}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name" />
                        <span style={{ color: 'red' }}>{formik.errors.name}</span>
                    </div>
                    <div className="col-lg-6">
                        <label>Gender</label>
                        <input className={`form-control ${formik.errors.gender ? `input-error` : ``}`}
                            type={"text"}
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            name="gender" />
                        <span style={{ color: 'red' }}>{formik.errors.gender}</span>
                    </div>
                    <div className="col-lg-6">
                        <label>Phone Number</label>
                        <input className={`form-control ${formik.errors.number ? `input-error` : ``}`}
                            type={"text"}
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            name="number" />
                        <span style={{ color: 'red' }}>{formik.errors.number}</span>
                    </div>
                    <div className="col-lg-6">
                        <label>Email</label>
                        <input className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                            type={"text"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email" />
                        <span style={{ color: 'red' }}>{formik.errors.email}</span>
                    </div>

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

export default CreateMember