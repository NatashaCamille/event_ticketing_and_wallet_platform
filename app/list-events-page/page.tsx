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
        image: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
        location: "Location 1"
    },
    {
        name: "Event 2",
        description: "Description of Event 2",
        price: "$20",
        date: "2022-12-31",
        time: "19:00",
        image: "https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=",
        location: "Location 2"
    },
    {
        name: "Event 3",
        description: "Description of Event 3",
        price: "$15",
        date: "2023-01-15",
        time: "20:00",
        image: "https://media.istockphoto.com/id/1357248261/photo/crowd-of-people-dancing-in-a-concert.webp?b=1&s=170667a&w=0&k=20&c=SiO5dLJA8Gh7Wymv2Vsp_fdjgbrvxqdnQzCP3ZDHK60=",
        location: "Location 3"
    },
    {
        name: "Event 4",
        description: "Description of Event 4",
        price: "$25",
        date: "2023-02-01",
        time: "17:30",
        image: "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
        location: "Location 4"
    },
    {
        name: "Event 5",
        description: "Description of Event 5",
        price: "$30",
        date: "2023-02-15",
        time: "19:30",
        image: "https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/88A4947%201.jpg?itok=58FHuOc3",
        location: "Location 5"
    },
    {
        name: "Event 6",
        description: "Description of Event 6",
        price: "$20",
        date: "2023-03-10",
        time: "18:45",
        image: "https://pictures.abebooks.com/isbn/9780470449875-it.jpg",
        location: "Location 6"
    }
];


const ListEventPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 p-6 scroll-m-1">
                <h1 className="text-3xl font-bold mb-4">Event List</h1>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <ListEvents events={events} />
                </div>
            </div>
        </div>
    )
}

export default ListEventPage;
