import { useEffect, useState } from "react";

export function App() {
  const [fact, setFact] = useState();
  const [image, setImage] = useState();

  const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      //   .then((data) => setFact(data.fact));
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        // const firstWord = fact.split(" ")[0]; //Si me piden una palabra
        const threeFirstWord = fact.split(" ", 3).join(" "); //Si me piden 3 palabras
        console.log(threeFirstWord);

        const imageUrl = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`;
        setImage(imageUrl);
      });
  }, []);

  //   useEffect(() => {
  //     getCatFacts();
  //   }, []);

  //   const getCatFacts = async () => {
  //     try {
  //       const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  //       const result = await response.json();
  //       setFact(result.fact);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p> {fact}</p>}
      {image && (
        <img
          src={image}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}
