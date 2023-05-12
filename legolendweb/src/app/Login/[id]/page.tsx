import React from 'react';

const Page = ({ params }) => {
  console.log(params.id);
  const id = params.id;
  return <div>{id} Hello</div>;
};

export default Page;
