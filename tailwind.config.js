/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        blackOcare: 'rgba(28, 28, 30, 1)',
        black2Ocare: 'rgba(58, 58, 60, 1)',
        black3Ocare: 'rgba(72, 72, 74, 1)',
        greySemiLightOcare: 'rgba(242, 242, 247)',
        greyLightOcare: 'rgb(229, 229, 234)',
        greyBorder: 'rgb(209, 209, 214)',
        greyDarkOcare: 'rgb(142, 142, 147)',
        greyOcare: 'rgba(89, 89, 89, 1)',
        redOcare: 'rgb(177, 35, 29)',
        redOcareHover: 'rgba(177, 35, 29, 0.1)',
        redLightOcare: 'rgba(177, 35, 29, 0.149)',
        redTextOcare: 'rgb(188, 0, 23)',
        blueOcare: 'rgb(4, 54, 115)',
        blueOcareHover: 'rgba(4, 54, 115,0.1)',
        blueLightOcare: 'rgba(5, 54, 115, 0.15)',
        blueDarkOcare: 'rgb(3, 35, 74)',
        blueTextOcare: 'rgb(0, 55, 102)',
        seaBlueOcare: 'rgb(0, 110, 135)',
        seaBlueLightOcare: 'rgba(0, 110, 135, 0.15)',
        brigthBlueOcare: 'rgba(0, 122, 255, 1)',
        greenOcare: 'rgba(25, 140, 53, 1)',
        greenOcareHover: 'rgba(25, 140, 53, 0.1)',
        greenLightOcare: 'rgba(25, 140, 53, 0.15)',
        greenLineOcare: 'rgba(6, 199, 85, 1)',
        yellowOcare: 'rgba(175, 144, 3, 1)',
        yellowLightOcare: 'rgba(255, 204, 0, 1)',
        yellowLightOcareHover: 'rgba(255, 204, 0, 0.2)',
        orangeOcare: 'rgba(255, 149, 0, 1)',
        orangeLightOcare: 'rgba(255, 149, 0, 0.15)',
        orangeOcareHover: 'rgba(255, 149, 0, 0.1)',
        purpleOcare: 'rgb(87, 36, 133)',
        purpleOcareHover: 'rgba(87, 36, 133, 0.1)',
        greyline: 'rgb(209, 209, 214)',
        greyRoundedOcare: 'rgba(242,242,247,1)',
        greySettingOcare: 'rgba(0,0,0,1)',
        greyCheckBox: 'rgba(107, 114, 128, 1)',
        backgroundOcare: 'rgb(244, 246, 249)',
        foregroundOcare: 'rgb(255, 255, 255)',
        popupBackground: 'rgba(0, 0, 0, 0.5)',
        redGradientOcare: {
          150: 'rgba(177, 35, 29,0.15)',
          200: 'rgba(177, 35, 29,0.2)',
          250: 'rgba(177, 35, 29,0.25)',
          300: 'rgba(177, 35, 29,0.3)',
          500: 'rgba(177, 35, 29,0.5)',
          600: 'rgba(177, 35, 29,0.6)',
          750: 'rgba(177, 35, 29,0.75)',
        },
        greenGradientOcare: {
          200: 'rgba(174, 177, 29,0.2)',
          300: 'rgba(174, 177, 29,0.3)',
          400: 'rgba(174, 177, 29,0.4)',
          500: 'rgba(174, 177, 29,0.5)',
          600: 'rgb(174, 177, 29)',
        },
        mapPrimaryOcare: 'rgb(105, 147, 165)',
        mapSecondaryOcare: 'rgb(163, 202, 183)',
        mapNormalOcare: 'rgb(217, 217, 217)',
        mapHover: 'rgb(129, 214, 189)',
      },
      fontFamily: {
        sans: ['var(--font-ibm)'],
      },
      borderRadius: {
        '1rd': '8px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        13: 'repeat(13, minmax(0, 12px))',
        20: 'repeat(20, minmax(0, 12px))',
      },
      spacing: {
        24: '6.375rem',
      },
      strokeWidth: {
        3: '3px',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')],
  safelist: [
    {
      pattern:
        /(bg|text|border|outline)-(grey|red|blue|seaBlue|green|yellow|orange|purple|background|foreground|popupBackground|mapPrimary|mapSecondary|mapNormal|)(Dark|Light|Gradient|)(Ocare)(Hover|)/,
      variants: ['hover', 'focus'],
    },
  ],
  corePlugins: {
    preflight: false,
  },
};
