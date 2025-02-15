interface argentWalletIconProps {
  width?: number;
  height?: number;
}
export const argentWalletIcon = ({ height, width }: argentWalletIconProps) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 25 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_135_10)">
        <path
          d="M15.7167 0H9.28326C9.06831 0 8.89601 0.195263 8.89135 0.437975C8.76139 7.26035 5.60048 13.7356 0.159919 18.3221C-0.0128107 18.4676 -0.0521623 18.7412 0.0741186 18.9382L3.83819 24.8153C3.96624 25.0153 4.21574 25.0605 4.39138 24.9135C7.79319 22.0645 10.5295 18.6276 12.5 14.8181C14.4705 18.6276 17.2068 22.0645 20.6087 24.9135C20.7842 25.0605 21.0337 25.0153 21.1619 24.8153L24.926 18.9382C25.0521 18.7412 25.0128 18.4676 24.8402 18.3221C19.3994 13.7356 16.2386 7.26035 16.1088 0.437975C16.104 0.195263 15.9316 0 15.7167 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_135_10">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
