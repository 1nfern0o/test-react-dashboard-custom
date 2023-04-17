import React from 'react';
import icon_logo from "../../assets/logo.svg";
import icon_avatar from "../../assets/avatar.svg";
import icon_dashboard from "../../assets/icon_dashboard.svg";
import icon_product from "../../assets/icon_product.svg";
import icon_customer from "../../assets/icon_customer.svg";
import icon_income from "../../assets/icon_income.svg";
import icon_promote from "../../assets/icon_promote.svg";
import icon_help from "../../assets/icon_help.svg";
import Arrow from "./Arrow";
import "./../../styles/navigation.scss"

const Navigation = () => {
    return (
        <aside className="aside">
            <div>
                <div className="aside__top">
                    <img src={icon_logo} alt="logo" />
                    <div className="aside__title">
                        Dashboard<small>v.01</small>
                    </div>
                </div>
                <ul className="aside__list">
                    <li className="aside__list_item">
                        <div>
                            <img src={icon_dashboard} alt="Icon dashboard" />
                            Dashboard
                        </div>
                        <Arrow />
                    </li>
                    <li className="aside__list_item">
                        <div>
                            <img src={icon_product} alt="icon_product" />
                            Product
                        </div>
                        <Arrow />
                    </li>
                    <li className="aside__list_item active">
                        <div>
                            <img src={icon_customer} alt="icon_customer" />
                            Customers
                        </div>
                        <Arrow stroke="#fff" />
                    </li>
                    <li className="aside__list_item">
                        <div>
                            <img src={icon_income} alt="icon_income" />
                            Income
                        </div>
                        <Arrow />
                    </li>
                    <li className="aside__list_item">
                        <div>
                            <img src={icon_promote} alt="icon_promote" />
                            Promote
                        </div>
                        <Arrow />
                    </li>
                    <li className="aside__list_item">
                        <div>
                            <img src={icon_help} alt="icon_help" />
                            Help
                        </div>
                        <Arrow />
                    </li>
                </ul>
            </div>

            <div className="avatar">
                <img src={icon_avatar} alt="avatar" />
                <div className="avatar__block">
                    <div>Evano</div>
                    <div>Project Manager</div>
                </div>
            </div>
        </aside>
    );
};

export default Navigation;