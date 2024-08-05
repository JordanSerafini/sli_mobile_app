/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      backgroundColor: ['active'],

      spacing: {
        '0.5/10': '5%',
        '1/10': '10%',
        '1.5/10': '15%',
        '2/10': '20%',
        '2.5/10': '25%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '5.5/10': '55%',
        '6/10': '60%',
        '6.5/10': '65%',
        '7/10': '70%',
        '7.5/10': '75%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },

      minWidth: {
        '0.5/10': '5%',
        '1/10': '10%',
        '1.5/10': '15%',
        '2/10': '20%',
        '2.5/10': '25%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '5.5/10': '55%',
        '6/10': '60%',
        '6.5/10': '65%',
        '7/10': '70%',
        '7.5/10': '75%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },

      maxWidth: {
        '0.5/10': '5%',
        '1/10': '10%',
        '1.5/10': '15%',
        '2/10': '20%',
        '2.5/10': '25%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '5.5/10': '55%',
        '6/10': '60%',
        '6.5/10': '65%',
        '7/10': '70%',
        '7.5/10': '75%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },

      width: {
        '0.5/10': '5%',
        '1/10': '10%',
        '1.5/10': '15%',
        '2/10': '20%',
        '2.5/10': '25%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '5.5/10': '55%',
        '6/10': '60%',
        '6.5/10': '65%',
        '7/10': '70%',
        '7.5/10': '75%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },

      minHeight: {
        '0.5/10': '5%',
        '1/10': '10%',
        '1.5/10': '15%',
        '2/10': '20%',
        '2.5/10': '25%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '5.5/10': '55%',
        '6/10': '60%',
        '6.5/10': '65%',
        '7/10': '70%',
        '7.5/10': '75%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },

       maxHeight: {
        '0.5/10': '5%',
        '1/10': '10%',
        '1.5/10': '15%',
        '2/10': '20%',
        '2.5/10': '25%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '5.5/10': '55%',
        '6/10': '60%',
        '6.5/10': '65%',
        '7/10': '70%',
        '7.5/10': '75%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },

      height: {
        '0.5/10': '5%',
        '1/10': '10%',
        '1.5/10': '15%',
        '2/10': '20%',
        '2.5/10': '25%',
        '3/10': '30%',
        '3.5/10': '35%',
        '4/10': '40%',
        '4.5/10': '45%',
        '5/10': '50%',
        '5.5/10': '55%',
        '6/10': '60%',
        '6.5/10': '65%',
        '7/10': '70%',
        '7.5/10': '75%',
        '8/10': '80%',
        '8.5/10': '85%',
        '9/10': '90%',
        '9.5/10': '95%',
        '10/10': '100%',
      },
      fontSize: {
        'xxs': '.5rem',
        'xxxs': '.4rem',
      },
      colors: {
        "white-perso": "#f8f9fa",
        "white-perso2":"#e9ecef",
        "gray-light":"#dee2e6",
        "gray-light2":"#ced4da",
        "gray-pers":"#adb5bd",
        "gray-strong":"#495057",
        "black-pers":"#343a40",
        "black-strong":"#212529",
        'blue-perso': '#26474E',
      },

      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        max: '0.55em',
      },

      screens: {
        'resw400': '400px',
      },

      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'Poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'medium': '500',
        'semi-bold': '600',
        'bold': '700',
        'extra-bold': '800',
        'black': '900',
        'italic': 'italic',
        'extrabold-italic': '800 italic',
      }
    
    },
  },
  
  
  plugins: [],
}