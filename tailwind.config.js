/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update the content array to include paths to all of your template files
  content: [
    "./views/**/*.ejs", // Path to your EJS templates
    "./public/**/*.js", // Any JavaScript files in your public directory
    "./public/**/*.html", // If you have any plain HTML files
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blur-orange': 'rgba(124, 83, 41, 0.4)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}