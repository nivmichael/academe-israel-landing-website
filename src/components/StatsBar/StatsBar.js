import React, { Component } from 'react';
import './StatsBar.css';
import './StatsBarResponsive.css';

import CountUp from 'react-countup';

export default class StatsBar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            stats: {
                jobseekers: 0,
                companies: 0,
                jobs: 0,
            },
            counterOptions: {
                separator: ',',
                duration: 2
            }
        }
    }

    /**
     * React Static Method to watch changes in props
     * Automaticaly updates the state when changes were made
     * (In this case updates only the 'stats' state property)
     * Returns null to indicate no change to state.
     *
     * @param props
     * @param state
     * @returns {Object|null} state
     */
    static getDerivedStateFromProps(props, state) {
        if (props.systemStats.companies !== state.stats.companies && props.systemStats.jobs !== state.stats.jobs) {
            if (props.systemStats.companies !== 0 && props.systemStats.jobs !== 0) {
                return { stats: props.systemStats };
            }
        }

        return null;
    }

    /**
     * Adds a '+' sign at the end of the counter.
     * Does that by adding class that chained to a pseudo class (with content prop)
     */
    onDisplayPlusSign = () => {
        if(this.refs.jobseekersStatRef) { this.refs.jobseekersStatRef.classList.add('plus-sign'); }
    }

    render() {
        return (
            <div id="statsbar-component">
                <div className="pure-g">
                    <div className="pure-u-1 stats-container">
                        <div className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-4">
                            <div id="jobseekers-stat" className="single-stat-container">
                                <div className="single-stat" ref="jobseekersStatRef">
                                    <CountUp start={ 0 }
                                            end={ this.state.stats.jobseekers }
                                            duration={ this.state.counterOptions.duration }
                                            separator={ this.state.counterOptions.separator }
                                            onEnd={ this.onDisplayPlusSign }>
                                    </CountUp>
                                </div>
                                <div className="single-stat-title">סטודנטים ובוגרים</div>
                            </div>
                        </div>
                        <div className="sub-divider"></div>
                        <div className="pure-u-1 pure-u-md-1-4 pure-u-lg-1-4">
                            <div id="companies-stat" className="single-stat-container">
                                <div className="single-stat">
                                    <CountUp start={0}
                                            end={ this.state.stats.companies }
                                            duration={ this.state.counterOptions.duration }
                                            separator={ this.state.counterOptions.separator }>
                                    </CountUp>
                                </div>
                                <div className="single-stat-title">חברות פעילות</div>
                            </div>
                        </div>
                        <div className="sub-divider"></div>
                        <div className="pure-u-1 pure-u-md-1-4 pure-u-lg-1-4">
                            <div id="jobs-stat" className="single-stat-container">
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
                    </div>
                    <div className="pure-u-1">
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

// jobseekers: 100000,
// companies: 10024,
// jobs: 1472,

// <div className="single-stat">{ this.state.stats.students }+</div>
