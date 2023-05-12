import React from 'react';

import Link from 'next/link';
const Login = () => {
  const ids = [1, 2, 3, 4];
  return (
    <div>
      <h1>Login</h1>
      <ul>
        {ids.map((a, index) => (
          <li key={index}>
            <Link href={`/Login/${a}`}>{a}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Login;
