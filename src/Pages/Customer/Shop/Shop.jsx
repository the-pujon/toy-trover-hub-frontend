import React, { useEffect, useState } from "react";
import useApi from "../../../Hooks/useApi";
import ShopCard from "../../../Components/ShopCard/ShopCard";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Shop = () => {
  const [allToys, setAllToys] = useState([]);
  const [FilteredToys, setFilteredToys] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");

  const { get } = useApi();

  useEffect(() => {
    get("toys").then((res) => {
      console.log(res);
      setAllToys(res);
      setFilteredToys(res);
    });

    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      });
  }, []);


    //for search
    const handleChange = (e) => {
      setSearch(e.target.value);
    };

    //for search
    useEffect(() => {
      let value = search.toLowerCase();
      let toySearch = allToys.filter((data) => {
        const name = data.name.toLowerCase();
        return name.startsWith(value);
      });
      setFilteredToys(toySearch);
    }, [search]);

    //for search
    const handleSubmit = (e) => {
      e.preventDefault();

      let value = search.toLowerCase();

      let toySearch = allToys.filter((data) => {
        const name = data.name.toLowerCase();
        return name === value;
      });

      setFilteredToys(toySearch);
    };

    const handleSort = (e) => {
      if (e.target.value === "price-lowest") {
        const s = [...allToys].sort((a, b) => a.price - b.price);
        setFilteredToys(s);
      }

      if (e.target.value === "price-highest") {
        const s = [...allToys].sort((b, a) => a.price - b.price);
        setFilteredToys(s);
      }
    };


  const handleTestClick = () => {
    console.log("done");
  };

  return (
    <div className="wrapper min-h-screen pt-32">
      <div>
        <div className="flex gap-5 justify-between items-center my-5 px-5">
          <div className="dropdown dropdown-right dropdown-bottom ">
            <label tabIndex={0} className=" text-white p-2 hover:border cursor-pointer border-secondary">

                <AiOutlineMenuUnfold className="text-3xl" />

            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] dropdown-content w-52 shadow-lg bg-transparent backdrop-blur-md rounded-lg"
              style={{
                background:
                  "linear-gradient(to top, #e7fa40 -50%, #e77f5a 100%)",
              }}
            >
              <ul className="menu bg-base-200 w-56 !rounded-full p-5 text-secondary flex flex-col ">
                {category?.map((item, index) => (
                  <li key={index}>
                    <details close>
                      <summary onClick={handleTestClick}>{item.name}</summary>
                      <ul className="flex flex-col" >
                        {item?.subcategory.length !== 0 &&
                          item?.subcategory?.map((s, i) => <li className="p-2" >
                            {console.log(s)}
                            {s.name}</li>)}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="search"
              name="toySearch"
              id="toySearch"
              className="bg-transparent py-2 px-4 text-secondary placeholder:text-secondary border-b border-secondary w-full focus:outline-none"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
          <div>
            <select
              className="px-4 py-2 border text-secondary border-secondary bg-transparent rounded-lg focus:outline-none"
              //  value="{sortOption}"
                onChange={handleSort}
            >
              <option value="" className="text-primary">
                Sort By
              </option>

              <option value="price-lowest" className="text-primary">
                Price (Lowest to Highest)
              </option>
              <option value="price-highest" className="text-primary">
                Price (Highest to Lowest)
              </option>
            </select>
          </div>
        </div>
        <div className="grid wrapper gap-4 !px-10 grid-cols-1 sm:grid-cols-4">
          {FilteredToys?.map((toy) => (
            <div key={toy._id}>
              <ShopCard toy={toy} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
