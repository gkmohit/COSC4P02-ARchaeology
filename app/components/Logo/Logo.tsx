import { useMemo } from 'react'
import { getFillClassNames } from './Logo.utils'

type LogoProps = {
  className?: string;

  theme: 'light' | 'dark';
}

export const Logo = ({ className="h-32", theme }: LogoProps) => {
  const fillClassNames = useMemo(() => getFillClassNames(theme), [theme])

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 243.333 155.919"
         data-testid={`Logo.${theme}Theme`}
         className={className}
    >
      <defs>
        <clipPath id="a">
          <rect style={{fill: 'none'}} width="243.333" height="155.919" />
        </clipPath>
      </defs>
      <path className={fillClassNames.text}
            d="M29.528,139.8,20.4,154.552,11.27,139.8H.063V177.91H10.451V156.131l9.73,14.81H20.4l9.785-14.918V177.91h10.55V139.8Z"
            transform="translate(-0.01 -22.699)" />
      <g style={{clipPath: 'url(#a)'}}>
        <path className={fillClassNames.text}
              d="M56.121,161.2V139.8H66.89v21.18c0,5.5,2.788,8.112,7.052,8.112s7.052-2.5,7.052-7.84V139.8H91.762v21.126c0,12.3-7.051,17.7-17.929,17.7s-17.712-5.5-17.712-17.424"
              transform="translate(-9.113 -22.699)" />
        <path className={fillClassNames.text}
              d="M102.716,172.121l5.9-7.024a19.756,19.756,0,0,0,12.409,4.573c2.843,0,4.373-.98,4.373-2.613v-.109c0-1.579-1.257-2.45-6.451-3.648-8.145-1.852-14.431-4.139-14.431-11.978v-.11c0-7.078,5.63-12.2,14.814-12.2,6.505,0,11.589,1.742,15.743,5.063l-5.3,7.459a19.242,19.242,0,0,0-10.715-3.757c-2.569,0-3.826,1.089-3.826,2.45v.109c0,1.742,1.313,2.5,6.615,3.7,8.8,1.906,14.267,4.737,14.267,11.87v.109c0,7.786-6.178,12.414-15.47,12.414a26.8,26.8,0,0,1-17.93-6.317"
              transform="translate(-16.678 -22.573)" />
        <path className={fillClassNames.text} d="M148.723,139.8H179.5v8.984H159.219v5.771h18.367v8.331H159.219v6.043h20.555v8.984h-31.05Z"
              transform="translate(-24.149 -22.699)" />
        <path className={fillClassNames.text}
              d="M191.663,161.2V139.8h10.769v21.18c0,5.5,2.789,8.112,7.052,8.112s7.052-2.5,7.052-7.84V139.8H227.3v21.126c0,12.3-7.052,17.7-17.929,17.7s-17.712-5.5-17.712-17.424"
              transform="translate(-31.121 -22.699)" />
        <path className={fillClassNames.text}
              d="M241.717,139.8h11.207l9.128,14.756,9.13-14.756h11.206v38.114h-10.55V156.022l-9.786,14.919h-.218l-9.731-14.81v21.779H241.717Z"
              transform="translate(-39.248 -22.699)" />
        <path className={fillClassNames.text} d="M.115,98.377H2.762l15.771,20.062V98.377h2.753V123.41H19.033L2.869,102.882V123.41H.115Z"
              transform="translate(-0.019 -15.974)" />
        <rect className={fillClassNames.text} width="2.825" height="25.033" transform="translate(29.798 82.403)" />
        <path className={fillClassNames.text}
              d="M59.62,98.164H56.973L45.565,123.376h2.9l2.969-6.616H65.055l2.933,6.616h3.04ZM52.538,114.22l5.722-12.767,5.687,12.767Z"
              transform="translate(-7.399 -15.939)" />
        <path className={fillClassNames.text}
              d="M79.212,110.882v-.071c0-6.867,5.043-12.946,12.552-12.946a13.189,13.189,0,0,1,9.334,3.326l-1.824,2.145a10.65,10.65,0,0,0-7.617-2.861c-5.543,0-9.512,4.685-9.512,10.263v.072c0,5.971,3.826,10.406,9.906,10.406a11.786,11.786,0,0,0,7.224-2.5v-6.223H91.657v-2.539h10.335v9.977a15.166,15.166,0,0,1-10.049,3.827c-7.868,0-12.731-5.722-12.731-12.874"
              transform="translate(-12.862 -15.89)" />
        <path className={fillClassNames.text}
              d="M125.932,98.164h-2.647l-11.408,25.212h2.9l2.969-6.616h13.625l2.933,6.616h3.04ZM118.85,114.22l5.722-12.767,5.687,12.767Z"
              transform="translate(-18.166 -15.939)" />
        <path className={fillClassNames.text}
              d="M161.617,113.183c3.934-.715,6.794-3.148,6.794-7.3v-.072a6.914,6.914,0,0,0-1.93-4.934,9.871,9.871,0,0,0-7.117-2.5H148.6V123.41h2.825v-9.727h7.152l7.26,9.727h3.469Zm-10.192-2.04V100.987h7.725c4.041,0,6.4,1.86,6.4,4.936v.071c0,3.218-2.682,5.149-6.437,5.149Z"
              transform="translate(-24.128 -15.974)" />
        <path className={fillClassNames.text}
              d="M191.39,98.164h-2.648l-11.408,25.212h2.9l2.968-6.616h13.626l2.933,6.616h3.04Zm-7.081,16.056,5.722-12.767,5.685,12.767Z"
              transform="translate(-28.794 -15.939)" />
        <path className={fillClassNames.text}
              d="M219.74,97.986a5.708,5.708,0,0,0-5.84,5.76v.032a5.825,5.825,0,0,0,11.648-.032v-.032a5.654,5.654,0,0,0-5.808-5.729m3.755,5.792a3.763,3.763,0,0,1-3.755,3.93,3.816,3.816,0,0,1-3.788-3.962v-.032a3.764,3.764,0,0,1,3.756-3.93,3.817,3.817,0,0,1,3.787,3.962Z"
              transform="translate(-34.731 -15.91)" />
        <path className={fillClassNames.text} d="M231.114,98.215h1.814l5.967,7.7v-7.7h1.925v11.139h-1.638l-6.142-7.925v7.925h-1.926Z"
              transform="translate(-37.526 -15.947)" />
        <path className={fillClassNames.text} d="M255.356,100.028h-3.532V98.215h9.038v1.813h-3.532v9.325h-1.973Z"
              transform="translate(-40.889 -15.947)" />
        <path className={fillClassNames.text} d="M265.56,98.215h1.958v4.63h5.315v-4.63h1.958v11.139h-1.958v-4.695h-5.315v4.695H265.56Z"
              transform="translate(-43.12 -15.947)" />
        <path className={fillClassNames.text} d="M280.475,98.215h8.258v1.751h-6.3v2.9h5.585v1.751h-5.585V107.6h6.38v1.751h-8.338Z"
              transform="translate(-45.541 -15.947)" />
        <path className={fillClassNames.text} d="M226.2,114.965h1.957v9.356h5.856V126.1H226.2Z" transform="translate(-36.729 -18.667)" />
        <path className={fillClassNames.text}
              d="M244.013,114.87H242.2l-4.9,11.218h2l1.147-2.69h5.267l1.129,2.69h2.069Zm-2.849,6.794,1.91-4.455L245,121.664Z"
              transform="translate(-38.531 -18.652)" />
        <path className={fillClassNames.text}
              d="M253.923,114.965h1.958v5.6l5.3-5.6h2.4l-4.63,4.79,4.837,6.349h-2.371l-3.8-5.013-1.734,1.782V126.1h-1.958Z"
              transform="translate(-41.23 -18.667)" />
        <path className={fillClassNames.text} d="M268.173,114.965h8.258v1.751h-6.3v2.9h5.585v1.751h-5.585v2.991h6.38V126.1h-8.338Z"
              transform="translate(-43.544 -18.667)" />
        <path className={fillClassNames.blue} d="M60.379,0,0,36V72.632l60.38-36L121.826,0Z" transform="translate(0 0)" />
        <path className={fillClassNames.red} d="M0,0H61.1L0,36.431Z" transform="translate(0 0)" />
        <path className={fillClassNames.red} d="M206.509,0l60.379,36V72.632l-60.379-36L145.062,0Z" transform="translate(-23.554 0)" />
        <path className={fillClassNames.blue} d="M278.658,0h-61.1l61.1,36.43Z" transform="translate(-35.325 0)" />
      </g>
    </svg>
  )
}
