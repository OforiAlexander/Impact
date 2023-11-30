/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'raleway': ['Raleway', 'sans-serif']
      },
      backgroundColor: {
        'light_gray': '#f6f7fd',
        'btn_blue': '#0090ff'
      },
      textColor: {
        'logo_ace': '#0090ff',
        'nav_link': '#20252a',
        'txt_color': '#0e1b4d'
            },
        borderColor: {
          'bdr_blue': '#0090ff'
        },
        borderRadius: {
          'xxl': '3.35rem'
        },
        width: {
          '98': '26rem'
        },
        fontSize: {
          'base_two': '1.1rem'
        }
    },
  },
  plugins: [],
}

