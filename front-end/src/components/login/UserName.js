import React from 'react'
import {useState} from "react";
export default function UserName() {
    const user = JSON.parse(localStorage.getItem('token'));
    const a = user.mail;

    
    return (
        <div>
              {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                 {a}   
              </button> */}
              <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{a}</a>
        </div>
    )
}
