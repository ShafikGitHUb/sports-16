//     <Card className=''>
//   <h1 className='text-2xl font-semibold text-center border-b w-max mx-auto mt-4 pb-1'>Add Facilities</h1>

//   <form onSubmit={onSubmit} className="p-10 space-y-8 md:max-w-3xl mx-auto">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
//       {/* Facility Name */}
//       <div className="md:col-span-2">
//         <TextField isRequired>
//           <Label>Facility Name</Label>
//           <Input name="facilityname" placeholder="Facility Name" className="rounded-2xl" />
//           <FieldError />
//         </TextField>
//       </div>

//       {/* Facility Type (Select) */}
//       <div className="md:col-span-2">
//         <Select
//           name="category"
//           isRequired
//           className="w-full"
//           placeholder="Select category"
//         >
//           <Label className="mb-2 block">Facility Type</Label>

//           <Select.Trigger className="w-full rounded-2xl border px-4 py-3">
//             <Select.Value />
//             <Select.Indicator />
//           </Select.Trigger>

//           <Select.Popover className="">
//             <ListBox className="w-full">
//               <ListBox.Item id="Football" textValue="Football">
//                 Football
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>

//               <ListBox.Item id="Gym" textValue="Gym">
//                 Gym
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>

//               <ListBox.Item id="Swimming" textValue="Swimming">
//                 Swimming
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>

//               <ListBox.Item id="Cricket" textValue="Cricket">
//                 Cricket
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>

//               <ListBox.Item id="Badminton" textValue="Badminton">
//                 Badminton
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>
              
//               <ListBox.Item id="Tenis" textValue="Tenis">
//                 Tenis
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>
//             </ListBox>
//           </Select.Popover>
//         </Select>
//       </div>

//       {/* Image URL */}
//       <div className="md:col-span-2">
//         <TextField isRequired>
//           <Label>Image URL</Label>
//           <Input
//             name="imageUrl"
//             type="url"
//             placeholder="https://example.com/bali-paradise.jpg"
//             className="rounded-2xl"
//           />
//           <FieldError />
//         </TextField>
//       </div>
       
//       {/* Location */}
//       <TextField isRequired>
//         <Label>Location</Label>
//         <Input name="country" placeholder="Location" className="rounded-2xl" />
//         <FieldError />
//       </TextField>

//       {/* Price */}
//       <TextField isRequired>
//         <Label>Price Per hour (USD)</Label>
//         <Input
//           name="price"
//           type="number"
//           placeholder="$"
//           className="rounded-2xl"
//         />
//         <FieldError />
//       </TextField>

//       {/* Available Time */}
//       <div className="md:col-span-2">
//         <TextField isRequired>
//           <Label>Available Time</Label>
//           <Input
//             name="Time"
//             type="time"
//             className="rounded-2xl"
//           />
//           <FieldError />
//         </TextField>
//       </div>

//       {/* Description */}
//       <div className="md:col-span-2">
//         <TextField isRequired>
//           <Label>Description</Label>
//           <TextArea
//             name="description"
//             placeholder="Describe..."
//             className="rounded-3xl"
//           />
//           <FieldError />
//         </TextField>
//       </div>
//     </div>

//     <Button
//       type="submit"
//       variant="outline"
//       className="rounded-none w-full bg-cyan-500 text-white"
//     >
//       Add Facility
//     </Button>
//   </form>
// </Card>