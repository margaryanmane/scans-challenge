import React, {useState} from 'react';
import {  Button} from '@mui/material';
import { useParams } from "react-router-dom";
import scansData from "../../jsonData/scans.json";
import UserImage from "./components";
import "./index.css";

const UserInfo = () => {
    const userId = useParams().id;
    let scanInfo = scansData.filter(scan => scan.userId === userId);

    const [scanId, setScanId] = useState("");
    const handleClick = (event) => {
        setScanId(event.target.value)
    };

    let imageUrl = scansData.filter(item => item.id === scanId);

    return (
        <div className="userInfo col-5" >
            <div className="imageInfo">
            {scanInfo.map(item => (
                <div key={item.id} className={"p-3"}>
                    <p>
                        Scan Id - {item.id}
                    </p>
                    <p>
                        Description - {item.description}
                    </p>
                        <Button size="small" className={"button"} onClick={handleClick} value={item.id}>Show Image</Button>
                </div>
        ))}
            </div>
            <div className="col-7">
                {scanId.length !== 0 &&
                    <UserImage imageUrl={imageUrl}/>
                }
            </div>
        </div>
    );
}
export default UserInfo
