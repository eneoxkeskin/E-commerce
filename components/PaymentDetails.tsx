import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";

const PaymentDetails = () => {
  return (
    <Box className="bg-white p-16 m-16 w-5/6 mx-auto">
      <Typography
        variant="h1"
        className="text-2xl uppercase font-bold tracking-wide mb-8"
      >
        Checkout
      </Typography>
      <Box className="mb-16">
        <Typography
          variant="h2"
          className="uppercase text-[1.25rem] text-[#d87d4a] font-semibold mb-6"
        >
          Billing Details
        </Typography>
        <Box className="flex flex-col space-y-6">
          <div className="flex justify-between space-x-4">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              placeholder="Alexei Ward"
              className="w-80 mb-6"
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              placeholder="alexi@mail.com"
              className="w-80"
            />
          </div>
          <TextField
            id="phone"
            label="Phone Number"
            variant="outlined"
            placeholder="+1 202-555-0136"
            className="w-80"
          />
        </Box>
      </Box>
      <Box className="mb-16">
        <Typography
          variant="h2"
          className="uppercase text-[1.25rem] text-[#d87d4a] font-semibold mb-6"
        >
          Shipping Info
        </Typography>
        <Box className="flex flex-col space-y-6">
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            placeholder="123 Main Street"
            className="w-full mb-6"
          />
          <div className="flex justify-between space-x-4">
            <TextField
              id="zipcode"
              label="Zip Code"
              variant="outlined"
              placeholder="11001"
              className="w-80 mb-6"
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              placeholder="New York"
              className="w-80"
            />
          </div>
        </Box>
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          placeholder="Country"
          className="w-80"
        />
      </Box>
      <Box>
        <Typography
          variant="h2"
          className="uppercase text-[1.25rem] text-[#d87d4a] font-semibold mb-6"
        >
          Payment Details
        </Typography>
        <Box className="flex flex-col space-y-6">
          <div className="flex justify-between w-full mb-6">
            <Typography>Payment Method</Typography>
            <Box className="flex flex-col mb-4">
              <Box className="p-8 border border-lightgray mb-4">
                <FormControlLabel
                  value="e-money"
                  control={<Radio />}
                  label="e-Money"
                />
              </Box>
              <Box className="p-8 border border-lightgray">
                <FormControlLabel
                  value="cash-on-delivery"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
              </Box>
            </Box>
          </div>
          <div className="flex justify-between space-x-4">
            <TextField
              id="e-money-number"
              label="e-Money Number"
              variant="outlined"
              placeholder="238590288"
              className="w-80 mb-6"
            />
            <TextField
              id="e-money-pin"
              label="e-Money Pin"
              variant="outlined"
              placeholder="6891"
              className="w-80"
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentDetails;
