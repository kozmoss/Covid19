import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRegionData,selectCounrty } from "../../redux/covidSlice/regionSlice";
import { fetchCovidData } from "../../redux/covidSlice/covidSlice";
import Error from "../Error";

import React from 'react'

function Countries() {
    const dispatch = useDispatch();
    const { data, status, error, selectedCountry } = useSelector(
      (state) => state.region
    );
   
    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchRegionData());
        dispatch(fetchCovidData({ selectedCountry }));
      } else {
        dispatch(fetchCovidData({ selectedCountry }));
      }
    },[selectedCountry]);
    
      const handleSelect = (e) => {
        dispatch(selectCounrty(e.target.value));
      };

    if(status === "failed"){
        return <Error error={error}/>
    }
   return (
    <select
    className="py-2 w-64 border-b-2 border-b-slate-500"
    value={selectedCountry}
    onChange={handleSelect}
    disabled={status === "loading"}
  >
    <option value="" disabled hidden>
      Select a country
    </option>
    {data.map((item, index) => (
      <option value={item?.iso} key={index}>
        {item?.name}
      </option>
    ))}
  </select>
);
};

export default Countries

