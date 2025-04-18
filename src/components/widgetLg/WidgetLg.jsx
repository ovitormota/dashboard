import React from 'react';
import './widgetLg.css';
import Avatar from '../../images/avatar-perfil.jpg';

export function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar} alt="" className="widgetLgUserImage" />
                        <span className="widgetLgUserName">Vitor Mota</span>
                    </td>
                    <td className="widgetLgDate">22 Nov 1994</td>
                    <td className="widgetLgAmount">$123.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar} alt="" className="widgetLgUserImage" />
                        <span className="widgetLgUserName">Vitor Mota</span>
                    </td>
                    <td className="widgetLgDate">22 Nov 1994</td>
                    <td className="widgetLgAmount">$123.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar} alt="" className="widgetLgUserImage" />
                        <span className="widgetLgUserName">Vitor Mota</span>
                    </td>
                    <td className="widgetLgDate">22 Nov 1994</td>
                    <td className="widgetLgAmount">$123.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={Avatar} alt="" className="widgetLgUserImage" />
                        <span className="widgetLgUserName">Vitor Mota</span>
                    </td>
                    <td className="widgetLgDate">22 Nov 1994</td>
                    <td className="widgetLgAmount">$123.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}
