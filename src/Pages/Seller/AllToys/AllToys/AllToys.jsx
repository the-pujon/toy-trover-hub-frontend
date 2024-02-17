import React, { useEffect, useState } from "react";
import AddToy from "./../../AddToy/AddToy";
import { MdClose, MdEdit } from "react-icons/md";
import useApi from "../../../../Hooks/useApi";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setAllToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { get, put, del } = useApi();

  useEffect(() => {
    get("toys").then((data) => {
      setAllToys(data);
      setFilteredToys(data);
    });

    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
    setRefresh(false);
  }, [refresh]);

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();
    let toySearch = toys.filter((data) => {
      if (data?.name) {
        const name = data?.name?.toLowerCase();
        return name.startsWith(value);
      }
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
    get(`toys?category=${e.target.value}`).then((data) => {
      setAllToys(data);
      setFilteredToys(data);
    });
  };

  const handleSort = (e) => {
    if (e.target.value === "price-lowest") {
      const s = [...toys].sort((a, b) => a.price - b.price);
      settoys(s);
    }

    if (e.target.value === "price-highest") {
      const s = [...toys].sort((b, a) => a.price - b.price);
      setFilteredToys(s);
    }
  };

  const handleDelete = (id) => {
    del(`toys/${id}`, "CategoryDelete").then(() => {
      setRefresh(true);
    });
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-secondary backdrop-blur-md">
        <div className="overflow-x-auto pt-12 md:pt-[8rem]">
          {/* title */}
          <div className="text-4xl font-thin">All Products</div>

          {/* filters section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 w-full">
            <div className="flex items-center space-x-4 text-primary  ">
              {/* search */}
              <input
                type="text"
                placeholder="Search toys..."
                className="toyBorder focus:outline-none placeholder:text-secondary  "
                onChange={handleChange}
                onSubmit={handleSubmit}
              />

              {/* filter with category */}
              <select onChange={handleCategory} className="toyBorder ">
                <option defaultValue="All Categories">All Categories</option>
                {category.map((c, i) => (
                  <option
                    key={i}
                    value={c.value}
                    className="bg-primary text-secondary"
                  >
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              {/* add product button */}
              <button
                className="toyButton "
                onClick={() =>
                  document.getElementById("addProduct").showModal()
                }
              >
                Add Product
              </button>

              {/* Modal */}
              <dialog
                id="addProduct"
                className="modal modal-bottom sm:modal-middle bg-primary/20"
              >
                <div className="modal-box  w-11/12 min-w-[80rem] max-w-7xl border border-dotted border-secondary/30 backdrop-blur-md bg-secondary/10">
                  <form method="dialog">
                    <button className="focus:outline-none hover:outline-none absolute text-3xl font-thin right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <AddToy setRefresh={setRefresh} />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              {/* sorting option */}
              <select className="toyBorder " onChange={handleSort}>
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

          {/* table */}
          <table className="table w-full overflow-auto">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredToys?.map((toy) => (
                <tr key={toy._id}>
                  {/* product image and name */}
                  <td>
                    <Link
                      to={`/toys/${toy._id}`}
                      className="flex items-center space-x-3"
                    >
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={toy?.toyImage[0]}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>

                      <div className="font-bold">{toy.name}</div>
                    </Link>
                  </td>

                  {/*  seller name and category */}
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

                  <td>
                    <div className="flex gap-2" >
                      <button
                        className="cursor-pointer text-2xl"
                        onClick={() => handleDelete(toy._id)}
                      >
                        <MdClose />
                      </button>
                      <Link
                        to={`/dashboard/editToy/${toy._id}`}
                        className="cursor-pointer text-2xl"
                      >
                        <MdEdit />
                      </Link>
                    </div>
                  </td>
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
