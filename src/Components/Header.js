import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <h1>You aren't following anyone yet</h1>
        <p className="sub-title">
          <a href="https://twitter.com/" className="link">
            Find Friends
          </a>{" "}
          you already know from Twitter{" "}
        </p>
        <h4>Check out some of today’s popular shots</h4>
      </header>
    </>
  );
};

export default Header;
