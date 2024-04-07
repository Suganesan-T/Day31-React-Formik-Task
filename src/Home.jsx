import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (

        <div className='container '>
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">Zen Library</h1>
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                    Library is the place where every page holds a universe, and every book opens a gateway to infinite possibilities.
                </p>
                <div className="d-inline-flex gap-2 mb-5">
                    <Link to={"/books"} className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                        Books
                    </Link>
                    <Link to={"/author"} className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                        Authors
                    </Link>
                </div>
            </div>
            <div className='container'>
                <h3 className='mt-5'>Information:</h3>
                <ul className='mt-3'>
                    <li><b>This website displays the list of authors and their books.</b></li>
                    <li className='mt-3'><b>You can able to create you own list by clicking on "Add Your List".</b></li>
                    <li className='mt-3'><b>You can also able to edit and delete the existing as well as newly created data.</b></li>
                    <li className='mt-3'><b>Click on "Books List" to show list of books in library.</b></li>
                    <li className='mt-3'><b>Click on "Author List" to show list of authours and their information.</b></li>
                </ul>
            </div>
        </div>

    )
}

export default Home