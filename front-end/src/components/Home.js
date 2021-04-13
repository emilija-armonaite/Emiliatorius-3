import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Home() {
    return (
        <div className="container">
            <Header />
            <p>This is home page</p>
            <h2>Labas vakaras</h2>

            <Footer />
        </div>
    )
}
