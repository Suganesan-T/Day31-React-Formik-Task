import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoLogoGithub } from "react-icons/io";
import { IoLibrary } from "react-icons/io5";
function Sidebar() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");


    return (
        <div className='navv'>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100 " style={{ width: "280px" }}>
                <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4 text-white"><IoLibrary style={{ width: "40", height: "32" }} /> <span style={{ fontSize: "30px", }}>Zen Library</span></span>
                </Link>
                <h5 className='mt-3 mb-0'>Menu</h5>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to={"/"} className={splitLocation[1] === "" ? "nav-link active" : "nav-link link-body-emphasis text-white"} >
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "16", height: "16" }} fill="currentColor" className="bi bi-house me-2" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                            </svg> Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/books"} className={splitLocation[1] === "books" ? "nav-link active" : "nav-link link-body-emphasis text-white"}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "16", height: "16" }} fill="currentColor" className="bi bi-card-checklist me-2" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                            </svg> Books List
                        </Link>
                    </li>
                    <li>
                        <Link to={"/author"} className={splitLocation[1] === "author" ? "nav-link active" : "nav-link link-body-emphasis text-white"}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "16", height: "16" }} fill="currentColor" className="bi bi-person-lines-fill me-2" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                            </svg> Authors List
                        </Link>
                    </li>
                    <li>
                        <Link to={"/create"} className={splitLocation[1] === "create" ? "nav-link active" : "nav-link link-body-emphasis text-white"}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "16", height: "16" }} fill="currentColor" className="bi bi-file-earmark-plus-fill me-2" viewBox="0 0 16 16">
                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0" />
                            </svg> Add Your List
                        </Link>
                    </li>
                </ul>
                <hr />
                <p className='text-center'><IoLogoGithub className='mr-6' />  copyrights@mywebsite</p>
            </div>
        </div>
    )
}

export default Sidebar



