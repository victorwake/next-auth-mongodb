
const GoogleIcon = () => {
    return (
        <svg>
        <title>{"btn_google"}</title>
        <defs>
          <rect id="b" width={40} height={40} x={0} y={0} rx={3} />
          <rect id="c" width={45} height={46} x={2} y={2} rx={3} />
          <filter
            id="a"
            width="200%"
            height="200%"
            x="-50%"
            y="-50%"
            filterUnits="objectBoundingBox"
          >
            <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation={0.5}
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0"
            />
            <feOffset in="SourceAlpha" result="shadowOffsetOuter2" />
            <feGaussianBlur
              in="shadowOffsetOuter2"
              result="shadowBlurOuter2"
              stdDeviation={0.5}
            />
            <feColorMatrix
              in="shadowBlurOuter2"
              result="shadowMatrixOuter2"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="shadowMatrixOuter2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g filter="url(#a)" transform="translate(3 3)">
            <use xlinkHref="#b" fill="#4285F4" />
            <use xlinkHref="#b" />
            <use xlinkHref="#b" />
            <use xlinkHref="#b" />
          </g>
          <g transform="translate(-1 -1)">
            <use xlinkHref="#c" fill="#FFF" />
            <use xlinkHref="#c" />
            <use xlinkHref="#c" />
            <use xlinkHref="#c" />
          </g>
          <path
            fill="#4285F4"
            d="M31.64 23.205c0-.639-.057-1.252-.164-1.841H23v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
          />
          <path
            fill="#34A853"
            d="M23 32c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0 0 23 32Z"
          />
          <path
            fill="#FBBC05"
            d="M17.964 24.71a5.41 5.41 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007A8.996 8.996 0 0 0 14 23c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
          />
          <path
            fill="#EA4335"
            d="M23 17.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C27.463 14.891 25.426 14 23 14a8.997 8.997 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71Z"
          />
          <path d="M14 14h18v18H14V14Z" />
        </g>
      </svg>
    )
}
export default GoogleIcon