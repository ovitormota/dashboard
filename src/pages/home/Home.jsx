import React from 'react';
import { Chart } from '../../components/chart/Chart';
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import { WidgetSm } from '../../components/widgetSm/WidgetSm';
import { WidgetLg } from '../../components/widgetLg/WidgetLg';

export function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title={'User Analytics'} dataKey={'Active User'} grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
