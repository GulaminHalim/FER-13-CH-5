import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

import api from "../../api";

import CardCar from "../../components/CardCar";

const SearchCar = () => {
  const navigate = useNavigate();
  const [carData, setCarData] = useState(null);

  const searchCar = async () => {
    try {
      const { data } = await api.getCars({
        
      });
      setCarData(data);
    } catch (error) {}
  };

  
  
  useEffect(() => {
    searchCar();
  }, []);
  

  return (
    <>
      <div>
        <button
          className="btn btn-primary "
          onClick={() => {
            searchCar();
          }}
        >
          Search
        </button>
      </div>

      <span>SEARCH CAR</span>
      {
        carData
         ? (
        <>
          {carData.cars.map((item, index) => (
            <CardCar
              key={`key-${index + 1}`}
              name={item.name}
              price={item.price}
              category={item.category}
              imageUrl={item.image}
              
            />
          ))
          }
        </>
      )
       : (<></>)
       }
    </>
  );
};

export default SearchCar;
