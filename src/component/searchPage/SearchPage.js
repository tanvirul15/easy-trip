import React, { useState } from "react";
import { useParams } from "react-router";
import MapShowcase from "../mapShowcase/MapShowcase";
import SearchCard from "../searchCard/SearchCard";
import "./SearchPage.css";
import fakedata from "../../fakedata";
import Farecard from "../fareCare/Farecard";

const SearchPage = () => {
  const { selectedVehicle } = useParams();
  console.log(selectedVehicle);
  const [searchClicked, setSearchClicked] = useState(true);
  const searchButtonHandeler = (isInputGiven) => {
    if (isInputGiven) setSearchClicked(false);
    else alert("All Field Required");
  };
  console.log(fakedata[selectedVehicle]);
  return (
    <div className='container'>
      <div className='row py-5'>
        <div className='col-md-4'>
          {searchClicked && <SearchCard searchButtonHandeler={searchButtonHandeler}></SearchCard>}
          {!searchClicked && fakedata[selectedVehicle].map((item) => <Farecard item={item} />)}
        </div>
        <div className='col-md-8'>
          <MapShowcase></MapShowcase>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
