import React, { Component } from 'react';
import './StatsBar.css';

export default class StatsBar extends Component {
    constructor () {
        super();

        this.state = {
            stats: {
                students: '100,000',
                employers: '10,024',
                jobs: '1,472',
            }
        }
    }

    render() {
        return (
            <div id="statsbar-component">
                <div className="pure-g">
                    <div className="pure-u-1 stats-container">
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat">{ this.state.stats.students }+</div>
                                <div className="single-stat-title">סטודנטים ובוגרים</div>
                            </div>
                        </div>
                        <div className="sub-divider"></div>
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat">{ this.state.stats.employers }</div>
                                <div className="single-stat-title">חברות פעילות</div>
                            </div>
                        </div>
                        <div className="sub-divider"></div>
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat">{ this.state.stats.jobs }</div>
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
