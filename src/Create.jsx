import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'

function Create() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      author: "",
      dob: "",
      biography: "",
      title: "",
      date: "",
      isbn: ""
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

      if (values.title == "") {
        error.title = "Please Enter Title*"
      }
      else if (values.title.length < 5) {
        error.title = "Length Of The Title Should Be More Than 5 Letters*"
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
      console.log(values)
      event.preventDefault()
      console.log(event)
      axios.post("https://660ab523ccda4cbc75db9742.mockapi.io/formik", values)
        .then(res => {
          console.log(res)
          navigate("/author")
        })
        .catch(err => console.log(err))
    }
  });


  return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1 className='text-center'>Add Your List</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name">Author Name:</label>

              <input type="text" name="author" className="form-control" placeholder="Enter Author Name"
                value={formik.values.author}
                onChange={formik.handleChange}
                style={{
                  borderColor: (formik.getFieldMeta("author").error && formik.getFieldMeta("author").touched) && "red"
                }} />

              {formik.getFieldMeta("author").error &&
                formik.getFieldMeta("author").touched ? (
                <span style={{ color: "red" }}>{formik.getFieldMeta("author").error}</span>
              ) : (<span></span>)}

            </div>

            <div className="mb-2">
              <label htmlFor="date">Date Of Birth:</label>

              <input type="text" name="dob" id='date' className="form-control" placeholder="Enter Date Of Birth" pattern="\d{4}-\d{2}-\d{2}"
                value={formik.values.dob}
                onChange={formik.handleChange}
                style={{
                  borderColor: (formik.getFieldMeta("dob").error && formik.getFieldMeta("dob").touched) && "red"
                }} />

              {formik.getFieldMeta("dob").error &&
                formik.getFieldMeta("dob").touched ? (
                <span style={{ color: "red" }}>{formik.getFieldMeta("dob").error}</span>
              ) : (<span></span>)}

            </div>

            <div className="mb-2">
              <label htmlFor="biography">Biography:</label>
              <input type="text" name="biography" className="form-control" placeholder="Enter Biography"
                value={formik.values.biography}
                onChange={formik.handleChange}
                style={{
                  borderColor: (formik.getFieldMeta("biography").error && formik.getFieldMeta("biography").touched) && "red"
                }} />

              {formik.getFieldMeta("biography").error &&
                formik.getFieldMeta("biography").touched ? (
                <span style={{ color: "red" }}>{formik.getFieldMeta("biography").error}</span>
              ) : (<span></span>)}

            </div>
            <div className="mb-2">
              <label htmlFor="title">Book Title:</label>
              <input type="text" name="title" className="form-control" placeholder="Enter Book Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                style={{
                  borderColor: (formik.getFieldMeta("title").error && formik.getFieldMeta("title").touched) && "red"
                }} />

              {formik.getFieldMeta("title").error &&
                formik.getFieldMeta("title").touched ? (
                <span style={{ color: "red" }}>{formik.getFieldMeta("title").error}</span>
              ) : (<span></span>)}

            </div>
            <div className="mb-2">
              <label htmlFor="date">Publication Date:</label>
              <input type="text" name="date" id='date' className="form-control" placeholder="Enter Publication Date" pattern="\d{4}-\d{2}-\d{2}"
                value={formik.values.date}
                onChange={formik.handleChange}
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
              <input type="number" name="isbn" className="form-control" placeholder="Enter ISBN Number"
                value={formik.values.isbn}
                onChange={formik.handleChange}
                style={{
                  borderColor: (formik.getFieldMeta("isbn").error && formik.getFieldMeta("isbn").touched) && "red"
                }} />

              {formik.getFieldMeta("isbn").error &&
                formik.getFieldMeta("isbn").touched ? (
                <span style={{ color: "red" }}>{formik.getFieldMeta("isbn").error}</span>
              ) : (<span></span>)}

            </div>
            <button type='submit' className="btn btn-primary">Submit</button>
            <Link to="/author" className="btn btn-primary ms-3">Back</Link>
          </form>
        </div>
      </div>
  )
}

export default Create