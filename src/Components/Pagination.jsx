import React, { useEffect, useState } from "react";

function Pagination() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEM_PER_PAGE = 10;

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setData(data.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const productLength = data?.length;
  const totalPages = Math.ceil(productLength / ITEM_PER_PAGE);

  const start = currentPage * ITEM_PER_PAGE;
  const end = start + ITEM_PER_PAGE;

  console.log(totalPages,'kk')

  console.log(start,end,currentPage,'---')
  return (
    <>
      <div>
        <h1>Pagination</h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "0px",
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid black",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            pre
          </button>
          {[...Array(totalPages).keys()].map((v, i) => (
            <button
              key={i + 1}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "0px",
                backgroundColor: `${currentPage === v ? "green":"transparent"}`,
                color: "black",
                border: "1px solid black",
                textAlign: "center",
              }}
              onClick={() => setCurrentPage(v)}
            >
              { v + 1}
            </button>
          ))}
          <button
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "0px",
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid black",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages - 1}
          >
            next
          </button>
        </div>
        {!data.length ? (
          <h1>No products found </h1>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "16px",
              padding: "20px",
            }}
          >
            {data.slice(start, end).map((v) => (
              <div
                key={v.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  background: "#fff",
                  transition: "0.3s",
                }}
              >
                <img
                  src={v.images[0]}
                  alt={v.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                <h1 style={{ fontSize: "18px", margin: "10px 0" }}>
                  {v.title}
                </h1>

                <p style={{ color: "green", fontWeight: "bold" }}>₹{v.price}</p>

                <p style={{ color: "red" }}>
                  discountPercentage:{v.discountPercentage}% OFF
                </p>

                <p style={{ fontSize: "14px", color: "#555" }}>
                  Description: {v.description}
                </p>

                <p style={{ marginTop: "8px" }}>Rating:⭐ {v.rating}</p>

                <p style={{ fontSize: "13px", color: "gray" }}>
                  Brand: {v.brand}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Pagination;
