import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'

function Update1() {
  const { id } = useParams()
  const navigate = useNavigate()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      author: "",
      date: "",
      isbn: "",
    },
    validate: (values) => {
      let error = {}

      if (values.title == "") {
        error.title = "Please Enter Title*"
      }
      else if (values.title.length < 5) {
        error.title = "Length Of The Title Should Be More Than 5 Letters*"
      }

      if (values.author == "") {
        error.author = "Please Enter Author Name*"
      }
      else if (values.author.length < 3) {
        error.author = "Length Of The Author Name Should Be More Than 3 Letters*"
      }

      if (values.date == "") {
        error.date = "Please Enter Date Of Publication*"
      }
      else if (values.date.length < 10) {
        error.date = "Enter Date In YYYY-MM-DD Format*"
      }

      if (values.isbn == "") {
        error.isbn = "Please Enter ISBN Number*"
      }
      else if (values.isbn.length < 5) {
        error.isbn = "ISBN Number Should Be a 5 Digit Number*"
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
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1 className='text-center'>Edit Book Details</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2">
            <label htmlFor="title">Title Name:</label>
            <input type="text" name="title" className="form-control" placeholder="Enter Book Title"
              value={formik.values.title} onChange={formik.handleChange}
              style={{
                borderColor: (formik.getFieldMeta("title").error && formik.getFieldMeta("title").touched) && "red"
              }} />

            {formik.getFieldMeta("title").error &&
              formik.getFieldMeta("title").touched ? (
              <span style={{ color: "red" }}>{formik.getFieldMeta("title").error}</span>
            ) : (<span></span>)}

          </div>
          <div className="mb-2">
            <label htmlFor="author">Author Name:</label>
            <input type="text" name="author" className="form-control" placeholder="Enter Author Name"
              value={formik.values.author} onChange={formik.handleChange}
              style={{
                borderColor: (formik.getFieldMeta("author").error && formik.getFieldMeta("author").touched) && "red"
              }} />

            {formik.getFieldMeta("author").error &&
              formik.getFieldMeta("author").touched ? (
              <span style={{ color: "red" }}>{formik.getFieldMeta("author").error}</span>
            ) : (<span></span>)}

          </div>
          <div className="mb-2">
            <label htmlFor="date">Publication Date:</label>
            <input type="text" name="date" id='date' className="form-control" placeholder="Enter Publication Date" pattern="\d{4}-\d{2}-\d{2}"
              value={formik.values.date} onChange={formik.handleChange}
              style={{
                borderColor: (formik.getFieldMeta("date").error && formik.getFieldMeta("date").touched) && "red"
              }} />

            {formik.getFieldMeta("date").error &&
              formik.getFieldMeta("date").touched ? (
              <span style={{ color: "red" }}>{formik.getFieldMeta("date").error}</span>
            ) : (<span></span>)}

          </div>
          <div className="mb-2">
            <label htmlFor="isbn">ISBN:</label>
            <input type="number" name="isbn" className="form-control" placeholder="Enter ISBN "
              value={formik.values.isbn} onChange={formik.handleChange}
              style={{
                borderColor: (formik.getFieldMeta("isbn").error && formik.getFieldMeta("isbn").touched) && "red"
              }} />

            {formik.getFieldMeta("isbn").error &&
              formik.getFieldMeta("isbn").touched ? (
              <span style={{ color: "red" }}>{formik.getFieldMeta("isbn").error}</span>
            ) : (<span></span>)}

          </div>
          <button className="btn btn-primary">Update</button>
          <Link to="/books" className="btn btn-primary ms-3">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update1