import React from "react";
import Image from "next/image";

const lines = [
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "There are 10 kinds of people. Those who know binary and those who don't.",
  "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "It is pitch dark. You are likely to be eaten by a grue.",
];

function getRandomLine() {
  const randomIndex = Math.floor(Math.random() * lines.length);
  return lines[randomIndex];
}

export async function getServerSideProps() {
  const line = getRandomLine();
  return { props: { line } };
}

function HomePage({ line }) {
  return (
    <>
      <Image
        src="/containers.jpg" // Path to your image
        width={1200} // Desired width
        height={675} // Desired height
      />
      <div>{line}</div>
      <a href="https://github.com/justinwong-dsaid/workshop01">
        https://github.com/justinwong-dsaid/workshop01
      </a>
    </>
  );
}

export default HomePage;
