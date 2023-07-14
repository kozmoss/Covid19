import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCovidData = createAsyncThunk(
  "tracker/fetchCovidData",
  async (params) => {
    try {
      const { selectedCountry } = params;
      const response = await axios.get(
        `https://covid-api.com/api/reports/total?`,
        {
          params: {
            ...(selectedCountry && { iso: selectedCountry }),
          },
        }
      );
      return response?.data?.data;
    } catch (error) {
      throw new Error(error?.message);
    }
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCovidData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCovidData.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(fetchCovidData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error?.message;
    });
  },
});

export default covidSlice.reducer;