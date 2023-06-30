/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['SF Pro Display'],
        'sans': ['DM Sans']
      },
    },
    colors: {
      'light': '#FFFFFF',
      'yellow': '#F4BF3C',
      DEFAULT: '#353535',
      'black': '#000000'

    },
    spacing: {
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '16px',
      '4': '24px',
      '5': '28px',
      '6': '30px',
      'section': '160px'
    },
    fontWeight: {
      bold: 700,
      '0': 400,

    },
    fontSize: {
      'button': [ // updated
        '25px', {
          lineHeight: '33px',
        }
      ],
      'sub-heading': ['20px', {
        fontWeight: "700",
        lineHeight: '26px',
      }
      ],
      'heading-1': ['60px', {
        fontWeight: "700",
        lineHeight: '78px',
      }
      ],
      'heading-2': ['45px', {
        fontWeight: "700",
        lineHeight: '59px',
      }
      ],
      'heading-3': ['35px', {
        fontWeight: "700",
        lineHeight: '46px',
      }
      ],
      base: ['25px', {
        fontWeight: "400",
        lineHeight: '30px',
      }
      ],
      tiny: ['16px', {
        fontWeight: "400",
        lineHeight: '19px',
      }
      ],
      'button-mb': ['16px', {
        lineHeight: '20px',
      }],
      'heading-3-mb': ['30px', {
        lineHeight: '38px',
      }]
    },
    screens: {
      desktop: { 'min': '1024px' },
      xxl: { 'max': '1280px' },
      xl: { 'max': '1024px' },
      lg: { 'max': '992px' },
      md: { 'max': '768px' },
      sm: { 'max': '480px' },
    },

  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width:'100%',
          maxWidth: '1264px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }
      })
    }

  ],
}
