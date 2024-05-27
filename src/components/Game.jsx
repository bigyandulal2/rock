import { useState } from "react";
import { motion } from "framer-motion";
import Decide from "../components/Decide";
export default function game({
  name,
  option,
  showComputer,
  setShowComputer,
  computer,
  setComputer,
  setOption,
}) {
  function Win() {
    if (showComputer) {
      if (
        (name === "scissors" && computer.name === "paper") ||
        (name === "rock" && computer.name === "scissors") ||
        (name === "paper" && computer.name === "rock")
      ) {
        return <Decide name={"You Won"} setOption={setOption} />;
      }
    }
    return null;
  }
  function Lose() {
    if (showComputer) {
      if (
        (computer.name === "scissors" && name === "paper") ||
        (computer.name === "rock" && name === "scissors") ||
        (computer.name === "paper" && name === "rock")
      ) {
        return <Decide name={"You Lose"} setOption={setOption} />;
      }
    }
    return null;
  }
  function Draw() {
    if (computer.name === name) {
      return <Decide name={"You Draw"} setOption={setOption} />;
    }
  }

  return (
    <figure className="playing">
      <div className="chose player">
        <h3 className="text-white text-3xl text-center my-12">You chose</h3>
        <div className={`chose_${name}`}>
          <motion.figure
            className={`chose_box`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <img src={option} alt="paper" />
          </motion.figure>
        </div>
      </div>
      {showComputer && <Lose />}
      {showComputer && <Win />}
      {showComputer && <Draw />}

      <div className="chose computer">
        <h3 className="text-white text-3xl text-center my-12">Computer</h3>
        {showComputer && (
          <div className={`chose_${computer?.name}`}>
            <motion.figure
              className={`chose_box`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img src={computer?.picked} alt={`computer`} />
            </motion.figure>
          </div>
        )}
      </div>
    </figure>
  );
}
