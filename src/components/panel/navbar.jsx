import React from "react";
import img_profile from "../../assets/img/profile/5087579.png"

export const Navbar = ({username}) => {


    return (
        <div className="wrapper init">
            <div className="header p-0 m-0 d-flex justify-content-between align-items-center">
                <h3>ProSite Hub</h3>
                <div className="d-flex align-items-center profile_navigation">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Haz tu búsqueda" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2">🔎</span>
                    </div>
                    <a className="dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-envelope-open fs-5 lh-1"></i>
                    </a>
                    <div className="d-flex align-items-center p-0 gap-2">
                        <span>
                            {username}
                        </span>
                        <span>
                            <img src={img_profile} width={"60px"} height={"60px"} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}