"use client"
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField,Select, Card } from '@heroui/react';
import React from 'react';

const AddfacilityPage = () => {

  //onsumbit form
const onSubmit =async(e)=>{
e.preventDefault()
const formData = new FormData(e.currentTarget)
const addFacility = Object.fromEntries(formData.entries())
//data fetch with link post method add facility
 const res = await fetch("http://localhost:5000/add-facility", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addFacility),
  });

  const data = await res.json();
};

    return (
         <div className='p-5 max-w-7xl mx-auto'>
            <Card className=''>
                   <h1 className='text-2xl font-semibold text-center border-b w-max mx-auto'>Add Facilities</h1>
                  <form onSubmit={onSubmit} 
            className="p-10 space-y-8 md:w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
              <div className="md:col-span-2">
                <TextField name="facilityname" isRequired>
                  <Label>Facility Name</Label>
                  <Input placeholder="Facility Name" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>
              <div className="md:col-span-2">
  <Select
    name="category"
    isRequired
    className="w-full"
    placeholder="Select category"
  >
    <Label className="mb-2 block">Facility Type</Label>

    <Select.Trigger className="w-full rounded-2xl border px-4 py-3">
      <Select.Value />
      <Select.Indicator />
    </Select.Trigger>

    <Select.Popover className="">
      <ListBox className="w-full">

        <ListBox.Item id="Football" textValue="Football">
          Football
          <ListBox.ItemIndicator />
        </ListBox.Item>

        <ListBox.Item id="Gym" textValue="Gym">
          Gym
          <ListBox.ItemIndicator />
        </ListBox.Item>

        <ListBox.Item id="Swimming" textValue="Swimming">
          Swimming
          <ListBox.ItemIndicator />
        </ListBox.Item>

        <ListBox.Item id="Cricket" textValue="Cricket">
          Cricket
          <ListBox.ItemIndicator />
        </ListBox.Item>

        <ListBox.Item id="Badminton" textValue="Badminton">
          Badminton
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="Tenis" textValue="Tenis">
          Tenis
          <ListBox.ItemIndicator />
        </ListBox.Item>

      </ListBox>
    </Select.Popover>
  </Select>
</div>
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>
             
              <TextField name="country" isRequired>
                <Label>Location</Label>
                <Input placeholder="Location" className="rounded-2xl" />
                <FieldError />
              </TextField>

              

              {/* price da defult set korte hobe */}


              <TextField name="price" type="number" isRequired>
                <Label>Price Per hour (USD)</Label>
                <Input
                  type="number"
                  placeholder="$"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

{/* time fixed kore dea ucit */}

<div className="md:col-span-2">
  <TextField name="time" type="time" isRequired>
    <Label>Available Time</Label>
    <Input
      type="time"
      className="rounded-2xl"
    />

    <FieldError />
  </TextField>
</div>

              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            <Button
              type="submit"
              variant="outline"
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
              Add Facility
            </Button>
          </form>
            </Card> 
        </div>
    );
};

export default AddfacilityPage;