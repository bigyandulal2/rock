import "./App.css";
import { useState, useEffect } from "react";
import triangle from "./images/bg-triangle.svg";
import rock from "./images/icon-rock.svg";
import { motion } from "framer-motion";
import paper from "./images/icon-paper.svg";
import scissors from "./images/icon-scissors.svg";
// import pentagon from "./images/bg-pentagon.svg";
import imgRules from "./images/image-rules.svg";
import close from "./images/icon-close.svg";
import Game from "./components/Game";

const options = [
  { name: "scissors", picked: scissors },
  { name: "paper", picked: paper },
  { name: "rock", picked: rock },
];
export default function App() {
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);
  const [option, setOption] = useState(null);
  const [showComputer, setShowComputer] = useState(false);
  const [computer, setComputer] = useState(null);
  const [name, setName] = useState("");

  async function handleImg(img, option_name) {
    await setOption(img);
    await setName(option_name);
    const randomComputerChoice = getRandomElement(options);
    if (
      (option_name === "scissors" && randomComputerChoice.name === "paper") ||
      (option_name === "rock" && randomComputerChoice.name === "scissors") ||
      (option_name === "paper" && randomComputerChoice.name === "rock")
    ) {
      setScore((prevScore) => prevScore + 1);
    } else if (
      (randomComputerChoice.name === "scissors" && option_name === "paper") ||
      (randomComputerChoice.name === "rock" && option_name === "scissors") ||
      (randomComputerChoice.name === "paper" && option_name === "rock")
    ) {
      setScore((prevScore) => Math.max(0, prevScore - 1));
    }

    setComputer(randomComputerChoice);
  }
  setTimeout(() => {
    setShowComputer(true);
  }, 2000);

  function handleClose() {
    setRules(false);
  }
  function handleOpen() {
    setRules(true);
  }
  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  // console.log("app", computer);

  return (
    <div className="app bg-radial flex flex-col">
      <header className="header_box flex justify-between p-4 mt-10 rounded-lg">
        <div className="game_items  text-3xl text-white self-start">
          <h3>Rock</h3>
          <h3>Paper</h3>
          <h3>scissors</h3>
        </div>
        <div className="game_score bg-white w-32 rounded-lg flex align-middle flex-col justify-center text-3xl">
          <span className="self-center">score</span>
          <strong className="self-center">
            {setShowComputer && score} {!setShowComputer && 0}
          </strong>
        </div>
      </header>
      <section className="game  relative">
        {!option && (
          <>
            <img src={triangle} alt="triangle" className="relative" />
            <div className="rock" onClick={() => handleImg(rock, "rock")}>
              <motion.figure className="rock_box ">
                <img src={rock} alt="rock" />
              </motion.figure>
            </div>
            <div className="paper" onClick={() => handleImg(paper, "paper")}>
              <motion.figure className="paper_box">
                <img src={paper} alt="paper" />
              </motion.figure>
            </div>
            <div
              className="scissors"
              onClick={() => handleImg(scissors, "scissors")}
            >
              <motion.figure className="scissors_box">
                <img src={scissors} alt="scissors" />
              </motion.figure>
            </div>
          </>
        )}
        {option && (
          <Game
            name={name}
            option={option}
            showComputer={showComputer}
            setShowComputer={setShowComputer}
            computer={computer}
            setComputer={setComputer}
            setOption={setOption}
          />
        )}
      </section>
      <section className="rules">
        <div className=" rules_rule text-4xl text-white" onClick={handleOpen}>
          Rules
        </div>

        {rules && (
          <div className="rules_box grid grid-cols-1">
            <motion.img
              src={close}
              alt="close"
              onClick={handleClose}
              className="justify-self-end m-4 cursor-pointer opacity-65 hover:opacity-100"
            />
            <img src={imgRules} alt="imgRules" />
          </div>
        )}
      </section>
    </div>
  );
}
