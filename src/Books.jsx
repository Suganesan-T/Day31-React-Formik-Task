import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Books() {

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
                <h1>List Of Books</h1>
                <div className='w-75 rounded bg-white border shadow p-4'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>TITLE</th>
                                <th>AUTHOR</th>
                                <th>ISBN</th>
                                <th>PUBLICATION DATE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, i) => {
                                    return <tr key={i}>
                                        <td>{d.title}</td>
                                        <td>{d.author}</td>
                                        <td>{d.isbn}</td>
                                        <td className='text-center'>{d.date}</td>
                                        <td>
                                            <Link to={`/updatebook/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
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

export default Books