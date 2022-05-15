import React from 'react';
import { Checkbox, Col } from 'antd';
import scansData from "./../../jsonData/scans.json";

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

const StatusList = () => {
    const uniqueStatus = [...new Set(scansData.map(item => item.status))].sort();

    return <Checkbox.Group onChange={onChange}>
        {
            uniqueStatus.map(item => (
                <Col span={8}>
                    <Checkbox value={item}>{item}</Checkbox>
                </Col>
            ))
        }
    </Checkbox.Group>
};

export default StatusList;