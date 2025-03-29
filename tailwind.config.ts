/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1976d2",
                info: "#7e168a",
                success: "#118c32",
                danger: "#dc004e",
                ar: "#801720",
                arLight: "#e02f3f",
            },
        },
        screens: {
            'xs': '312px',       // Define your extra small breakpoint
            'sm': '640px',     // Define your small breakpoint
            'md': '768px',     // Define your medium breakpoint
            'lg': '1024px',    // Define your large breakpoint
            'xl': '1280px',    // Define your extra large breakpoint
            '2xl': "1440px"
        },
        fontSize: {
            sm: "0.5rem",
            md: "0.8rem",
            lg: "1rem",
            xl: "1.2rem",
            "2xl": "1.563rem",
            "3xl": "1.953rem",
            "4xl": "2.441rem",
            "5xl": "3.052rem",
        },
    },
    plugins: [],
};
