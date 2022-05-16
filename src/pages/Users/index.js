import React, {useEffect, useState} from "react";
import {TextField, Pagination, Grid} from "@mui/material";
import User from "./components/User"
import UserStatus from "./components/UserStatus";
import usersList from "./../../jsonData/users";
import "./index.css";

const PAGE_SIZE = 3;
const CURRENT_PAGE = 1;

export const Users = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [userIds, setUserIds] = useState([]);
    const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
    const [total, setTotal] = useState(0)

    const handlerChange = (event) => {
        setSearch(event.target.value.toLowerCase())
        setCurrentPage(CURRENT_PAGE)
    };

    useEffect(() => {
        const newUsersList = usersList.filter(user => {
            if (userIds.length) {
                if ((user.name.includes(search) || user.email.includes(search)) && userIds.includes(user.id)) {
                    return user
                }
            } else {
                if (user.name.includes(search) || user.email.includes(search)) {
                    return user
                }
            }

        });
        setTotal(Math.ceil(newUsersList.length / PAGE_SIZE))
        setUsers(newUsersList.splice((currentPage - 1) * PAGE_SIZE, PAGE_SIZE))
    }, [currentPage, search, userIds])

    const handlePaginate = (_, value) => {
        setCurrentPage(value);
    };


    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <div className="col-lg-4">
                <h3>Status</h3>
                <UserStatus setUserIds={setUserIds}/>
            </div>
            <div className="col-lg-8 user-list">
                <div className="col-12 p-0 mb-2 mt-2">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        onChange={handlerChange}
                        label="Search"
                    />
                </div>
                {users.map((user) => <User user={user} key={user.id}/>)}
                <Pagination
                    defaultPage={currentPage}
                    variant="outlined"
                    shape="rounded"
                    count={total}
                    onChange={handlePaginate}/>
            </div>
        </Grid>
    );
}

export default Users;
