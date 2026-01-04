// tailwind.config.js
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
    extend: {
        keyframes: {
            slideUp: {
                '0%': { transform: 'translateY(100%)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            slideLeft: {
                '0%': { transform: 'translateX(-100%)', opacity: '0' },
                '100%': { transform: 'translateX(0)', opacity: '1' },
            },
            slideRight: {
                '0%': { transform: 'translateX(100%)', opacity: '0' },
                '100%': { transform: 'translateX(0)', opacity: '1' },
            },
        },
        animation: {
            slideUp: 'slideUp 0.8s ease-out forwards',
            slideLeft: 'slideLeft 0.8s ease-out forwards',
            slideRight: 'slideRight 0.8s ease-out forwards',
        },
    },
};
export const plugins = [];