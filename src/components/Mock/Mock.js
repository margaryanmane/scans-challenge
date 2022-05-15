import React from "react";
import "./mock.css";

const Mock = ({ searchValue, posts }) => {
    const filteredUserData = posts.filter(item => (
        searchValue === "" ? item
            : item.name.toLowerCase().includes(searchValue) ||
            item.email.toLowerCase().includes(searchValue) ||
            item.id.includes(searchValue)
    ));

    return (
        <div className="mocks-box mt-2">
            {filteredUserData.map((item) => (
                <div className="box" key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.id}</p>
                </div>
            ))}
        </div>
    )
}

export default Mock
