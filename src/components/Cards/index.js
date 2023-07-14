import React from 'react';
import { useSelector } from 'react-redux';
import moment from "moment";
import Loading from '../Loading';
import Error from '../Error';

function Cards() {
    const {data,status,error} = useSelector((state) => state.covid)

    if(status === "loading"){
        return <Loading/>
    }

    if(status === "failed"){
        return <Error error={error}/>
    }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
    <div className="py-6 px-4 flex flex-col text-xl font-semibold bg-blue-200 border-b-8 border-b-blue-500 rounded-md shadow">
      <span className="mb-2">Infected</span>
      <span className="text-2xl font-bold">
        {data?.confirmed?.toLocaleString("en-US")}
      </span>
      <span>Last updated at:</span>
      <span className="text-gray-500">
        {moment(data?.date).format("llll")}
      </span>
    </div>

    <div className="py-6 px-4 flex flex-col text-xl font-semibold bg-green-200 border-b-8 border-b-green-500 rounded-md shadow">
      <span className="mb-2">Recovered</span>
      <span className="text-2xl font-bold">
        {data?.recovered?.toLocaleString("en-US")}
      </span>
      <span>Last updated at:</span>
      <span className="text-gray-500">
        {moment(data?.date).format("llll")}
      </span>
    </div>

    <div className="py-6 px-4 flex flex-col text-xl font-semibold bg-red-200 border-b-8 border-b-red-500 rounded-md shadow">
      <span className="mb-2">Deaths</span>
      <span className="text-2xl font-bold">
        {data?.deaths?.toLocaleString("en-US")}
      </span>
      <span>Last updated at:</span>
      <span className="text-gray-500">
        {moment(data?.date).format("llll")}
      </span>
    </div>

    <div className="py-6 px-4 flex flex-col text-xl font-semibold bg-yellow-200 border-b-8 border-b-yellow-500 rounded-md shadow">
      <span className="mb-2">Active</span>
      <span className="text-2xl font-bold">
        {data?.active?.toLocaleString("en-US")}
      </span>
      <span>Last updated at:</span>
      <span className="text-gray-500">
        {moment(data?.date).format("llll")}
      </span>
    </div>
  </div>
  )
}

export default Cards
