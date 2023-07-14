import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRegionData = createAsyncThunk(
  "region/fetchRegionData",
  async () => {
    try {
      const response = await axios.get(
        `https://covid-api.com/api/regions`,
        {
          params: {
            order: "name",
            sort: "asc",
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
  selectedCountry: "",
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    selectCounrty: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegionData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRegionData.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(fetchRegionData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error?.message;
    });
  },
});

export const { selectCounrty } = regionSlice.actions;

export default regionSlice.reducer;