"use client";

import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Card,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const AddfacilityPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const addFacility = Object.fromEntries(formData.entries());

    const pricePerHour = Number(addFacility.price);

    const startTime = addFacility.startTime;
    const endTime = addFacility.endTime;

    if (
      new Date(`1970-01-01T${endTime}`) <=
      new Date(`1970-01-01T${startTime}`)
    ) {
      alert("End time must be greater than start time");
      return;
    }

    const facilityData = {
      ...addFacility,
      pricePerHour,
      startTime,
      endTime,
    };

    const {data:tokenData} = await authClient.token()

    const res = await fetch("http://localhost:5000/add-facility", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:`Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(facilityData),
    });

    const data = await res.json();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      <Card className="w-full max-w-4xl mx-auto p-5 md:p-10 shadow-lg rounded-2xl">

        <h1 className="text-2xl md:text-3xl font-bold text-center text-cyan-600 border-b pb-4 mb-6">
          Add New Facility
        </h1>

        <form onSubmit={onSubmit} className="space-y-6">

          <TextField name="facilityname" isRequired>
            <Label>Facility Name</Label>
            <Input
              placeholder="Enter facility name"
              className="rounded-xl"
            />
            <FieldError />
          </TextField>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Facility Type
            </label>

            <select
              name="category"
              className="select select-bordered w-full rounded-xl h-12"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Football">Football</option>
              <option value="Gym">Gym</option>
              <option value="Swimming">Swimming</option>
              <option value="Cricket">Cricket</option>
              <option value="Badminton">Badminton</option>
              <option value="Tennis">Tennis</option>
            </select>
          </div>

          <TextField name="imageUrl" isRequired>
            <Label>Image URL</Label>
            <Input
              type="url"
              placeholder="https://example.com/image.jpg"
              className="rounded-xl"
            />
            <FieldError />
          </TextField>
          <TextField name="country" isRequired>
            <Label>Location</Label>
            <Input
              placeholder="Enter location"
              className="rounded-xl"
            />
            <FieldError />
          </TextField>
          <TextField name="price" type="number" isRequired>
            <Label>Price Per Hour</Label>
            <Input
              type="number"
              placeholder="$"
              className="rounded-xl"
            />
            <FieldError />
          </TextField>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <TextField name="startTime" isRequired>
              <Label>Start Time</Label>
              <Input
                type="time"
                className="rounded-xl"
              />
              <FieldError />
            </TextField>

            <TextField name="endTime" isRequired>
              <Label>End Time</Label>
              <Input
                type="time"
                className="rounded-xl"
              />
              <FieldError />
            </TextField>

          </div>
          <TextField name="description" isRequired>
            <Label>Description</Label>
            <TextArea
              placeholder="Write description..."
              className="rounded-xl min-h-[120px]"
            />
            <FieldError />
          </TextField>
          <Button
            type="submit"
            className="w-full bg-cyan-500 text-white font-semibold py-3 rounded-xl hover:bg-cyan-600 transition"
          >
            Add Facility
          </Button>

        </form>
      </Card>
    </div>
  );
};

export default AddfacilityPage;