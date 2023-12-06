/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'raleway': ['Raleway', 'sans-serif'],
        'poppins': ['Poppins', "sans-serif"]
      },
      backgroundColor: {
        'light_gray': '#f6f7fd',
        'btn_blue': '#0090ff',
        'txt_color': '#0e1b4d'
      },
      textColor: {
        'logo_ace': '#0090ff',
        'nav_link': '#20252a',
        'txt_color': '#0e1b4d',
        'txt_pink': '#df42b1'
            },
        borderColor: {
          'bdr_blue': '#0090ff',
          'txt_pink': '#df42b1'
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

