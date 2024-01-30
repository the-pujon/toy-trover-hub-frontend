import React, { useEffect, useState } from "react";
import AddToy from "./../../AddToy/AddToy";

const AllToys = () => {
  const [toys, setAllToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/toys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setFilteredToys(data);
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
    let toySearch = toys.filter((data) => {
      const name = data.name.toLowerCase();
      return name.startsWith(value);
    });
    setFilteredToys(toySearch);
  }, [search]);

  //for search
  const handleSubmit = (e) => {
    e.preventDefault();

    let value = search.toLowerCase();

    let toySearch = loadedToys.filter((data) => {
      const name = data.name.toLowerCase();
      return name === value;
    });

    setFilteredToys(toySearch);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    //console.log(e.target.value);
    fetch(`http://localhost:5000/api/toys?category=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setFilteredToys(data);
      });
  };

  const handleSort = (e) => {
    if (e.target.value === "price-lowest") {
      const s = [...filteredToys].sort((a, b) => a.price - b.price);
      setFilteredToys(s);
    }

    if (e.target.value === "price-highest") {
      const s = [...filteredToys].sort((b, a) => a.price - b.price);
      setFilteredToys(s);
    }
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-secondary backdrop-blur-md">
        <div className="overflow-x-auto pt-[8rem]">
          <div className="text-4xl font-thin">All Products</div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-4 text-primary">
              <input
                type="text"
                placeholder="Search toys..."
                //class="px-4 py-2 border border-secondary text-secondary bg-transparent rounded-lg focus:outline-none placeholder:text-secondary"
                className="toyBorder focus:outline-none placeholder:text-secondary"
                onchange="{handleSearch}"
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
              <select
                onChange={handleCategory}
                //defaultValue="All Categories"
                //class="px-4 py-2 border border-secondary bg-transparent text-secondary rounded-lg focus:outline-none "
                className="toyBorder"
              >
                <option>All Categories</option>
                {category.map((c) => (
                  <option value={c.value} className="bg-primary text-secondary">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-4">
              <button
                className="toyButton"
                onClick={() =>
                  document.getElementById("addProduct").showModal()
                }
              >
                Add Product
              </button>
              <dialog
                id="addProduct"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box  w-11/12 min-w-[80rem] max-w-7xl backdrop-blur-md">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className=" absolute text-3xl font-thin right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <AddToy />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              <select
                class="toyBorder"
                //  value="{sortOption}"
                onChange={handleSort}
              >
                <option value="" className="bg-primary">
                  Sort By
                </option>

                <option value="price-lowest" className="bg-primary">
                  Price (Lowest to Highest)
                </option>
                <option value="price-highest" className="bg-primary">
                  Price (Highest to Lowest)
                </option>
              </select>
            </div>
          </div>

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredToys?.map((toy) => (
                <tr key={toy._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={toy?.toyImage[0]}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>

                      <div className="font-bold">{toy.name}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={toy.sellerImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toy.sellerName}</div>
                        <div className="text-sm opacity-50">
                          {toy.sellerEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {toy.category}
                    <br />
                    <span className="badge badge-ghost border-none badge-sm">
                      {toy.subcategory}
                    </span>
                  </td>
                  <td>$ {toy.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
