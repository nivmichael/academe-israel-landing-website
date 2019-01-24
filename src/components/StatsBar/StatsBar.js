import React, { Component } from 'react';
import './StatsBar.css';

export default class StatsBar extends Component {
    render() {
        return (
            <div id="statsbar-component">
                <div className="pure-g">
                    <div className="pure-u-1 stats-container">
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat">100,000+</div>
                                <div className="single-stat-title">סטודנטים ובוגרים</div>
                            </div>
                        </div>
                        <div className="sub-divider"></div>
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat">10,024</div>
                                <div className="single-stat-title">חבקות םעילות</div>
                            </div>
                        </div>
                        <div className="sub-divider"></div>
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat">1,472</div>
                                <div className="single-stat-title">משרות פעילות</div>
                            </div>
                        </div>
                        <div className="main-divider-container">
                            <div className="main-divider"></div>
                            <div className="main-divider-title">בשיתוף</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
