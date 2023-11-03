/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // Primary Colours
        Orange: 'hsl(26, 100%, 55%)',
        PaleOrange: ' hsl(25, 100%, 94%)',
        LightOrange: 'hsl(26, 100%, 70%)',

        // Neutral Colours
        VeryDarkBlue: 'hsl(220, 13%, 13%)',
        DarkGrayishBlue: 'hsl(219, 9%, 45%)',
        GrayishBlue: 'hsl(220, 14%, 75%)',
        LightGrayishBlue: ' hsl(223, 64%, 98%)',
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsl(0, 0%, 0%)'


      },

      fontFamily: {
        KumbhSans: ["kumbh Sans", "sans-serif"],
      },

      textUnderlineOffset: {
        10: '2.5rem'
      },
      fontSize: {
        'xm': '1.5rem'
      },
      icons: {
        name: {
          src: "./Assets/icon-previous.svg",
        }
      }
    },
  },
  plugins: [],
}

