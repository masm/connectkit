export const Injected = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6505 3.64041C15.6501 3.64062 15.6497 3.64083 15.6493 3.64103L6.05165 8.43985L16.2501 13.5391L26.4484 8.43987L16.8508 3.64103C16.8504 3.64083 16.85 3.64063 16.8496 3.64043C16.6632 3.54806 16.458 3.5 16.25 3.5C16.042 3.5 15.8369 3.54806 15.6505 3.64041ZM28 10.4592L17.5001 15.7091L17.5 28.5205L27.248 23.6465L27.2508 23.6452C27.4757 23.5334 27.665 23.3611 27.7973 23.1477C27.9297 22.9342 27.9999 22.6881 28 22.4369V10.4592ZM15 28.527L15.0001 15.7091L4.50006 10.4591V22.4333C4.49831 22.6849 4.56687 22.9319 4.69807 23.1466C4.82896 23.3608 5.01696 23.5342 5.24095 23.6475C5.24148 23.6477 5.242 23.648 5.24253 23.6483L15 28.527ZM14.5207 31.0824L4.12104 25.8826L4.11759 25.8809C3.47681 25.558 2.93902 25.0625 2.56486 24.4502C2.19154 23.8394 1.99597 23.1365 2.00006 22.4207V10.0486C2.00044 9.33234 2.20062 8.62972 2.5781 8.021C2.95529 7.41274 3.49457 6.92167 4.13537 6.60291C4.13585 6.60267 4.13633 6.60243 4.13681 6.60219L14.534 1.40359L14.5368 1.40221C15.0692 1.13767 15.6556 1 16.25 1C16.8445 1 17.4309 1.13767 17.9633 1.40221L17.966 1.40358L28.3633 6.60219C28.3638 6.60245 28.3643 6.6027 28.3648 6.60295C29.0055 6.92171 29.5448 7.41276 29.922 8.021C30.2994 8.62973 30.4996 9.33168 30.5 10.0479V22.4376C30.4996 23.1538 30.2994 23.8565 29.922 24.4652C29.5448 25.0734 29.0056 25.5644 28.365 25.8831C28.3644 25.8834 28.3638 25.8837 28.3633 25.884L17.9664 31.0824C17.9663 31.0825 17.9665 31.0824 17.9664 31.0824C17.4316 31.3499 16.8415 31.4894 16.2435 31.4894C15.6455 31.4894 15.0554 31.3499 14.5207 31.0824C14.5205 31.0824 14.5208 31.0825 14.5207 31.0824Z"
      fill="#CCCCCC"
    />
  </svg>
);
export const WalletConnect = ({ background = false, ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={
      background ? { background: 'var(--brand-walletConnect)' } : undefined
    }
  >
    <path
      d="M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z"
      fill={background ? 'white' : 'var(--brand-walletConnect)'}
    />
  </svg>
);
/*
export const WalletConnectQRCode = ({ ...props }) => (
  <svg
    {...props}
    width="76"
    height="54"
    viewBox="0 0 76 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51 0H21V5H15V9H11V14H5V20H0V39H5V40H11V44H16V49H21V54H27H30H35V49H41V54H46H50H55V50H60V44H65V39H66H70H76V20H70V14H66V9H61V5H55V0H51ZM24 39V40H26V39H24ZM51 38H50V40H51V38Z"
      fill="var(--body-background)"
    />
    <path
      d="M20.5813 16.0338C29.807 6.65539 44.7645 6.65539 53.9901 16.0338L55.1004 17.1625C55.5619 17.6313 55.5619 18.3917 55.1004 18.8605L51.3024 22.7217C51.0716 22.956 50.6977 22.956 50.4672 22.7217L48.9392 21.1684C42.5031 14.6258 32.0684 14.6258 25.6323 21.1684L23.9961 22.8316C23.7654 23.0662 23.3915 23.0662 23.1609 22.8316L19.3627 18.9707C18.9014 18.5018 18.9014 17.7415 19.3627 17.2727L20.5813 16.0338ZM61.8452 24.0187L65.2255 27.4553C65.6867 27.9241 65.6867 28.6844 65.2255 29.1533L49.9831 44.6481C49.5219 45.1172 48.7739 45.1172 48.3127 44.6481L37.4948 33.651C37.3792 33.5339 37.1923 33.5339 37.077 33.651L26.2591 44.6481C25.7979 45.1172 25.05 45.1172 24.5888 44.6484C24.5887 44.6484 24.5887 44.6481 24.5887 44.6481L9.34595 29.153C8.88468 28.6841 8.88468 27.9238 9.34595 27.455L12.7263 24.0187C13.1876 23.5495 13.9355 23.5495 14.3968 24.0187L25.215 35.0161C25.3303 35.1332 25.5174 35.1332 25.6326 35.0161L36.4503 24.0187C36.9115 23.5495 37.6594 23.5495 38.1209 24.0187L48.9392 35.0161C49.0544 35.1332 49.2414 35.1332 49.3566 35.0161L60.1746 24.0187C60.6361 23.5498 61.384 23.5498 61.8452 24.0187Z"
      fill="var(--brand-walletConnect)"
    />
  </svg>
);
*/
export const MetaMask = ({ background = false, ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    style={
      background
        ? {
            background:
              'linear-gradient(0deg, var(--brand-metamask-12), var(--brand-metamask-11))',
            borderRadius: '27.5%',
          }
        : undefined
    }
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/**
    <defs>
      <linearGradient
        id="paint0_linear_967_843"
        x1="16"
        y1="0"
        x2="16"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.130682" stopColor="var(--brand-metamask-11)" />
        <stop offset="1" stopColor="var(--brand-metamask-12)" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" fill="url(#paint0_linear_967_843)" />
     */}
    <path
      d="M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z"
      fill="var(--brand-metamask-02)"
      stroke="var(--brand-metamask-02)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z"
      fill="var(--brand-metamask-08)"
      stroke="var(--brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z"
      fill="var(--brand-metamask-08)"
      stroke="var(--brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z"
      fill="var(--brand-metamask-08)"
      stroke="var(--brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z"
      fill="var(--brand-metamask-08)"
      stroke="var(--brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z"
      fill="var(--brand-metamask-08)"
      stroke="var(--brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z"
      fill="var(--brand-metamask-08)"
      stroke="var(--brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z"
      fill="var(--brand-metamask-08)"
      stroke="var(--brand-metamask-08)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z"
      fill="var(--brand-metamask-06)"
      stroke="var(--brand-metamask-06)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z"
      fill="var(--brand-metamask-06)"
      stroke="var(--brand-metamask-06)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z"
      fill="var(--brand-metamask-09)"
      stroke="var(--brand-metamask-09)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z"
      fill="var(--brand-metamask-09)"
      stroke="var(--brand-metamask-09)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z"
      fill="var(--brand-metamask-03)"
      stroke="var(--brand-metamask-03)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z"
      fill="var(--brand-metamask-03)"
      stroke="var(--brand-metamask-03)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z"
      fill="var(--brand-metamask-03)"
      stroke="var(--brand-metamask-03)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z"
      fill="var(--brand-metamask-03)"
      stroke="var(--brand-metamask-03)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z"
      fill="var(--brand-metamask-10)"
      stroke="var(--brand-metamask-10)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z"
      fill="var(--brand-metamask-10)"
      stroke="var(--brand-metamask-10)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z"
      fill="var(--brand-metamask-10)"
      stroke="var(--brand-metamask-10)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z"
      fill="var(--brand-metamask-10)"
      stroke="var(--brand-metamask-10)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z"
      fill="var(--brand-metamask-01)"
      stroke="var(--brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z"
      fill="var(--brand-metamask-01)"
      stroke="var(--brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z"
      fill="var(--brand-metamask-07)"
      stroke="var(--brand-metamask-07)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z"
      fill="var(--brand-metamask-04)"
      stroke="var(--brand-metamask-04)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z"
      fill="var(--brand-metamask-05)"
      stroke="var(--brand-metamask-05)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z"
      fill="var(--brand-metamask-05)"
      stroke="var(--brand-metamask-05)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z"
      fill="var(--brand-metamask-01)"
      stroke="var(--brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z"
      fill="var(--brand-metamask-01)"
      stroke="var(--brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z"
      fill="var(--brand-metamask-01)"
      stroke="var(--brand-metamask-01)"
      strokeWidth="0.269931"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Coinbase = ({ background = false, ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="var(--brand-coinbaseWallet)" />
    {background && (
      <rect
        rx="27%"
        width="20"
        height="20"
        fill="var(--brand-coinbaseWallet)"
      />
    )}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z"
      fill="white"
    />
  </svg>
);

export const Trust = ({ theme = 'light', ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="44"
      height="44"
      fill={
        theme === 'light' ? 'var(--brand-trust-02)' : 'var(--brand-trust-02b)'
      }
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.0246 11.8662C33.4096 11.8662 33.774 12.0243 34.0421 12.2925C34.3102 12.5675 34.4615 12.9387 34.4546 13.3168C34.3859 17.4143 34.2277 20.5493 33.9321 23.0312C33.6433 25.5131 33.2102 27.3556 32.5571 28.8475C32.1171 29.8443 31.574 30.6693 30.9346 31.3706C30.0752 32.2987 29.0921 32.9725 28.0196 33.6119C27.561 33.8861 27.0843 34.1568 26.5842 34.4408C25.5172 35.0468 24.3441 35.713 23.0146 36.6025C22.5333 36.9256 21.9077 36.9256 21.4265 36.6025C20.0766 35.7026 18.8879 35.0281 17.8112 34.4173C17.5718 34.2815 17.3379 34.1488 17.109 34.0175C15.8509 33.2887 14.7165 32.5943 13.7265 31.5906C13.0665 30.9306 12.4959 30.1262 12.0421 29.1706C11.4234 27.8918 11.004 26.345 10.6946 24.3443C10.2821 21.67 10.0759 18.1706 10.0002 13.3168C9.99336 12.9387 10.1377 12.5675 10.4059 12.2925C10.674 12.0243 11.0452 11.8662 11.4302 11.8662H12.0215C13.8433 11.8731 17.8652 11.6943 21.344 8.98559C21.8596 8.58683 22.5815 8.58683 23.0971 8.98559C26.5759 11.6943 30.5977 11.8731 32.4265 11.8662H33.0246ZM29.8277 27.9331C30.2746 27.0118 30.6459 25.74 30.9277 23.9112C31.2646 21.725 31.4709 18.755 31.5671 14.7125C29.4221 14.6506 25.7371 14.2381 22.224 11.8731C18.7109 14.2312 15.0259 14.6437 12.8877 14.7125C12.9633 18.0537 13.1146 20.6525 13.3552 22.6943C13.6302 25.0181 14.0221 26.5925 14.5102 27.6993C14.8333 28.435 15.1909 28.9643 15.6171 29.4318C16.1877 30.0575 16.9096 30.5731 17.8927 31.1643C18.3005 31.409 18.7502 31.6635 19.2396 31.9406C20.1116 32.4341 21.1099 32.9991 22.224 33.7081C23.3175 33.0107 24.3014 32.4515 25.1633 31.9616C25.4231 31.8139 25.6717 31.6725 25.909 31.5356C27.119 30.8412 28.0127 30.2637 28.6796 29.59C29.1265 29.1293 29.4909 28.6275 29.8277 27.9331Z"
      fill={
        theme === 'light' ? 'var(--brand-trust-01)' : 'var(--brand-trust-01b)'
      }
    />
  </svg>
);

export const Argent = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" fill="white" />
    <path
      d="M18.3242 7.63647H13.6516C13.4955 7.63647 13.3704 7.76611 13.367 7.92726C13.2726 12.4568 10.9768 16.7559 7.02532 19.8009C6.89986 19.8976 6.87128 20.0792 6.963 20.21L9.69685 24.112C9.78986 24.2448 9.97107 24.2747 10.0986 24.1772C12.5694 22.2856 14.5567 20.0038 15.9879 17.4746C17.4191 20.0038 19.4065 22.2856 21.8773 24.1772C22.0047 24.2747 22.186 24.2448 22.2791 24.112L25.013 20.21C25.1045 20.0792 25.0759 19.8976 24.9506 19.8009C20.999 16.7559 18.7033 12.4568 18.609 7.92726C18.6056 7.76611 18.4803 7.63647 18.3242 7.63647Z"
      fill="var(--brand-argent)"
    />
  </svg>
);

export const ImToken = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background: `linear-gradient(
      180deg,
      var(--brand-imtoken-01) 0%,
      var(--brand-imtoken-02) 100%
    )`,
    }}
  >
    <path
      d="M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509"
      fill="white"
    />
  </svg>
);

