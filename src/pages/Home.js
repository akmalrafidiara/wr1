import React, { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(function () {
    async function getData() {
      const request = await fetch('/data-content.json');
      const response = await request.json();
      setData(response);
    }
    getData();
  }, []);
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <h3>Hello, I'm</h3>
            <h2>Akmal Rafi Diara</h2>
            <h4>Web Developer</h4>
          </div>
        </div>
      </section>
      <section className="content-wrapper">
        <div className="container">
          <div className="about">
            <h4>About</h4>
            <h3>Who am i?</h3>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <div>
  <div>
    {data.map(function (item) {
      return (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.original_title}</p>
          <img src={`asset/img/${item.img_name}`} alt="nai" />
        </article>
      );
    })}
  </div>
</div>; */
}
