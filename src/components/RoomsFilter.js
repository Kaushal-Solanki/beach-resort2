import React, { useContext } from "react";
import { RoomContext } from "../Context";
import { Title } from "../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    type,
    price,
    maxPrice,
    minPrice,
    minSize,
    maxSize,
    capacity,
    breakfast,
    pets,
    handleChange,
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  // get unique guests

  let people = getUnique(rooms, "capacity");

  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search room" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            id="capacity"
            name="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            value={price}
            id="price"
            className="form-control"
            onChange={handleChange}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        {/*size */}
        <div className="form-group">
          <label htmlFor="price">room size</label>
          <div className="input-size">
            <input
              type="number"
              name="minSize"
              value={minSize}
              id="size"
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              id="size"
              className="size-input"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                value={breakfast}
                id="breakfast"
                onChange={handleChange}
              />

              <label htmlFor="breakfast">breakfast</label>
            </div>
          </div>
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                value={pets}
                id="pets"
                onChange={handleChange}
              />

              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
