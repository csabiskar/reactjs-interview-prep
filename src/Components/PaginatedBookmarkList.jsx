import React, { useState } from "react";

function PaginatedBookmarkList() {
  const [article, setArticle] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `Articel ${i + 1}`,
      content: `This is the content of article ${i + 1}.`,
      bookmarked: false,
    })),
  );

  const limit=10;
  const [currentPage,setCurrentPage]=useState(1)
  
  console.log(article);
  return (
    <>
      <div className="container-article">
        {article.map((v, i) => (
          <div key={v.id} className="article-card">
            <h1>{v.title}</h1>
            <p>{v.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PaginatedBookmarkList;
