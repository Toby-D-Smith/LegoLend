import React, { use } from 'react';

const getJokes = async () => {
  const response = await fetch('https://icanhazdadjoke.com/slack');
  const jokes = await response.json();
  console.log(jokes.attachments);
  return jokes?.attachments?.[0]?.text;
};

const DadJokes = () => {
  const jokes = use(getJokes());
  let apples = 10;
  setTimeout(() => {
    console.log('JOKES', jokes);
    apples = 20;
  }, 1000);
  return (
    <div>
      {jokes} {apples}
    </div>
  );
};

export default DadJokes;
