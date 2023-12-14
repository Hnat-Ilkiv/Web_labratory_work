const BackButton = (props) => {
    return (
      <div className="back_arrow" onClick={props.func}>
        <svg
          width="100"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
        >
          <title>Artboard-35</title>
          <g id="Left-2" data-name="Left">
            <polygon
              stroke="#2d383c"
              points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001"
            />
          </g>
        </svg>{" "}
      </div>
    );
  };
  
  export default BackButton;