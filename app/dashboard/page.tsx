import React from "react";
import Sidebar from "../../components/sidebar";

const DashboardPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 p-6">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Welcome to Your Dashboard</h2>
                    {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac dui condimentum, sed tempor elit tincidunt. Integer vitae elit a magna interdum laoreet. Nunc pulvinar, nisi a tristique vehicula, ligula odio finibus elit, nec tincidunt magna lacus vel est. Vivamus et eleifend elit. Donec ac sagittis magna. Duis tincidunt fermentum sapien, in auctor velit malesuada sit amet. Mauris in pulvinar tortor.</p> */}
                    <p className="text-gray-600">Our event platform offers a range of features to help you manage and promote your events. You can create events, sell tickets, manage attendees, and much more. Explore the platform to discover all the tools available to you!</p>
                </div>
                <div className="mt-8 bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
                    <p className="text-gray-600">Here are some of the upcoming events on our platform:</p>
                    <ul className="list-disc list-inside">
                        <li>Event 1 - January 1, 2023</li>
                        <li>Event 2 - February 15, 2023</li>
                        <li>Event 3 - March 30, 2023</li>
                    </ul>
                </div>
                <div className="mt-8 bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                    <p className="text-gray-600">Here is a summary of your recent activity on the platform:</p>
                    <ul className="list-disc list-inside">
                        <li>Created Event "Event 1"</li>
                        <li>Sold 5 tickets for "Event 2"</li>
                        <li>Updated event details for "Event 3"</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;

