import React from "react";
import Sidebar from "../../components/sidebar";
import ListEvents from "../../components/list_events";

const events = [
    {
        name: "Event 1",
        description: "Description of Event 1",
        price: "$10",
        date: "2022-12-31",
        time: "18:00",
        image: "https://example.com/image1.jpg",
        location: "Location 1"
    },
    {
        name: "Event 2",
        description: "Description of Event 2",
        price: "$20",
        date: "2022-12-31",
        time: "19:00",
        image: "https://example.com/image2.jpg",
        location: "Location 2"
    },
    // Add more events as needed
];

const ListEventPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 p-6">
                <h1 className="text-3xl font-bold mb-4">Event List</h1>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <ListEvents events={events} />
                </div>
            </div>
        </div>
    )
}

export default ListEventPage;
