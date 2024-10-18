# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![image](https://github.com/user-attachments/assets/fe163929-f3e7-4766-a189-b280febec94a)

### Links

- Live Site URL: [Live site](https://xahep.github.io/NFT-preview-card-component/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - Framework utility-first

### What I learned

This challenge was interesting because it helped me put Tailwind into practice in a real project. In this case, the card helped me play with different parameters that are already pre-established, additionally it helped me a lot to understand how 'flex' works and its possible behaviors.

```html
<div id="clock" className='flex flex-row items-center space-x-1'>
  <img src={clockIcon} alt="Clock Icon" className='w-4 h-4' />
  <p className='text-gray font-light text-sm'>3 days left</p>
</div>
```
On the other hand, it also helped me to configure global parameters such as global colors and how to interact with them directly in the HTML.
```
extend: {
      colors: {
        main: 'hsl(217, 54%, 11%)',
        card: 'hsl(216, 50%, 16%)',
        gray: 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        line: 'hsl(215, 32%, 27%)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
},
```

## Author

- Frontend Mentor - [@xahep](https://www.frontendmentor.io/profile/Xahep)
- Twitter - [@XahepDuran](https://twitter.com/XahepDuran)
