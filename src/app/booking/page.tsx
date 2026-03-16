'use client'
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';
import DateReserve from '@/components/DateReserve';

export default function BookingPage() {
  return (
    <main className="w-full flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Venue Booking</h1>
      <div className="w-full max-w-[400px] space-y-6 bg-white p-8 rounded-lg shadow-md border border-gray-100">
        
        <TextField 
          variant="standard" 
          name="Name-Lastname" 
          label="Name-Lastname" 
          fullWidth 
        />

        <TextField 
          variant="standard" 
          name="Contact-Number" 
          label="Contact-Number" 
          fullWidth 
        />

        <FormControl variant="standard" fullWidth>
          <InputLabel id="venue-label">Select Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            name="venue"
            defaultValue=""
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DateReserve />

        <Button 
          variant="contained" 
          name="Book Venue" 
          className="bg-blue-600 hover:bg-blue-700 w-full mt-4 py-2"
        >
          Book Venue
        </Button>
      </div>
    </main>
  );
}