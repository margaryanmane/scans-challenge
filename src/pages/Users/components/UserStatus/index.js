import React from 'react';
import {FormControl, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import scansData from "./../../../../jsonData/scans.json";

const UserStatus = ({setUserIds}) => {
    const statusList = ['done', 'waiting', 'in_progress', 'failed'];

    const handleChange = (event) => {
        let userIds = [];
        scansData.map(scan => {
            if (scan.status === event.target.value) {
                userIds = [...userIds, scan.userId]
            }
        })
        setUserIds([...new Set(userIds)].sort())
    };

    return (
        <FormControl component="fieldset" onChange={handleChange}>
            <RadioGroup name="status">
                {
                    statusList.map((status) => <FormControlLabel key={status} value={status} control={<Radio/>}
                                                                 label={status}/>)
                }
            </RadioGroup>
        </FormControl>
    );
}

export default UserStatus;

