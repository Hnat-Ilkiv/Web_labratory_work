const NextButton = (props) => {
    return (
      <div className="arrow" onClick={props.func}>
        <svg
          width="100"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
        >
          <title>Artboard-34</title>
          <g id="Right-2" data-name="Right">
            <polygon
              stroke="white"
              points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999"
            />
          </g>
        </svg>
      </div>
    );
  };
  
  export default NextButton;