export const Rainbow = ({ ...props }) => {
  // Here we're using a base64 of an svg because the gradients in this logo do not play nicely on mobile devices
  //const withoutBackground =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMF8xXzIwIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIyMCIgeT0iMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CjxwYXRoIGQ9Ik0yMCA2MlYyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBDNjYuODY5MSAyMCAxMDAgNTMuMTMwOSAxMDAgOTRDMTAwIDk3LjMxMzcgOTcuMzEzNyAxMDAgOTQgMTAwSDU4QzU0LjY4NjMgMTAwIDUyIDk3LjMxMzcgNTIgOTRDNTIgNzkuNjQwNiA0MC4zNTk0IDY4IDI2IDY4QzIyLjY4NjMgNjggMjAgNjUuMzEzNyAyMCA2MloiIGZpbGw9IiNDNEM0QzQiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzFfMjApIj4KPG1hc2sgaWQ9Im1hc2sxXzFfMjAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIwIiB5PSIyMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj4KPHBhdGggZD0iTTIwLjAwMDEgMzhWMjBIMTAwVjEwMEg4Mi4wMDAxVjk0QzgyLjAwMDEgNjMuMDcyMSA1Ni45MjggMzggMjYuMDAwMSAzOEgyMC4wMDAxWiIgZmlsbD0iI0M0QzRDNCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazFfMV8yMCkiPgo8cGF0aCBkPSJNMCAwSDEyMFYxMjBIMFYwWiIgZmlsbD0iIzY3NTlGRiIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzFfMjApIj4KPHBhdGggZD0iTTAgMjZIMjZDNjMuNTU1NCAyNiA5NCA1Ni40NDQ2IDk0IDk0VjEyMEgwVjI2WiIgZmlsbD0iI0ZGNDAwMCIvPgo8L2c+CjwvZz4KPG1hc2sgaWQ9Im1hc2syXzFfMjAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIwIiB5PSIzNiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KPHBhdGggZD0iTTIwIDU0VjM2SDI2QzU4LjAzMjUgMzYgODQgNjEuOTY3NSA4NCA5NFYxMDBINjZWOTRDNjYgNzEuOTA4NiA0OC4wOTE0IDU0IDI2IDU0SDIwWiIgZmlsbD0iI0M0QzRDNCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazJfMV8yMCkiPgo8cGF0aCBkPSJNMCAzNkg4NFYxMjBIMFYzNloiIGZpbGw9IiNGRjdGMDAiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZl8xXzIwKSI+CjxwYXRoIGQ9Ik0wIDQySDI2QzU0LjcxODggNDIgNzggNjUuMjgxMiA3OCA5NFYxMjBIMFY0MloiIGZpbGw9IiNGRkZGMDAiLz4KPC9nPgo8L2c+CjxtYXNrIGlkPSJtYXNrM18xXzIwIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIyMCIgeT0iNTIiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+CjxwYXRoIGQ9Ik0yMCA2MlY1MkgyNkM0OS4xOTYgNTIgNjggNzAuODA0IDY4IDk0VjEwMEg1OEM1NC42ODYzIDEwMCA1MiA5Ny4zMTM3IDUyIDk0QzUyIDc5LjY0MDYgNDAuMzU5NCA2OCAyNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJaIiBmaWxsPSIjQzRDNEM0Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrM18xXzIwKSI+CjxwYXRoIGQ9Ik0wIDUySDI2QzQ5LjE5NiA1MiA2OCA3MC44MDQgNjggOTRWMTIwSDBWNTJaIiBmaWxsPSIjMDBFNTEzIi8+CjwvZz4KPG1hc2sgaWQ9Im1hc2s0XzFfMjAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjIwIiB5PSI1MiIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij4KPHBhdGggZD0iTTIwIDEwMFY1MkgyNkM0OS4xOTYgNTIgNjggNzAuODA0IDY4IDk0VjEwMEgyMFoiIGZpbGw9IiNDNEM0QzQiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2s0XzFfMjApIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjJfZl8xXzIwKSI+CjxwYXRoIGQ9Ik0wIDU4SDI2QzQ1Ljg4MjIgNTggNjIgNzQuMTE3NyA2MiA5NFYxMjBIMFY1OFoiIGZpbGw9IiMwMEFBRkYiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZl8xXzIwIiB4PSItMTgiIHk9IjgiIHdpZHRoPSIxMzAiIGhlaWdodD0iMTMwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjkiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xXzIwIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2ZfMV8yMCIgeD0iLTE4IiB5PSIyNCIgd2lkdGg9IjExNCIgaGVpZ2h0PSIxMTQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzFfMjAiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjJfZl8xXzIwIiB4PSItMTgiIHk9IjQwIiB3aWR0aD0iOTgiIGhlaWdodD0iOTgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iOSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzFfMjAiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==';
  const withBackground =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzhIMjZDNTYuOTI3OSAzOCA4MiA2My4wNzIxIDgyIDk0VjEwMEg5NEM5Ny4zMTM3IDEwMCAxMDAgOTcuMzEzNyAxMDAgOTRDMTAwIDUzLjEzMDkgNjYuODY5MSAyMCAyNiAyMEMyMi42ODYzIDIwIDIwIDIyLjY4NjMgMjAgMjZWMzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNODQgOTRIMTAwQzEwMCA5Ny4zMTM3IDk3LjMxMzcgMTAwIDk0IDEwMEg4NFY5NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiAyMEwyNiAzNkgyMEwyMCAyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzZIMjZDNTguMDMyNSAzNiA4NCA2MS45Njc1IDg0IDk0VjEwMEg2NlY5NEM2NiA3MS45MDg2IDQ4LjA5MTQgNTQgMjYgNTRIMjBWMzZaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNNjggOTRIODRWMTAwSDY4Vjk0WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDUyTDIwIDM2TDI2IDM2TDI2IDUySDIwWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDYyQzIwIDY1LjMxMzcgMjIuNjg2MyA2OCAyNiA2OEM0MC4zNTk0IDY4IDUyIDc5LjY0MDYgNTIgOTRDNTIgOTcuMzEzNyA1NC42ODYzIDEwMCA1OCAxMDBINjhWOTRDNjggNzAuODA0IDQ5LjE5NiA1MiAyNiA1MkgyMFY2MloiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik01MiA5NEg2OFYxMDBINThDNTQuNjg2MyAxMDAgNTIgOTcuMzEzNyA1MiA5NFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJMMjAgNTJMMjYgNTJMMjYgNjhaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNjJfMzI5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzYyXzMyOSIgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMTIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAxRTU5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDc0KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl82Ml8zMjkiIHgxPSI4MyIgeTE9Ijk3IiB4Mj0iMTAwIiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzYyXzMyOSIgeDE9IjIzIiB5MT0iMjAiIHgyPSIyMyIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ0X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDU4KSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl82Ml8zMjkiIHgxPSI2OCIgeTE9Ijk3IiB4Mj0iODQiIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNjJfMzI5IiB4MT0iMjMiIHkxPSI1MiIgeDI9IjIzIiB5Mj0iMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDdfcmFkaWFsXzYyXzMyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNiA5NCkgcm90YXRlKC05MCkgc2NhbGUoNDIpIj4KPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50OF9yYWRpYWxfNjJfMzI5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUxIDk3KSBzY2FsZSgxNyA0NS4zMzMzKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMgNjkpIHJvdGF0ZSgtOTApIHNjYWxlKDE3IDMyMi4zNykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=';
  return (
    <svg
      {...props}
      aria-hidden="true"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundSize: '100% 100%',
        backgroundImage: `url("${withBackground}")`,
      }}
    />
  );
};
export const Brave = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: 'white' }}
  >
    <path
      d="M69.0892 28.2123L70.5781 24.5643L66.3594 20.1967C64.0763 17.9136 59.2123 19.2537 59.2123 19.2537L53.7031 13H34.2721L28.7381 19.2785C28.7381 19.2785 23.8741 17.9632 21.591 20.1967L17.3722 24.5395L18.8612 28.1875L17 33.5974L23.204 57.2472C24.4945 62.3097 25.3631 64.2702 29.011 66.8511L40.352 74.5441C41.4439 75.2142 42.784 76.3805 44 76.3805C45.216 76.3805 46.5561 75.2142 47.648 74.5441L58.989 66.8511C62.6369 64.2702 63.5055 62.3097 64.796 57.2472L71 33.5974L69.0892 28.2123Z"
      fill="url(#paint0_linear_2183_5890)"
    />
    <path
      d="M57.6737 23.2739C57.6737 23.2739 64.796 31.8851 64.796 33.6967C64.796 35.5579 63.9026 36.0294 63.0092 36.9972L57.6737 42.705C57.1774 43.2013 56.1103 44.045 56.7307 45.5092C57.3511 46.9982 58.2197 48.8346 57.227 50.7206C56.2344 52.6314 54.4972 53.8971 53.3805 53.6985C51.7195 53.1594 50.1348 52.4088 48.6654 51.4651C47.7224 50.8447 44.6949 48.3382 44.6949 47.3704C44.6949 46.4026 47.8217 44.6406 48.4173 44.2932C48.9881 43.8961 51.6434 42.3575 51.693 41.7619C51.7427 41.1664 51.7427 41.0175 50.9485 39.5285C50.1544 38.0395 48.7647 36.0542 48.9632 34.7638C49.2114 33.4733 51.4449 32.7785 53.1075 32.1581L58.2445 30.2224C58.6415 30.0239 58.5423 29.8502 57.3511 29.7261C56.1599 29.6268 52.8097 29.1801 51.296 29.602C49.7822 30.0239 47.2509 30.6691 47.0028 31.0165C46.8042 31.364 46.6057 31.364 46.829 32.5551L48.2684 40.3722C48.3677 41.3649 48.5662 42.0349 47.5239 42.2831C46.432 42.5313 44.6204 42.9531 44 42.9531C43.3796 42.9531 41.5432 42.5313 40.4761 42.2831C39.409 42.0349 39.6075 41.3649 39.7316 40.3722C39.8309 39.3796 40.9228 33.7215 41.1461 32.5551C41.3943 31.364 41.171 31.364 40.9724 31.0165C40.7243 30.6691 38.1682 30.0239 36.6544 29.602C35.1654 29.1801 31.7904 29.6268 30.5993 29.7509C29.4081 29.8502 29.3088 29.9991 29.7059 30.2472L34.8428 32.1581C36.4807 32.7785 38.7638 33.4733 38.9871 34.7638C39.2353 36.079 37.8208 38.0395 37.0018 39.5285C36.1829 41.0175 36.2077 41.1664 36.2574 41.7619C36.307 42.3575 38.9871 43.8961 39.5331 44.2932C40.1287 44.6654 43.2555 46.4026 43.2555 47.3704C43.2555 48.3382 40.3024 50.8447 39.3097 51.4651C37.8404 52.4088 36.2557 53.1594 34.5947 53.6985C33.4779 53.8971 31.7408 52.6314 30.7233 50.7206C29.7307 48.8346 30.6241 46.9982 31.2197 45.5092C31.8401 44.0202 30.7978 43.2261 30.2767 42.705L24.9412 36.9972C24.0726 36.079 23.1792 35.5827 23.1792 33.7463C23.1792 31.9099 30.3015 23.3235 30.3015 23.3235L37.0763 24.4154C37.8704 24.4154 39.6324 23.7454 41.2454 23.1746C42.8585 22.6783 43.9752 22.6287 43.9752 22.6287C43.9752 22.6287 45.0671 22.6287 46.705 23.1746C48.3428 23.7206 50.08 24.4154 50.8741 24.4154C51.693 24.4154 57.6985 23.2491 57.6985 23.2491L57.6737 23.2739ZM52.3382 56.2298C52.7849 56.4779 52.512 57.0239 52.0901 57.3217L45.7868 62.2353C45.2904 62.7316 44.4963 63.4761 43.9752 63.4761C43.454 63.4761 42.6847 62.7316 42.1636 62.2353C40.0743 60.5717 37.9648 58.9337 35.8355 57.3217C35.4384 57.0239 35.1654 56.5028 35.5873 56.2298L39.3097 54.2445C40.7894 53.4618 42.3551 52.8539 43.9752 52.4329C44.3474 52.4329 46.705 53.2767 48.6158 54.2445L52.3382 56.2298Z"
      fill="white"
    />
    <path
      d="M59.262 19.2785L53.7032 13H34.2721L28.7381 19.2785C28.7381 19.2785 23.8741 17.9632 21.591 20.1967C21.591 20.1967 28.0432 19.6259 30.2767 23.2491L37.126 24.4154C37.9201 24.4154 39.682 23.7454 41.2951 23.1746C42.9081 22.6783 44.0249 22.6287 44.0249 22.6287C44.0249 22.6287 45.1168 22.6287 46.7546 23.1746C48.3925 23.7206 50.1296 24.4154 50.9238 24.4154C51.7427 24.4154 57.7482 23.2491 57.7482 23.2491C59.9817 19.6259 66.4339 20.1967 66.4339 20.1967C64.1508 17.9136 59.2868 19.2537 59.2868 19.2537"
      fill="url(#paint1_linear_2183_5890)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2183_5890"
        x1="17"
        y1="45.3241"
        x2="71"
        y2="45.3241"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.4" stopColor="#FF5500" />
        <stop offset="0.6" stopColor="#FF2000" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2183_5890"
        x1="22.4879"
        y1="18.8219"
        x2="66.4339"
        y2="18.8219"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF452A" />
        <stop offset="1" stopColor="#FF2000" />
      </linearGradient>
    </defs>
  </svg>
);
export const Crypto = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: 'white' }}
  >
    <mask
      id="mask0_2091_4394"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="13"
      y="9"
      width="62"
      height="71"
    >
      <path
        d="M44 9L13 26.75V62.25L44 80L75 62.25V26.75L44 9ZM31.7577 24.3492H56.1513L59.0935 36.684H28.9307L31.7577 24.3492ZM41.5613 61.2993L36.2955 66.161H31.8427L20.6924 46.9369L28.8701 40.9079L36.0953 45.4627V53.6578L41.5552 58.8504V61.2993H41.5613ZM37.9759 53.1584L38.7888 45.4326L36.1256 38.5432H51.9229L49.3204 45.4326L50.0787 53.1283L44 53.1584H37.9759ZM56.2059 66.1069H51.8076L46.5419 61.2993V58.8564L52.0018 53.6638V45.4627L59.1421 40.8537L67.2955 46.9369L56.2059 66.1069Z"
        fill="#002D74"
      />
    </mask>
    <g mask="url(#mask0_2091_4394)">
      <rect y="8" width="44" height="72" fill="url(#paint0_linear_2091_4394)" />
      <rect
        x="88"
        y="80"
        width="44"
        height="72"
        transform="rotate(-180 88 80)"
        fill="url(#paint1_linear_2091_4394)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2091_4394"
        x1="22"
        y1="8"
        x2="22"
        y2="80"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#010935" />
        <stop offset="1" stopColor="#142C70" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2091_4394"
        x1="110"
        y1="80"
        x2="110"
        y2="152"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#010935" />
        <stop offset="1" stopColor="#142C70" />
      </linearGradient>
    </defs>
  </svg>
);

