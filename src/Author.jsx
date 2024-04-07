import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Author() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://660ab523ccda4cbc75db9742.mockapi.io/formik")
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("Would you want to delete")
        if (confirm) {
            axios.delete("https://660ab523ccda4cbc75db9742.mockapi.io/formik/" + id)
                .then(res => {
                    location.reload();
                }).catch(err => console.log(err))
        }
    }
    return (
            <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 w-100'>
                <h1>List Of Authors</h1>
                <div className='w-75 rounded bg-white border shadow p-4'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>AUTHOR</th>
                                <th>DATE OF BIRTH</th>
                                <th>BIOGRAPHY</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, i) => {
                                    return <tr key={i}>
                                        <td>{d.author}</td>
                                        <td>{d.dob}</td>
                                        <td>{d.biography}</td>
                                        <td>
                                            <Link to={`/updateauthor/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                            <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger me-2'>Delete</button>
                                        </td>


                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
    )
}

export default Author