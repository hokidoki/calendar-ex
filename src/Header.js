import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="RCA-header-container">
                <h2>
                    {this.props.calendarYM}
                </h2>
                <h3>
                    {this.props.today}
                </h3>
                <ul className="RCA-header-buttons">
                    <li>
                        <i className="move-button left-img icon">

                        </i>
                    </li>
                    <li>
                        이동
                    </li>
                    <li>
                        <i className="move-button right-img icon">

                        </i>
                    </li>
                </ul>
            </div>
        )
    }
}
