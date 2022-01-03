const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            red: 'hsl(0, 78%, 62%)',
            cyan: 'hsl(180, 62%, 55%)',
            orange: 'hsl(34, 97%, 64%)',
            blue: 'hsl(212, 86%, 64%)',
          },
          neutral: {
            'dark-blue': 'hsl(234, 12%, 34%)',
            'grayish-blue': 'hsl(229, 6%, 66%)',
            'light-gray': 'hsl(0, 0%, 98%)',
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
