import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'

function Update2() {
    const { id } = useParams()
    const navigate = useNavigate()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            author: "",
            dob: "",
            biography: "",
        },
        validate: (values) => {
            let error = {}

            if (values.author == "") {
                error.author = "Please Enter Author Name*"
            }
            else if (values.author.length < 3) {
                error.author = "Length Of The Author Name Should Be More Than 3 Letters*"
            }

            if (values.dob == "") {
                error.dob = "Please Enter Date Of Birth*"
            }
            else if (values.dob.length < 10) {
                error.dob = "Enter DOB In YYYY-MM-DD Format*"
            }

            if (values.biography == "") {
                error.biography = "Please Enter Biograply*"
            }
            else if (values.biography.length < 10) {
                error.biography = "Length Of The Biography Should Be More Than 15 Letters*"
            }
            return error

        },

        onSubmit: (values) => {
            event.preventDefault()
            axios.put("https://660ab523ccda4cbc75db9742.mockapi.io/formik/" + id, values)
                .then(res => {
                    console.log(res)
                    navigate("/author")
                })
                .catch(err => console.log(err))
        }
    })



    useEffect(() => {
        axios.get("https://660ab523ccda4cbc75db9742.mockapi.io/formik/" + id)
            .then(res => {
                formik.setValues(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1 className='text-center'>Edit Author Details</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Author Name:</label>
                        <input type="text" name="author" className="form-control" placeholder="Enter Author Name"
                            value={formik.values.author} onChange={formik.handleChange}
                            style={{
                                borderColor: (formik.getFieldMeta("author").error && formik.getFieldMeta("author").touched) && "red"
                            }}
                        />
                        {formik.getFieldMeta("author").error &&
                            formik.getFieldMeta("author").touched ? (
                            <span style={{ color: "red" }}>{formik.getFieldMeta("author").error}</span>
                        ) : (<span></span>)}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="dob">Date of Bith:</label>
                        <input type="text" name="dob" className="form-control" placeholder="Enter Date Of Birth" pattern="\d{4}-\d{2}-\d{2}"
                            value={formik.values.dob} onChange={formik.handleChange}
                            style={{
                                borderColor: (formik.getFieldMeta("dob").error && formik.getFieldMeta("dob").touched) && "red"
                            }}
                        />
                        {formik.getFieldMeta("dob").error &&
                            formik.getFieldMeta("dob").touched ? (
                            <span style={{ color: "red" }}>{formik.getFieldMeta("dob").error}</span>
                        ) : (<span></span>)}

                    </div>
                    <div className="mb-2">
                        <label htmlFor="biography">Biography:</label>
                        <input type="text" name="biography" className="form-control" placeholder="Enter Biography"
                            value={formik.values.biography} onChange={formik.handleChange}
                            style={{
                                borderColor: (formik.getFieldMeta("biography").error && formik.getFieldMeta("biography").touched) && "red"
                            }}
                        />
                        {formik.getFieldMeta("biography").error &&
                            formik.getFieldMeta("biography").touched ? (
                            <span style={{ color: "red" }}>{formik.getFieldMeta("biography").error}</span>
                        ) : (<span></span>)}
                    </div>
                    <button className="btn btn-primary">Update</button>
                    <Link to="/author" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>

    )
}

export default Update2