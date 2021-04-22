const Heart = ({ color = "#ffffff" }) => {
  return (
    <svg
      height="9"
      viewBox="0 0 10 9"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m409.187 1207a2.523 2.523 0 0 0 -1.884.82.016.016 0 0 0 0 .01l-.3.39-.3-.37a2.519 2.519 0 0 0 -1.885-.85 2.742 2.742 0 0 0 -1.988.85 2.951 2.951 0 0 0 0 4.09l3.733 3.87a.614.614 0 0 0 .888 0l3.733-3.87a2.951 2.951 0 0 0 0-4.09 2.743 2.743 0 0 0 -1.989-.85z"
        fill={color}
        fillRule="evenodd"
        transform="translate(-402 -1207)"
      />
    </svg>
  );
};

export default Heart;