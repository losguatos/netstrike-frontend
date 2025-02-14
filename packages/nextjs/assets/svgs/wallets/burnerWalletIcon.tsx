interface burnerWalletIconProps {
  width?: number;
  height?: number;
}
export const burnerWalletIcon = ({ height, width }: burnerWalletIconProps) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 25 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_136_12)">
        <path
          d="M12.0089 25C9.64358 25 7.72615 23.6353 7.72615 21.9518C7.72615 20.2684 9.64358 18.9037 12.0089 18.9037C14.3741 18.9037 16.2916 20.2684 16.2916 21.9518C16.2916 23.6353 14.3741 25 12.0089 25Z"
          fill="currentColor"
          stroke="currentColor"
        />
        <g filter="url(#filter0_d_136_12)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.8187 23.1687C18.7006 23.4885 19.1834 23.7993 19.5659 23.6119C22.1908 22.3264 24.17 20.3201 24.7176 18.3367C25.4859 15.554 24.7268 12.9614 21.9327 10.6357C21.4083 10.1992 20.8122 9.77207 20.141 9.3549C15.5282 6.48737 14.4071 4.26774 14.1983 0.946278C14.1529 0.226016 13.1357 -0.25513 12.294 0.144456C9.54321 1.45022 7.04075 3.90659 7.83521 7.11185C8.09507 8.16047 8.81392 8.90344 9.45654 9.56777C10.2662 10.4046 10.955 11.1165 10.4531 12.1573C9.85794 13.392 7.8629 14.04 6.5733 13.4431C4.7635 12.6054 4.64966 11.1622 5.23517 9.64367C5.351 9.34332 4.92503 9.09078 4.57851 9.28067C1.93154 10.7312 -0.825558 14.0358 0.231245 18.2986C1.26347 20.8383 2.74699 22.2831 4.36633 23.0813C4.71297 23.2521 5.1346 23.002 5.06483 22.7064C5.00076 22.4347 4.96749 22.1555 4.96749 21.8709C4.96749 19.1033 8.11977 16.8647 12.0083 16.8707C15.8967 16.8768 19.049 19.1252 19.049 21.8928C19.049 22.3338 18.9689 22.7615 18.8187 23.1687Z"
            fill="currentColor"
            stroke="currentColor"
            strokeMiterlimit="7.96"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_136_12"
          x="-0.50145"
          y="-0.500122"
          width="26.0013"
          height="24.6688"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.42 0 0 0 0 0 0 0 0 0.7 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_136_12"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_136_12"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_136_12">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
