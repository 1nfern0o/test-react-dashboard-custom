import React, { useEffect, useState } from "react";
import cn from "classnames";
import { tableData } from "../../data";
import InputWrapper from "../InputWrapper/InputWrapper";
import "./../../styles/main.scss";
import "./../../styles/inputWrapper.scss";

const Main = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [filterData, setFilterData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        country: "",
        status: "",
    });
    const [filterName, setFilterName] = useState("");

    const handleOnChange = (e) => {
        if(!!e.target.value.length) {
            setFilterData(prev => ({...prev, [e.target.name]: e.target.value}));
            setFilterName(e.target.name);
        } else {
            setFilterData({
                name: "",
                company: "",
                phone: "",
                email: "",
                country: "",
                status: "",
            });
            setFilterName("");
            setData(tableData);
        }
    };

    useEffect(() => {
        setLoad(true);
        const timeId = setTimeout(() => {
            setData(tableData);
            setLoad(false);
        }, 1000);
        return () => {
            clearTimeout(timeId);
        }
    }, []);

    useEffect(() => {
        if(!!filterData[filterName]?.length && !!filterName?.length) {
            setData(prev => {
                const temp = [...prev].filter(item => item[filterName]?.toLowerCase().includes(filterData[filterName]?.toLowerCase()));

                return temp;
            })
        }
    }, [filterData, filterName]);
    return (
        <main className="main">
            <div className="main__top">Hello Evano 👋🏼,</div>
            <div className="main__bottom">
                <div className="customer__top">
                    <div>
                        <div className="customer__title">All Customers</div>
                        <div className="customer__desc">Active Members</div>
                    </div>
                    <div className="search__wrapper">
                        <input className="search_input" type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="customer__bottom">
                    {!load ? (
                        <>
                            <table className="table">
                                <thead className="table__head">
                                <tr>
                                    <th>
                                        <InputWrapper
                                            label="Customer Name"
                                            id="t-name"
                                        >
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Customer Name"
                                                name="name"
                                                id="t-name"
                                                value={filterData?.name}
                                                onChange={handleOnChange}
                                            />
                                        </InputWrapper>
                                    </th>
                                    <th>
                                        <InputWrapper
                                            label="Company"
                                            id="t-company"
                                        >
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Company"
                                                name="company"
                                                id="t-company"
                                                value={filterData?.company}
                                                onChange={handleOnChange}
                                            />
                                        </InputWrapper>
                                    </th>
                                    <th>
                                        <InputWrapper
                                            label="Phone Number"
                                            id="t-phone"
                                        >
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Phone Number"
                                                name="phone"
                                                id="t-phone"
                                                value={filterData?.phone}
                                                onChange={handleOnChange}
                                            />
                                        </InputWrapper>
                                    </th>
                                    <th>
                                        <InputWrapper
                                            label="Email"
                                            id="t-email"
                                        >
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Email"
                                                name="email"
                                                id="t-email"
                                                value={filterData?.email}
                                                onChange={handleOnChange}
                                            />
                                        </InputWrapper>
                                    </th>
                                    <th>
                                        <InputWrapper
                                            label="Country"
                                            id="t-country"
                                        >
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Country"
                                                name="country"
                                                id="t-country"
                                                value={filterData?.country}
                                                onChange={handleOnChange}
                                            />
                                        </InputWrapper>
                                    </th>
                                    <th>
                                        <InputWrapper
                                            label="Status"
                                            id="t-status"
                                        >
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Status"
                                                name="status"
                                                id="t-status"
                                                value={filterData?.status}
                                                onChange={handleOnChange}
                                            />
                                        </InputWrapper>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="table__body">
                                {!!data?.length && data.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.company}</td>
                                            <td style={{ whiteSpace: "nowrap" }}>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.country}</td>
                                            <td>
                                                <div className={cn("table__status", {
                                                    "table__status_inactive": item.status === "Inactive"
                                                })}>{item.status}</div>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            <div className="customer__footer">
                                <div className="customer__footer_info">Showing data 1 to 8 of  256K entries</div>
                                <div className="pagination">
                                    <div className="pagination__item">{"<"}</div>
                                    <div className="pagination__item active">1</div>
                                    <div className="pagination__item">2</div>
                                    <div className="pagination__item">3</div>
                                    <div className="pagination__item">4</div>
                                    <div className="pagination__item no_border">...</div>
                                    <div className="pagination__item">40</div>
                                    <div className="pagination__item">{">"}</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Main;