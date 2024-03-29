import React, { useEffect, useState } from "react";
import PreviewImages from "../../../Components/PreviewImages/PreviewImages";
import { useUser } from "../../../Hooks/useUser";
import useApi from "../../../Hooks/useApi";

const AddToy = ({ setRefresh }) => {
  const { loggedUser } = useUser();

  const [upLoadedImages, setUpLoadedImages] = useState([]);
  const [prvImg, setPrvImg] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  const { post } = useApi();

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        setSubcategory(data[0].subcategory);
      });
  }, []);

  const handleCategory = (e) => {
    const cValue = e.target.value;
    console.log(cValue);
    //[1,2,3].fin
    const sub = category.find((c) => {
      return c.value === cValue;
    });

    const sc = sub.subcategory;

    setSubcategory(sc);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setDisableButton(true);

    const apiKey = "3771a5eec87b0ec98c5b62855eab4fae";
    const apiUrl = "https://api.imgbb.com/1/upload";

    const formData = new FormData();
    formData.append("image", selectedImage);

    setPrvImg((prev) => [...prev, URL.createObjectURL(selectedImage)]);

    fetch(`${apiUrl}?key=${apiKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to upload image");
        }
      })
      .then((data) => {
        // Handle the uploaded image data here (e.g., display the URL)
        console.log("Uploaded image URL:", data.data.url);
        setUpLoadedImages((prev) => [...prev, data.data.url]);
        setDisableButton(false);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  const handleImageUpload = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      sellerName: form.sellerName.value,
      sellerEmail: form.sellerEmail.value,
      sellerImage: loggedUser?.photoURL,
      toyImage: upLoadedImages,
      category: form.category.value,
      subcategory: form.subcategory.value,
      inStock: form.inStock.value,
      description: form.description.value,
      price: form.price.value,
    };
    console.log(data);

    post("toys", data, "addProduct")
      .then((data) => {
        setRefresh(true);
        document.getElementById("addProduct").close();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="">
      <div className="wrapper">
        <div className="flex items-center justify-center flex-col lg:flex-row-reverse ">
          <div className="flex-1">
            <PreviewImages PreviewImages={prvImg} />
          </div>
          <div className="flex-1 p-[1rem_1.5rem]  rounded-2xl ">
            <h1 className="text-secondary text-4xl font-thin mb-4 text-center">
              Add Product
            </h1>
            <form action="" onSubmit={handleImageUpload} id="productAdd">
              {/* name */}
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="name"
                  name="name"
                  type="name"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                  placeholder="name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              {/* sellerName */}
              <div className="flex gap-4 items-center">
                <img
                  src={loggedUser?.photoURL}
                  alt="sellerImage"
                  className="w-20 h-20 border border-white rounded-full"
                />
                <div className="form-control relative my-6 w-full">
                  <input
                    autoComplete="off"
                    id="sellerName"
                    name="sellerName"
                    type="text"
                    value={loggedUser?.displayName}
                    disabled
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                    placeholder="sellerName"
                    required
                  />
                  <label
                    htmlFor="sellerName"
                    className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                  >
                    Seller Name
                  </label>
                </div>
              </div>
              {/* sellerEmail */}
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="sellerEmail"
                  name="sellerEmail"
                  type="text"
                  value={loggedUser?.email}
                  disabled
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                  placeholder="sellerEmail"
                  required
                />
                <label
                  htmlFor="sellerEmail"
                  className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Seller Email
                </label>
              </div>

              {/* toyImage */}
              <div className="form-control relative my-6 ">
                <label htmlFor="email" className="text-secondary">
                  Upload Toy Image
                </label>
                <input
                  accept="image/*"
                  onChange={handleImageChange}
                  type="file"
                  className="file-input file-input-ghost w-full file:border-r-2 file:border-r-secondary/50   border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50"
                />
              </div>
              {/* description */}
              <div className="form-control relative my-6 mt-12">
                <input
                  autoComplete="off"
                  id="description"
                  name="description"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                  placeholder="description"
                  required
                />
                <label
                  htmlFor="description"
                  className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Toy Description
                </label>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-2">
                {/* category */}
                <div className="form-control relative my-6 w-full">
                  <select
                    onChange={handleCategory}
                    id="category"
                    className="select select-ghost w-full max-w-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50 outline-none appearance-none"
                  >
                    <option disabled>Category</option>
                    {category.map((c) => (
                      <option
                        value={c.value}
                        key={c.value}
                        className="bg-primary text-secondary"
                      >
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* subcategory */}
                <div className="form-control relative mb-6 lg:mb-0 lg:my-6 w-full">
                  <select
                    id="subcategory"
                    className="select select-ghost w-full max-w-xs border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-secondary text-sm border-b-secondary/50 outline-none appearance-none"
                  >
                    <option disabled>Subcategory</option>
                    {subcategory.map((c) => (
                      <option
                        value={c.value}
                        key={c.value}
                        className="bg-primary text-secondary"
                      >
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-2">
                {/* price */}
                <div className="form-control relative my-6 w-full">
                  <input
                    autoComplete="off"
                    id="price"
                    name="price"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                    placeholder="price"
                    required
                  />
                  <label
                    htmlFor="price"
                    className="absolute left-0 -top-3.5 text-secondary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                  >
                    Price
                  </label>
                </div>
                {/* inStock */}
                <div className="form-control relative my-6 w-full">
                  <label htmlFor="email" className="text-secondary">
                    In Stock
                  </label>
                  <div className="flex items-center">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text text-secondary mr-2">
                          Yes
                        </span>
                        <input
                          type="radio"
                          name="inStock"
                          value="Yes"
                          className="radio checked:bg-secondary border-secondary/50"
                          checked
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text text-secondary mr-2">
                          No
                        </span>
                        <input
                          type="radio"
                          name="inStock"
                          value="No"
                          className="radio checked:bg-secondary border-secondary/50"
                        />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text text-secondary mr-2">
                          TBA
                        </span>
                        <input
                          type="radio"
                          name="inStock"
                          value="TBA"
                          className="radio checked:bg-secondary border-secondary/50"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex" >
              <button
                form="productAdd"
                type="submit"
                disabled={disableButton}
                className="toyButton -mt-10"
              >
                Submit
              </button>
              <button
                onClick={() => document.getElementById("addProduct").close()}
                className="ml-2 toyButton"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
