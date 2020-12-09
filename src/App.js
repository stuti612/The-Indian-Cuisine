import React, { useState } from "react";
import "./styles.css";

const foodDataBase = {
  Bihari: [
    { name: "Litti Chokha", ratings: "5/5" },
    { name: "Pittha", ratings: "4.5/5" }
  ],
  Gujrati: [
    { name: "Dhokla", ratings: "4.5/5" },
    { name: "Khandvi", ratings: "4/5" },
    { name: "Undhiyu", ratings: "3.5/5" }
  ],
  Punjabi: [
    { name: "Chole-Bhature", ratings: "4.5/5" },
    { name: "Lassi", ratings: "4/5" },
    { name: "Butter-Chicken", ratings: "5/5" }
  ],
  Malayali: [
    { name: "Idiyappam", ratings: "4.5/5" },
    { name: "Puttu and Kadala Curry", ratings: "3/5" },
    { name: "Thalassery Biryani", ratings: "5/5" }
  ]
};

var foodKnown = Object.keys(foodDataBase);

export default function App() {
  const [selectedState, setState] = useState("Bihari");

  function stateClickHandler(state) {
    setState(state);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="emoji">
          🍲
        </span>{" "}
        The Indian Cuisine
      </h1>
      <small>
        Checkout my list of Indian Cuisine...that might tickle your taste buds!
      </small>

      <div>
        {foodKnown.map(function (state) {
          return (
            <button
              onClick={() => stateClickHandler(state)}
              style={{
                cursor: "pointer",
                border: "1px solid black",
                padding: "0.5rem 1rem",
                margin: "1rem 0.5rem",
                borderRadius: "0.5rem",
                backgroundColor: "#FBBF24"
              }}
              key={state}
            >
              {state}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0px" }}>
          {foodDataBase[selectedState].map(function (food) {
            return (
              <li
                style={{
                  textAlign: "left",
                  listStyle: "none",
                  border: "1px solid #E6E5E5",
                  margin: "1rem 0rem",
                  borderRadius: "0.2rem",
                  width: "80%"
                }}
                key={food.name}
              >
                <div style={{ fontSize: "larger", padding: "0.5rem 1rem" }}>
                  {food.name}
                </div>
                <div style={{ fontSize: "smaller", padding: "0.3rem 1rem" }}>
                  {food.ratings}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
