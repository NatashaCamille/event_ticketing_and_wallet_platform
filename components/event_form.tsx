"use client";

import React, { useState } from 'react';

const EventForm: React.FC = () => {
  const [event, setEvent] = useState({
    eventName: '',
    description: '',
    price: '',
    date: '',
    time: '',
    image: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(event); // Submit logic here
    // You can reset the form after submission if needed
    setEvent({
      eventName: '',
      description: '',
      price: '',
      date: '',
      time: '',
      image: '',
      location: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Create Event</h2>
      <div className="mb-4">
        <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
          Event Name
        </label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          onChange={handleChange}
          value={event.eventName}
          className="mt-1 block w-full shadow-sm outline-none border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={event.description}
          className="mt-1 block w-full shadow-sm outline-none border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          onChange={handleChange}
          value={event.price}
          className="mt-1 block w-full shadow-sm outline-none border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          value={event.date}
          className="mt-1 block w-full shadow-sm outline-none border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          onChange={handleChange}
          value={event.time}
          className="mt-1 block w-full shadow-sm outline-none border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={event.image}
          className="mt-1 block w-full shadow-sm outline-none border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={handleChange}
          value={event.location}
          className="mt-1 block w-full shadow-sm outline-none border-gray-300 rounded-md"
        />
      </div>
      <div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
