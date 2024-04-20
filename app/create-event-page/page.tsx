import React from "react";
import Sidebar from "../../components/sidebar";
import EventForm from "../../components/event_form";

const CreateEventPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 p-6">
                <h1 className="text-3xl font-bold mb-4">Create Event</h1>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <EventForm />
                </div>
            </div>
        </div>
    )
}

export default CreateEventPage;
