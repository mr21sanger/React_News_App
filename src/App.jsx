import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";
import "./components/css/style.css"

function App() {
  const options = ["Politics", "Wwe", "Sports", "Bollywood"];
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const apiKey = "8585f6668f1944deb2545c040f39002e";
  let searchItem = async (search) => {
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;
    setLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();
      let news = data.articles;
      setArticles(news);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    searchItem("India");
  }, []);

  return (
    <>
      <div className="h-screen w-full">
        {/* NAVBAR */}
        <div>
          <nav className="w-full h-16 bg-gray-500 flex justify-center items-center">
            <div className="w-2/6 h-full text-center py-2">
              <span
                className="text-5xl cursor-pointer font-bold font-serif text-white"
                onClick={() => searchItem("India")}
              >
                AKH
              </span>
              <span
                className="text-5xl cursor-pointer font-bold font-serif text-black"
                onClick={() => searchItem("India")}
              >
                BAR
              </span>
            </div>
            <ul className="text-black flex justify-evenly w-4/6 items-center">
              {options.map((opt) => {
                return (
                  <li
                    key={opt}
                    className="text-white cursor-pointer font-bold font-mono text-2xl hover:text-black transition-all duration-300"
                    onClick={() => searchItem(opt)}
                  >
                    {opt}
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center items-center w-1/3 h-full">
              <input
                type="text"
                className="w-5/6 h-1/2 border-2 border-black rounded-r-none border-r-0  rounded-lg px-4 text-black font-semibold
              "
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="w-1/12 bg-red-500 h-1/2 border-2 border-black border-l-0 rounded-r-lg  text-center"
                onClick={() => searchItem(input)}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </nav>
        </div>

        {/* ARTICLE CARDS */}
        <div className="w-full h-auto flex flex-wrap justify-center md:justify-evenly items-center my-12 gap-y-12">
          {loading ? (
            <Loading />
          ) : (
            articles.map((currElem, idx) => {
              return <Card key={idx} display={currElem} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
