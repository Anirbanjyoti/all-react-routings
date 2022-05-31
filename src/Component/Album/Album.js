import React from "react";

const Album = (props) => {
  const { thumbnailUrl, albumId } = props.album;
  return (
    <div>
      <div className="albums">
        <img src={thumbnailUrl} alt="" />
        <p>
          <button>Album ID: {albumId}</button>
        </p>
      </div>
    </div>
  );
};

export default Album;
