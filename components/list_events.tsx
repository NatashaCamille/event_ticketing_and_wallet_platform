import React from "react";

interface ListEventsProps {
    events: Event[];
}

interface Event {
    name: string;
    description: string;
    price: string;
    date: string;
    time: string;
    image: string;
    location: string;
}

const ListEvents: React.FC<ListEventsProps> = ({ events }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {events.map((event, index) => (
                <div key={index} className="m-4 bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: "300px" }}>
                    {event.image ? (<img src={event.image} alt={event.name} className="w-full h-40 object-cover object-center" />):(<p>No Image</p>)}
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2">{event.name || 'Event Name'}</h2>
                        <p className="text-gray-600 mb-2">{event.description || 'Description'}</p>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-gray-700 font-medium">{event.date || 'Date'}</p>
                            <p className="text-gray-700 font-medium">{event.time || 'Time'}</p>
                        </div>
                        <p className="text-gray-700 font-medium">{event.location || 'Location'}</p>
                        <p className="text-gray-700 font-medium">{event.price || 'Price'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListEvents;
