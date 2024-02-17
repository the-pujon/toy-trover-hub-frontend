import React, { useEffect, useState } from "react";
import { useUser } from "../../../Hooks/useUser";
import { Link } from "react-router-dom";
const MyToys = () => {
  const { loggedUser } = useUser();
  const [toys, setAllToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/toys?email=${loggedUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setFilteredToys(data);
        console.log(data);
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
    console.log(e.target.value);
    fetch(
      `http://localhost:5000/api/toys?email=${loggedUser?.email}&category=${e.target.value}`
    )
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

  const handleDelete = (id) => {
    //e.preventDefault()
    fetch(`http://localhost:5000/api/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const afterDelete = filteredToys.filter((toy) => toy._id !== id);
        //console.log(afterDelete);
        setFilteredToys(afterDelete);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="wrapper min-h-screen text-secondary backdrop-blur-md">
        <div className="overflow-x-auto pt-[8rem]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-primary">
              <input
                type="text"
                placeholder="Search toys..."
                className="px-4 py-2 border border-secondary text-secondary bg-transparent rounded-lg focus:outline-none "
                onchange="{handleSearch}"
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
              <select
                onChange={handleCategory}
                className="px-4 py-2 border border-secondary bg-transparent text-secondary rounded-lg focus:outline-none "
              >
                <option value="">All Categories</option>
                {category.map((c) => (
                  <option value={c.value} className="bg-primary text-secondary">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <select
              className="px-4 py-2 border border-secondary bg-transparent rounded-lg focus:outline-none "
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

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Name</th>
                <th>Seller</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
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
                  <td className="w-[21rem]">
                    {toy.description.slice(0, 100)}...
                  </td>
                  <td>$ {toy.price}</td>
                  <td>
                    <Link
                      to={`/editToy/${toy._id}`}
                      className="toyButton !m-0 !p-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="toyButton !m-0 !ml-2 !p-2"
                    >
                      Delete
                    </button>
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

export default MyToys;
