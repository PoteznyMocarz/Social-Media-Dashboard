/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'facebook-color': 'hsl(208, 92%, 53%)',
        'twitter-color': 'hsl(203, 89%, 53%)',
        'instagram-color-start': 'hsl(37, 97%, 70%)',
        'instagram-color-end': 'hsl(329, 70%, 58%)',
        'youtube-color': 'hsl(348, 97%, 39%)',
        'dark-toggle-start': 'hsl(210, 78%, 56%)',
        'dark-toggle-end': 'hsl(146, 68%, 55%)',
        'light-toggle': 'hsl(230, 22%, 74%)',
        'dark-bg': 'hsl(230, 17%, 14%)',
        'dark-top-bg': 'hsl(232, 19%, 15%)',
        'dark-card-bg': 'hsl(228, 28%, 20%)',
        'dark-text': 'hsl(228, 34%, 66%)',
        'light-bg': 'hsl(0, 0%, 100%)',
        'light-top-bg': 'hsl(225, 100%, 98%)',
        'light-card-bg': 'hsl(227, 47%, 96%)',
        'light-text-dark': 'hsl(228, 12%, 44%)',
        'light-text-very-blue': 'hsl(230, 17%, 14%)'
      },
      fontFamily: {
        Inter: "font-family: 'Inter', sans-serif;"
      }
    },
  },
  plugins: [],
}

