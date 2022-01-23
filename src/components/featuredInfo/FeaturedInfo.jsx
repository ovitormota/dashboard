import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './FeaturedInfo.css';

export function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,420</span>
                    <span className="featuredMoneyRate">
                        -$1.5 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,530</span>
                    <span className="featuredMoneyRate">
                        -$1.2 <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,420</span>
                    <span className="featuredMoneyRate">
                        +$1.5 <ArrowUpward className='featuredIcon'/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    );
}
