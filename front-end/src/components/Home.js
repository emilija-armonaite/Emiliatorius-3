import React from 'react'
import Header from './Header'
import Footer from './Footer'
import logo from './../images/nice42069.jpeg'


var backStyle = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url("https://images.unsplash.com/photo-1532210317995-cc56d90177d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80")`
};

export default function Home() {
    return (
        <div className="container">
            <section style={backStyle}>
                <Header />
                <img src={logo} alt="Logo" />
                <h2>Labas rytas</h2>
                <h4>This is our home page</h4>
                <Footer />
            </section>
        </div>
    )
}