export const Ledger = ({ ...props }) => (
  <svg
    {...props}
    aria-hidden="true"
    width="88"
    height="88"
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ background: 'black' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.2106 16H16V29.4577H19.2182V19.2182L37.2106 19.1011V16ZM37.3568 33.4073V54.6179H50.8146V51.3997H40.575L40.458 33.4073H37.3568ZM16 72.1714H37.2106V69.0703L19.2182 68.9533V58.7137H16V72.1714ZM50.9609 16H72.1714V29.4577H68.9533V19.2182L50.9609 19.1011V16ZM72.1714 72.1714H50.9609V69.0703L68.9533 68.9533V58.7137H72.1714V72.1714Z"
      fill="white"
    />
  </svg>
);

export const OtherWallets = ({ ...props }) => {
  const column: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5,
  };
  const row: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    gap: 2,
  };
  const cell: React.CSSProperties = {
    width: '50%',
    overflow: 'hidden',
    borderRadius: '27.5%',
  };
  return (
    <div style={column} {...props}>
      <div style={row}>
        <div style={cell}>
          <WalletConnect background />
        </div>
        <div style={cell}>
          <Trust theme="dark" />
        </div>
      </div>
      <div style={row}>
        <div style={cell}>
          <Rainbow />
        </div>
        <div style={cell}>
          <ImToken />
        </div>
      </div>
    </div>
  );
};

export default {
  Injected,
  OtherWallets,
  WalletConnect,
  //WalletConnectQRCode,
  MetaMask,
  Coinbase,
  Trust,
  Argent,
  ImToken,
  Rainbow,
  Crypto,
  Ledger,
  Brave,
};
