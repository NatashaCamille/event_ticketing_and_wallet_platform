import React from "react";
import Sidebar from "../../components/sidebar";

const DashboardPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="">
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}

export default DashboardPage;