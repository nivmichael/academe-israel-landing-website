import React, { Component } from 'react';
import './StatsBar.css';

import CountUp from 'react-countup';

export default class StatsBar extends Component {
    constructor () {
        super();

        this.state = {
            stats: {
                students: 100000,
                employers: 10024,
                jobs: 1472,
            },
            counterOptions: {
                separator: ',',
                duration: 1
            }
        }
    }

    /**
     * Adds a '+' sign at the end of the counter.
     * Does that by adding class that chained to a pseudo class (with content prop)
     */
    onDisplayPlusSign = () => {
        this.refs.studentsStatRef.classList.add('plus-sign');
    }

    render() {
        return (
            <div id="statsbar-component">
                <div className="pure-g">
                    <div className="pure-u-1 stats-container">
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat" ref="studentsStatRef">
                                    <CountUp start={ 0 }
                                            end={ this.state.stats.students }
                                            duration={ this.state.counterOptions.duration }
                                            separator={ this.state.counterOptions.separator }
                                            onEnd={ this.onDisplayPlusSign }>
                                    </CountUp>
                                </div>
                                <div className="single-stat-title">סטודנטים ובוגרים</div>
                            </div>
                        </div>
                        <div className="sub-divider"></div>
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat">
                                    <CountUp start={0}
                                            end={ this.state.stats.employers }
                                            duration={ this.state.counterOptions.duration }
                                            separator={ this.state.counterOptions.separator }>
                                    </CountUp>
                                </div>
                                <div className="single-stat-title">חברות פעילות</div>
                            </div>
                        </div>
                        <div className="sub-divider"></div>
                        <div className="pure-u-1">
                            <div className="single-stat-container">
                                <div className="single-stat">
                                    <CountUp start={0}
                                            end={ this.state.stats.jobs }
                                            duration={ this.state.counterOptions.duration }
                                            separator={ this.state.counterOptions.separator }>
                                    </CountUp>
                                </div>
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

// <div className="single-stat">{ this.state.stats.students }+</div>
