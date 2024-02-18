import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCard from '../../../../Components/ShopCard/ShopCard';
import "./Shop.scss";
import { useUser } from './../../../../Hooks/useUser';


const Shop = ({ loadedToys }) => {
  const [usedToy, setUsedToy] = useState(loadedToys);
  const [toys, setToys] = useState(loadedToys);
  const [category, setCategory] = useState([]);
   const {loggedUser} =useUser()


useEffect(()=>{
  fetch("/category.json")
  .then((res) => res.json())
  .then((data) => {
    setCategory(data);
  });
},[])

  const handleSelect = (categoryName) => {
    setUsedToy(toys.filter((toy) => toy.category === categoryName));
  };

  return (
    <div className="" >
      <Tabs className='wrapper' >
        <TabList data-aos="fade-up" >
          {/* categories */}
          {category.map(
            (category, index) => (
              <Tab key={index} onClick={() => handleSelect(category.value)}  >
                {category.name}
              </Tab>
            )
          )}
        </TabList>

        {/* Showing cards by category */}
        {category.map(
          (category, index) => (
            <TabPanel key={index}>
              {/* Showing all card */}
              <div className="grid gap-3 lg:gap-5 xl:gap-4 mt-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {usedToy?.map((toy) => (
                  <div key={toy._id} className="justify-self-center" >
                    <ShopCard toy={toy}  />
                  </div>
                ))}
              </div>
            </TabPanel>
          )
        )}
      </Tabs>
    </div>
  );
};

export default Shop;
