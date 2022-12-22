import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import TableSet from '../Table/Table.jsx'

function Index() {
    const [apiDatas, setApiDatas] = useState();
    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => setApiDatas(res.data))
    }, [])
    return (
        <div style={{ overflow: 'hidden' }}>
            <Sidebar />
            <TableSet apiData={apiDatas} />
        </div>
    )
}
export default Index