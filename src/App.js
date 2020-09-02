import React, { Component } from 'react'
import Header from './Header'
import Calendar from './Calendar'
import './style/RCA.css'

export default class App extends Component {
    render() {
        return (
            <div className="test-layout">
                <div className="RCA-app-container">
                    <Header />
                    <Calendar />
                </div>
            </div>
        )
    }
}
