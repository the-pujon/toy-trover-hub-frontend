import React, { useEffect, useState } from "react";
import useApi from "../../../Hooks/useApi";
import ShopCard from "../../../Components/ShopCard/ShopCard";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Loading from "../../../Components/Loading/Loading";
//import { FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";

const Shop = () => {
  const [allToys, setAllToys] = useState([]);
  const [FilteredToys, setFilteredToys] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [filterTextActive, setFilterTextActive] = useState("all");
  const [loading, setLoading] = useState(true)

  const { get } = useApi();

  useEffect(() => {
    get("toys").then((res) => {
      setAllToys(res);
      setFilteredToys(res);
      setLoading(false)
    });

    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
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
      const name = data?.name.toLowerCase();
      return name?.startsWith(value);
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
      const sortedToys = [...allToys].sort((a, b) => a.price - b.price);
      setFilteredToys(sortedToys);
    }

    if (e.target.value === "price-highest") {
      const sortedToys = [...allToys].sort((b, a) => a.price - b.price);
      setFilteredToys(sortedToys);
    }
  };

  //TODO: All toys must have categorySlug and subCategorySlug
  //TODO: change all categoryName and subCategoryName into categorySlug and subCategorySlug
  const handleFilter = (value) => {
    //let value = search.toLowerCase();
    setFilterTextActive(value);

    if (value === "all") {
      setFilteredToys(allToys);
    } else {
      let afterFilter = allToys.filter((data) => {
        const filterByCategory = data.category.toLowerCase();
        const filterBySubCategory = data.subcategory.toLowerCase();
        return (
          filterByCategory === value.toLowerCase() ||
          filterBySubCategory === value.toLowerCase()
        );
      });
      setFilteredToys(afterFilter);
    }
  };

  return (
    <div className="wrapper min-h-screen pt-28 pb-10">
      <>
        <div className="flex gap-5 justify-between items-center my-5 ">
          {/* filter */}
          <div className="dropdown dropdown-right dropdown-bottom ">
            <label tabIndex={0} className=" text-white p-2 cursor-pointer">
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
              <ul className="menu bg-base-200 w-56 !rounded-full p-5 text-secondary flex flex-col gap-1">
                <li
                  className={`hover:bg-secondary hover:text-primary rounded-md  cursor-pointer ${
                    filterTextActive === "all" && "bg-secondary text-primary"
                  }`}
                  onClick={() => handleFilter("all")}
                >
                  <span className="pl-4">All</span>
                </li>
                {category?.map((item, index) => (
                  <li key={index}>
                    <details close={"true"}>
                      <summary
                        onClick={() => handleFilter(item.value)}
                        className={`hover:bg-secondary hover:text-primary ${
                          filterTextActive === item.value &&
                          "bg-secondary text-primary"
                        }`}
                      >
                        {item.name}
                      </summary>
                      <ul className="flex flex-col gap-1">
                        {item?.subcategory.length !== 0 &&
                          item?.subcategory?.map((s, i) => (
                            <li
                              key={i}
                              className={`rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-primary ${
                                filterTextActive === s.value &&
                                "bg-secondary text-primary"
                              }`}
                              onClick={() => handleFilter(s.value)}
                            >
                              {s.name}
                            </li>
                          ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* search and sort */}
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

          {/* sort */}
          <div className="!w-20">
            <select
              className="px-4 !w-20 overflow-auto py-2 border text-secondary border-secondary bg-transparent rounded-none focus:outline-none appearance-none"
              //  value="{sortOption}"
              onChange={handleSort}
              style={{ width: "1rem" }}
            >
              <option value="" className="text-primary !w-20">
                Sort By
              </option>

              <option
                value="price-lowest"
                className="text-primary !w-20 appearance-none"
              >
                &#8595;&#8595;
                {/*<span className="!hidden sm:block">
                  Price (Lowest to Highest) &#8595;
                </span>*/}
              </option>
              <option value="price-highest" className="text-primary !w-20">
                {/*<FaSortAmountUp />*/}
                &#8593;&#8593;
                {/*<span className="hidden sm:block">
                  Price (Highest to Lowest)
                </span>*/}
              </option>
            </select>
          </div>
        </div>
        {/* loading */}
        <div className="flex items-center justify-center w-full text-4xl text-white font-semibold">{loading && <Loading/>}</div>
        <div className="flex items-center justify-center w-full text-4xl text-white font-semibold" >
          {FilteredToys.length === 0 && !loading && <>Coming soon...</>}
        </div>
        <div className="grid wrapper gap-2 lg:gap-5 xl:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FilteredToys.length !== 0 &&
            FilteredToys?.map((toy) => (
              <div key={toy._id} className="justify-self-center">
                <ShopCard toy={toy} />
              </div>
            ))}
        </div>
      </>
    </div>
  );
};

export default Shop;
