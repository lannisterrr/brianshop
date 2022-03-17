import React from 'react';

export default function Sidebar() {
  return (
    <aside className="list__aside box-shadow-dark">
      <header className="list__aside-header p-4">
        <p className="f-8 f-bold">Filters</p>
        <a href="#" className="f-6 t-c-3 f-bold">
          Clear
        </a>
      </header>
      <main className="aside__content">
        <p className="f-8 f-bold p-h-4">Price</p>
        <div className="centered-row space-around-row">
          <p className="f-6">50</p>
          <p className="f-6">150</p>
          <p className="f-6">200</p>
        </div>
        <input
          type="range"
          className="custom-range m-4"
          id="volume"
          name="volume"
        />
        <p className="f-8 f-bold p-4">Category</p>
        <div className="centered-row space-around-row component-border p-4">
          <label for="books" className="checkbox f-6">
            <input
              checked
              className="checkbox__input"
              type="checkbox"
              name="myCheckboxName"
              id="books"
            />
            <div className="checkbox__box"></div>
            Books
          </label>
          <label for="hoodies" className="checkbox f-6">
            <input
              className="checkbox__input"
              type="checkbox"
              name="myCheckboxName"
              id="hoodies"
            />
            <div className="checkbox__box"></div>
            Hoodies
          </label>

          <label for="stickers" className="checkbox f-6">
            <input
              className="checkbox__input"
              type="checkbox"
              name="myCheckboxName"
              id="stickers"
            />
            <div className="checkbox__box"></div>
            Stickers
          </label>

          <label for="art" className="checkbox f-6">
            <input
              className="checkbox__input"
              type="checkbox"
              name="myCheckboxName"
              id="art"
            />
            <div className="checkbox__box"></div>
            Art
          </label>

          <label for="t-shirt" className="checkbox f-6">
            <input
              className="checkbox__input"
              type="checkbox"
              name="myCheckboxName"
              id="t-shirt"
            />
            <div className="checkbox__box"></div>
            T-Shirt
          </label>
        </div>
        <p className="f-8 f-bold p-4">Rating</p>
        <div className="list__rating-container">
          <label className="radio f-6" for="item-1">
            <input
              type="radio"
              name="item"
              id="item-1"
              className="radio__input"
            />
            <div className="radio__radio border-round p-1"></div>4 star & above
          </label>

          <label className="radio f-6" for="item-2">
            <input
              type="radio"
              name="item"
              id="item-2"
              className="radio__input"
            />
            <div className="radio__radio border-round p-1"></div>3 star & above
          </label>

          <label className="radio f-6" for="item-3">
            <input
              type="radio"
              name="item"
              id="item-3"
              className="radio__input"
            />
            <div className="radio__radio border-round p-1"></div>1 star & above
          </label>
        </div>
        <div className="list__sort-container">
          <label for="user-rating" className="f-8 f-bold p-h-4">
            Sort by
          </label>
          <select
            name="user-rating"
            id="user-rating"
            className="list__aside-select"
          >
            <option value="relevance" selected>
              Relevance
            </option>
            <option value="low">Low to high</option>
            <option value="high">High to low</option>
          </select>
        </div>
      </main>
    </aside>
  );
}