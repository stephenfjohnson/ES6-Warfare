// god name
// god name long
// power
// weapon
// saying

const gods = [{
  "id": 0,
  "name": "Thor",
  "full_name": "Thor Odinson",
  "power": "Lightning",
  "weapon": "Mjolnir",
  "svg": [
    { "id": 1, "path": "M98.58 51.27c0-1.78-1.34-4.07-3.42-5.92a9.62 9.62 0 0 1 4.28 1.7 5.57 5.57 0 0 0-2.58-2.86 9 9 0 0 0-2.5-3.5A10 10 0 0 1 97.7 42c-.7-1.7-2.9-3-5.6-3.26l-.1-.15a13.5 13.5 0 0 1 5.4 1.1 9 9 0 0 0-7.45-3.4l-.07-.1a10.5 10.5 0 0 1 4.44-.9 9.32 9.32 0 0 0-5.8-.6 3.45 3.45 0 0 0-1.4-1.2 18.22 18.22 0 0 1 8.15 1.5c-1.7-2.1-5.45-3.5-9.2-3.5a7.74 7.74 0 0 0-3.2-1.7 10.27 10.27 0 0 0-2.55-1.5 14.4 14.4 0 0 1 4.62 0c-1.6-1.2-4.52-1.5-7.32-.9a22.63 22.63 0 0 0-2.94-.5 18.3 18.3 0 0 0-5.02.1 53.92 53.92 0 0 0-7.86-1c4.5-1 10.3-3.2 6.02-7.4C58.5 9.3 65.52.4 65.52.4S56.1 7 63.7 18.26c3.44 5.06-11.14 3.86-11.14 3.86a9.74 9.74 0 0 0-2.18-.32.44.44 0 0 0-.4-.24.43.43 0 0 0-.4.3 9.9 9.9 0 0 0-2.17.34c-.4 0-14.4 1.1-11.1-3.9C44 7.08 34.6.46 34.6.46s7 8.93-2.3 18.24c-4.23 4.2 1.55 6.4 6.08 7.4a53.85 53.85 0 0 0-7.8 1.14 18.22 18.22 0 0 0-5.04-.1 22.55 22.55 0 0 0-2.94.5c-2.8-.55-5.72-.23-7.32.9a14.4 14.4 0 0 1 4.65 0A10.27 10.27 0 0 0 17.2 30a7.78 7.78 0 0 0-3.2 1.8c-3.75 0-7.5 1.33-9.2 3.44a18.22 18.22 0 0 1 8.16-1.56 3.42 3.42 0 0 0-1.4 1.15 9.3 9.3 0 0 0-5.8.57 10.47 10.47 0 0 1 4.43.9l-.1.06a9 9 0 0 0-7.5 3.4 13.47 13.47 0 0 1 5.4-1.1v.15c-2.7.3-4.9 1.6-5.6 3.3a10 10 0 0 1 3.3-1.3 8.93 8.93 0 0 0-2.5 3.5 5.6 5.6 0 0 0-2.6 2.9 9.6 9.6 0 0 1 4.2-1.7c-2 1.8-3.4 4.1-3.4 5.9a14.34 14.34 0 0 1 3.3-4A14.6 14.6 0 0 0 3 55.3a26.25 26.25 0 0 1 2.9-6c-.94 3-.77 6.1.43 7.7a15.4 15.4 0 0 1 1.2-8.05h.1a12.23 12.23 0 0 0 .4 7.1c-.08.3-.17.66-.28 1-.15.5-.3 1-.5 1.55-2.8 8.2 6.1 19.5 8.8 22.16-.6 5.9 7.3 7.3 11 4.6 3.6.9 6.7-1.6 3.37-4.9 1-2.7-3.7-3.9-5.6-3.2-1.2-.5-4.9-12.4-2.7-20.1a10.34 10.34 0 0 1 1.8-3.8c1.5-1.8 4.7-2.3 6-.4l.8 1.2.1.2a6.1 6.1 0 0 0 1 2.7 13.33 13.33 0 0 0 1.3 1.7l.2.5v.1c3 7.5 2.2 13.5 1.2 18.6-1.2 6.1-2.76 11.6 2.9 16.4-1.2.3-11.65 1.5-9.1 4.6 1.26 1.6 6.22.8 7.52.3 3.33-1.3 2.4-1.55 6.72-2.3 1.4-.43 2.2-1.75.8-2.86-7.7-6-.5-14.47 6.8-14.5S64.7 88 57 94c-1.4 1.1-.6 2.43.8 2.85 4.3.75 3.4 1 6.77 2.3 1.3.5 6.27 1.3 7.55-.27 2.53-3.05-7.9-4.3-9.1-4.57 5.65-4.8 4.1-10.3 2.9-16.4-1-5.2-1.9-11.3 1.2-18.8a2 2 0 0 0 .1-.3l.27-.6a13.07 13.07 0 0 0 .9-1.2 6.35 6.35 0 0 0 .9-2.3l.2-.4.8-1.3c1.3-2 4.4-1.5 5.9.4a10.44 10.44 0 0 1 1.7 3.6c2.2 7.7-1.5 19.5-2.7 20.1-1.9-.6-6.6.5-5.7 3.3-3.3 3.3-.2 5.8 3.4 4.9 3.8 2.8 11.7 1.3 11-4.5 2.7-2.6 11.6-14 8.8-22.1-.2-.53-.3-1.04-.5-1.53L92 56a12.2 12.2 0 0 0 .34-7.3h.1a15.4 15.4 0 0 1 1.16 8.1c1.2-1.5 1.36-4.7.4-7.62a26.2 26.2 0 0 1 2.9 6.03 14.6 14.6 0 0 0-1.64-7.9 14.4 14.4 0 0 1 3.33 4zm-92.63-8a7.66 7.66 0 0 0-1.62.38 13.54 13.54 0 0 1 1.92-1.5 6 6 0 0 0-.3 1.17zM19.77 30.8a11.08 11.08 0 0 0-3.53 1.2h-.1a14.42 14.42 0 0 0-2-.17 16 16 0 0 1 5.63-1.03zM9.23 68.53c-1.35-3.3-2-6.76-1-9.72l.47-1.4a11.22 11.22 0 0 0 3.1 3.9 14.06 14.06 0 0 1-1.44-4.3 16 16 0 0 1 .5-7.4 1.86 1.86 0 0 0 .4.7 11 11 0 0 0 .66 6.7 11.8 11.8 0 0 0 2.43 3.7 12.22 12.22 0 0 1-.78-3.6 12.92 12.92 0 0 1 .8-5.2 10.8 10.8 0 0 0 1.05 5.2A11.63 11.63 0 0 0 17 59.4a11.15 11.15 0 0 1-.42-2.36 11.7 11.7 0 0 1 .8-4.8v.35a12.73 12.73 0 0 0 .46 4.5 6.5 6.5 0 0 0 2.26 3.6 12 12 0 0 1-1.2-3.6 18.1 18.1 0 0 1-.22-4.4h.1a13.43 13.43 0 0 0 .9 4.4 6.6 6.6 0 0 0 1.2 2 32.06 32.06 0 0 0-.07 7.7 8.78 8.78 0 0 1-5.2 2.8 8.45 8.45 0 0 1-6.3-1zm6.5 1.8a11.76 11.76 0 0 0 3.77-1.4v.33a29.7 29.7 0 0 0 1.93 8.1 7.66 7.66 0 0 1-2.1.82 39.23 39.23 0 0 1-5.16-7.64 12.1 12.1 0 0 0 1.57-.2zm7.62 6.18c.54 1 1.1 1.6 1.63 1.6a4.4 4.4 0 0 1 2.9 0c1.45.5 2.17 1.5 1.6 2.3a1.24 1.24 0 0 1-.2.2c1.6 1.2 2.12 2.7 1.18 3.5a4 4 0 0 1-3.53.3 6.82 6.82 0 0 1-6.35 1.2c-1.78-.6-4-2.1-3.45-5a12.3 12.3 0 0 1-1-1 7.64 7.64 0 0 0 2.73-.1c1.96-.3 4.08-1.3 4.5-2.6zM21.23 57v.12c-.15.58-.26 1.18-.35 1.8a14 14 0 0 1-.34-1.92 21.56 21.56 0 0 1-.12-3.8l1 .33a6.78 6.78 0 0 0-.2 3.47zm2.15-27.4l-.38-.06a13.33 13.33 0 0 0-3.4 0c.73-.2 1.5-.37 2.3-.52.57.15 1.15.33 1.7.53zm2.17-.86l-.4-.2 1.18-.07zm40.55 14a3.77 3.77 0 0 1-.57-1.83 2.77 2.77 0 0 0 .58-2.1v-.2a2.4 2.4 0 0 1 0 4.2zm-1.23-1.66a4.37 4.37 0 0 0 .8 2.22 1 1 0 0 1-.04.38 2.9 2.9 0 0 1-.54.94l-.1-.17a3.1 3.1 0 0 1-.2-3.36zm-1.1-1.9a2 2 0 0 1-.1-2.2l.68.08a2.48 2.48 0 0 0 1.06 1.58 2.3 2.3 0 0 1-.2 1.7v.05a4.74 4.74 0 0 1-1.3-1.2zm.57-5v-.2c1.5.63 2.6 3 1.33 4.07a1.86 1.86 0 0 1-.73-1.2c.5-.64-.1-1.8-.78-2.37a1.35 1.35 0 0 0 .2-.28zm.1 2.26c-1.76-.07-3.63-.7-4-2.44v-.28c.18 0 .36 0 .55-.06a3.85 3.85 0 0 0 .6-.14c.4.56 1.4 1.4 2.1 1.3.4.33.9 1.18.7 1.64zM56.3 28.5c-.1-.24-.18-.48-.26-.7h1.68a3.52 3.52 0 0 1 2.2 1.53 8.2 8.2 0 0 1 .86 2.14c.12.52.33 1.15.44 1.5a3.5 3.5 0 0 1-.4.08c-2.56.38-4.2-1.35-5-3.44a10.26 10.26 0 0 1-.47-1.8h.24a8.36 8.36 0 0 0 .3 1.1 4.77 4.77 0 0 0 3.5 3.2 6.44 6.44 0 0 1-3.2-3.5zm.56-1.68a.43.43 0 1 1 .43.43.43.43 0 0 1-.5-.4zm6.4 4.7c.3.48.78 2.1.36 2.67-.56 0-1.4-.9-1.65-1.3-.38-1.1-.6-2.2-1.06-3.3a3.4 3.4 0 0 1 2.4 1.8zm-3.72-8.47A10.23 10.23 0 0 0 64 21.82c1.36-.93 1.65-2.4.54-4.05-3.07-4.53-3.18-8.2-2.38-10.87-.36 3.54.58 8 5 12.46 4.27 4.27-6 6-9.25 6.45a9.66 9.66 0 0 0-2.8-2.5 37.28 37.28 0 0 0 4.5-.1zm-4.67 3.37a.43.43 0 1 1-.44.43.43.43 0 0 1 .44-.4zm-2.42 0a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.38zM50 22.84a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.43zm0 1.83a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.44zm0 1.83a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.44zm0 1.83a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.44zm0 1.83a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.5zm0 1.53a1.14 1.14 0 0 0 1.1-1.2v-2.7h3.46l.15.7c.5 2.3 2 4.6 4.2 5.2v.3a.3.3 0 0 1 .1 0 5.7 5.7 0 0 0-3.7 2.8 6.24 6.24 0 0 1 2.3-1.6c0 1.9.1 7.8.1 7.8l-.5.3v-.8c0-.5.4-4-1.8-5.4a6.73 6.73 0 0 0-5.2-.3 6.72 6.72 0 0 0-5.2.3c-2.2 1.4-1.8 4.9-1.8 5.4v.7l-.5-.4.1-7.9a6.23 6.23 0 0 1 2.3 1.6 5.72 5.72 0 0 0-4-2.7v-.3c2.2-.6 3.6-2.9 4.1-5.2l.2-.78H49v2.7a1.14 1.14 0 0 0 1 1.1zm-6-3.9l-.28.7a6.44 6.44 0 0 1-3.18 3.5A4.77 4.77 0 0 0 44 28.9a8.55 8.55 0 0 0 .4-1.1h.24a10.1 10.1 0 0 1-.47 1.8c-.78 2.1-2.42 3.83-5 3.45l-.4-.08c.12-.35.32-1 .44-1.5a8.12 8.12 0 0 1 .9-2.14 3.5 3.5 0 0 1 2.2-1.54zm-1.65-.8a.43.43 0 1 1 .43.4.43.43 0 0 1-.43-.5zm5.26-.5a.43.43 0 1 1-.4.4.43.43 0 0 1 .5-.4zm-2 .4a.43.43 0 1 1-.4-.5.43.43 0 0 1 .5.4zm-12.7-7.6c4.5-4.5 5.4-9 5-12.5.9 2.6.7 6.3-2.3 10.8-1.1 1.6-.8 3.1.6 4a10.23 10.23 0 0 0 4.4 1.2 38 38 0 0 0 4.5.1 9.68 9.68 0 0 0-2.8 2.6c-3.2-.5-13.5-2.2-9.2-6.5zm3.9 12.1a3.4 3.4 0 0 1 2.4-1.8c-.4 1-.7 2.1-1 3.2-.2.3-1.1 1.2-1.6 1.2-.4-.6 0-2.2.3-2.7zm-.3 3.3c.7.1 1.7-.8 2.1-1.3a4.07 4.07 0 0 0 .6.1 5 5 0 0 0 .6 0 2 2 0 0 1 0 .3c-.4 1.7-2.2 2.3-4 2.4-.3-.5.3-1.3.8-1.6zM35 40.3v-.06a2.28 2.28 0 0 1-.28-1.7 2.48 2.48 0 0 0 1-1.55c.2 0 .4 0 .7-.1a2 2 0 0 1-.1 2.2 4.78 4.78 0 0 1-1.37 1.2zm.1 4.06l-.1.2a3 3 0 0 1-.55-.93 1 1 0 0 1 0-.34 4.36 4.36 0 0 0 .8-2.3 3.12 3.12 0 0 1-.15 3.4zM35.6 34a1.5 1.5 0 0 0 0 .2 1.4 1.4 0 0 0 .13.28c-.67.56-1.26 1.74-.78 2.37a1.84 1.84 0 0 1-.73 1.2C33 37 34.1 34.6 35.6 34zm-1.74 4.55v.18a2.78 2.78 0 0 0 .58 2.15 3.7 3.7 0 0 1-.57 1.83 2.4 2.4 0 0 1 0-4.1zm.8 18.45a5.12 5.12 0 0 1 .3-5.15 6.53 6.53 0 0 0-1.7 3.9 7.92 7.92 0 0 0 .1 1.24 6.57 6.57 0 0 0 .45 1.5 9 9 0 0 1-1.2-1.5c-2.5-4 .7-7.4 1.5-8.5a3.27 3.27 0 0 0 .3-.4 4.28 4.28 0 0 1-1 2.2s2.3-1.9 1.4-3.2l-1-1.4a3.54 3.54 0 0 1-.4-3 3.34 3.34 0 0 0 .6.4c0 .3.2 1.1 1.3 2.2a8.85 8.85 0 0 1 2.4 3c.7 2.2-2.1 3.6-2.3 6.2a5.65 5.65 0 0 0 .5 2.4 13.42 13.42 0 0 0 1 2l-.14-.1a6.4 6.4 0 0 1-1.8-1.8zm-.44 28.8a5.1 5.1 0 0 0 4.85.77 6.57 6.57 0 0 0-.14 2.22 6.87 6.87 0 0 1-4.65-1.9c-.04-.4-.06-.8-.06-1.2zm2.1 6.12a8.84 8.84 0 0 1-1.74-3.34 6.33 6.33 0 0 0 4.53 1.18l.2.6a7.62 7.62 0 0 1-2.9 1.5zM41 93.05a3.38 3.38 0 0 1-2.82.63c-.35-.28-.67-.56-1-.85l.3-.1a7.73 7.73 0 0 0 2.2-1.46A9.24 9.24 0 0 0 41 93.05zm.45-25.15h-5.2a27.58 27.58 0 0 0-.93-5.58h6.13zm1.8 0v-5.58h6.3a2.84 2.84 0 0 0 0 5.58zm2.5-22.27l.06-.1a9.3 9.3 0 0 0 1-4.54c0-1 .8-1 1-1h4.5c.3 0 1-.1 1 .9a9.3 9.3 0 0 0 1 4.5l.1.1-1.3 1h-5.9zm3.43 21.58c0-.2.08-.3.15-.3s.1.2.1.5c0 0 0 .1-.08 0s-.17 0-.17-.1zm.66.4c-.32 0-.32-.1-.32-.1 0-.3.1-.6.24-.5s.23.3.23.6c0 0 0 .1-.2.1zm-.1-.9a.28.28 0 0 0-.2.1.24.24 0 0 0-.38-.1.94.94 0 0 1 0-.2c-.8 0-1.17.2-1-1 0-.2-.3-.4-.17-1.1.2-1.2.6-1.5 2-1.5s1.7.3 2 1.5c.1.7-.2.9-.2 1.2.2 1.2-.2 1-1 1a1 1 0 0 1 0 .2c-.1-.1-.3 0-.4.1a.3.3 0 0 0-.2-.1.36.36 0 0 0-.3.3.36.36 0 0 0-.2-.2zm1.2.6s0 .1-.16.2-.08 0-.08 0c0-.2 0-.4.1-.4s.2.2.2.4zm-.8.3c0-.3.1-.6.24-.6s.24.3.24.6c0 0 0 .1-.32.1h-.15zm6.74.4h-6.3a2.84 2.84 0 0 0 0-5.6h6.33zm0-21c-2.1-1.1-2.18-4.1-2.2-4.1a10.68 10.68 0 0 0 .3 2.8 2.9 2.9 0 0 1-.23-.3 9 9 0 0 1-1-4.2c0-1.1-.28-1.5-1.4-1.5h-4.6c-1.13 0-1.42.4-1.42 1.6a9 9 0 0 1-1 4.2 2.74 2.74 0 0 1-.24.4 10.52 10.52 0 0 0 .3-2.8s-.1 3-2.2 4.1a4.6 4.6 0 0 1-1.3.5 3.67 3.67 0 0 0 1.3-1.7 8.82 8.82 0 0 0 .5-3.3 7.3 7.3 0 0 1 .8-2.8 6 6 0 0 0-1 1.67 3.4 3.4 0 0 1 1.6-3.2 4.73 4.73 0 0 1 3.2-.65c.4.07 1.4.47 1.7.48s1.3-.4 1.7-.46a4.73 4.73 0 0 1 3.3.6 3.4 3.4 0 0 1 1.5 3.16 6 6 0 0 0-1-1.63 7.26 7.26 0 0 1 .9 2.78 8.84 8.84 0 0 0 .5 3.3 3.66 3.66 0 0 0 1.3 1.7 4.6 4.6 0 0 1-1.3-.4zm5 46.9a3.4 3.4 0 0 1-2.78-.7 9.3 9.3 0 0 0 1.27-1.7 7.72 7.72 0 0 0 2.2 1.5l.32.1c-.3.4-.7.6-1 .9zm1.85-1.8a7.62 7.62 0 0 1-3-1.5 5.55 5.55 0 0 0 .2-.6 6.33 6.33 0 0 0 4.53-1.2 8.86 8.86 0 0 1-1.7 3.4zm2.1-6.1c0 .4 0 .8-.05 1.1a6.87 6.87 0 0 1-4.65 1.9 6.63 6.63 0 0 0-.13-2.3 5.1 5.1 0 0 0 4.88-.7zm-2-17.8h-5.17v-5.6h6.12a28 28 0 0 0-.93 5.6zm3.67-11a8.6 8.6 0 0 1-1.3 1.6 6.65 6.65 0 0 0 .47-1.6 7.82 7.82 0 0 0 .1-1.2A6.53 6.53 0 0 0 65 52a5.12 5.12 0 0 1 .35 5.17A6.4 6.4 0 0 1 63.7 59l-.14.08a13.75 13.75 0 0 0 1-2 5.68 5.68 0 0 0 .44-2.4c-.2-2.6-3.06-4-2.3-6.16a8.88 8.88 0 0 1 2.37-3c1.12-1.1 1.28-1.86 1.27-2.2a3.44 3.44 0 0 0 .56-.4 3.54 3.54 0 0 1-.47 3l-1 1.36c-.94 1.3 1.38 3.2 1.38 3.2a4.23 4.23 0 0 1-1-2.2 2.78 2.78 0 0 0 .3.34c.8 1.1 3.9 4.5 1.4 8.5zM74.56 29l-.8-.3 1.2.1zm11.36 3a14.37 14.37 0 0 0-1.95.16h-.1a11.08 11.08 0 0 0-3.53-1.2 16 16 0 0 1 5.58 1zm-8.8-2.26l-.38.07-.2-.1c.55-.2 1.12-.3 1.7-.5.8.2 1.56.3 2.3.5a13.27 13.27 0 0 0-3.4.1zM79.57 57a13.78 13.78 0 0 1-.37 1.92c-.1-.62-.22-1.22-.36-1.8a.92.92 0 0 0 0-.12 6.74 6.74 0 0 0-.23-3.44l1-.32a22 22 0 0 1 0 3.76zM83 80.32c.56 3-1.68 4.46-3.46 5.06a6.82 6.82 0 0 1-6.35-1.2 4 4 0 0 1-3.6-.25c-1-.8-.4-2.28 1.1-3.43a1.3 1.3 0 0 1-.2-.22c-.6-.76.1-1.77 1.6-2.25a4.4 4.4 0 0 1 2.9 0c.5 0 1.1-.55 1.6-1.5.4 1.32 2.5 2.3 4.5 2.63a7.66 7.66 0 0 0 2.7.14 13.4 13.4 0 0 1-1 1.02zm-2.25-2.15a7.6 7.6 0 0 1-2.1-.82 29.72 29.72 0 0 0 1.93-8.1v-.33a11.74 11.74 0 0 0 3.76 1.4 12.5 12.5 0 0 0 1.54.2 39.3 39.3 0 0 1-5.15 7.66zm9-21.22a14.08 14.08 0 0 1-1.43 4.27 11.28 11.28 0 0 0 3.1-3.9c.14.48.3 1 .47 1.48 1 3 .3 6.43-1 9.72a8.45 8.45 0 0 1-6.4 1 8.78 8.78 0 0 1-5.3-2.8 32.16 32.16 0 0 0-.1-7.75 6.5 6.5 0 0 0 1.2-2 13.4 13.4 0 0 0 .9-4.3h.1a18 18 0 0 1-.2 4.33 12 12 0 0 1-1.2 3.57A6.52 6.52 0 0 0 82.3 57a12.74 12.74 0 0 0 .45-4.5v-.32a11.73 11.73 0 0 1 .77 4.82 11 11 0 0 1-.4 2.4 11.5 11.5 0 0 0 1.55-2.4 10.73 10.73 0 0 0 1.06-5.28 12.8 12.8 0 0 1 .8 5.28 12.22 12.22 0 0 1-.8 3.65A11.7 11.7 0 0 0 88.2 57a10.94 10.94 0 0 0 .66-6.72 1.85 1.85 0 0 0 .4-.7 16 16 0 0 1 .5 7.42zm4.12-14.77a13.14 13.14 0 0 1 1.92 1.5 7.55 7.55 0 0 0-1.7-.37 6.22 6.22 0 0 0-.3-1.1z"},
    { "id": 2, "path": "M49.08 64.67a.58.58 0 0 0-.58.6c0 .4.16.67.57.67a.88.88 0 0 0 .77-.88c-.02-.36-.36-.45-.76-.4zM51 65.93c.4 0 .58-.27.57-.68a.58.58 0 0 0-.58-.6c-.4-.05-.8 0-.8.4a.88.88 0 0 0 .7.88zM48.5 40.9a4.67 4.67 0 0 1-1.15-.17s.3.88 2.7.86 2.68-.9 2.68-.9a4.65 4.65 0 0 1-1.14.1zm-.66-9.1c-1.12-.36-.64-.22-1.88-.65s-2.34 1.52-2.34 1.52a2 2 0 0 1 .9-.63c.86-.28 1.15-.05 2.14.26a4.18 4.18 0 0 0-.52 0c-1.06.18-1.24.5-1.24.5l3.2.05a1.34 1.34 0 0 0-.37-.35 1.6 1.6 0 0 0 1.56-.8 1.82 1.82 0 0 1-1.5.1zm4.56.74a1.3 1.3 0 0 0-.37.35l3.2-.1s-.18-.3-1.25-.5a3.92 3.92 0 0 0-.52 0c1-.3 1.28-.6 2.15-.3a2 2 0 0 1 .9.6s-.9-2-2.3-1.5-.7.2-1.9.6a1.8 1.8 0 0 1-1.4-.1 1.6 1.6 0 0 0 1.6.7z"}
  ],
  "sayings": [
    { "id": 0, "saying": "This drink, I like it! ANOTHER!"},
    { "id": 1, "saying": "Do I look to be in a gaming mood?"},
    { "id": 2, "saying": "You people are so petty, and tiny."},
    { "id": 3, "saying": "You’re big. I’ve fought bigger."},
    { "id": 4, "saying": "You should know that when you betray me, I will kill you."},
    { "id": 5, "saying": "He’s adopted."},
    { "id": 6, "saying": "Jane’s better."},
    { "id": 7, "saying": "Fortunately, I am mighty!"}
  ]
}, {
  "id": 1,
  "name": "Loki",
  "full_name": "Loki of Asgard",
  "power": "Slash",
  "weapon": "Chitauri Scepter",
  "svg": [
    { "id": 0, "path": "M92.76 56.36c-2-5.9-1.4-8.07-.73-13.76.42-3.58-.52-6.22-7-10.58-9.42-6.3-17.3-7.9-26.8-8.28a10 10 0 0 0-.88-1.15l1 .1a5.87 5.87 0 0 0 5.73-4l-.9-.4a18.6 18.6 0 0 1-2.64-1.3 22.67 22.67 0 0 0 4.46.6l.08-.2a14.53 14.53 0 0 0 1-4.1l-1.13.1a14.12 14.12 0 0 1-1.5.1h-.05a11.37 11.37 0 0 0 2-1.3 13.67 13.67 0 0 0 1.1-1L65 6.5a12 12 0 0 1-1.6 3 23.16 23.16 0 0 1-1.6 1.8 17.1 17.1 0 0 0 1.4-2.76 17.72 17.72 0 0 0 .9-4.3L62.65 1.7a12.8 12.8 0 0 1-.87 5.42 10.6 10.6 0 0 1-4.6 5.8 12.38 12.38 0 0 1-.6 7.35q-.22.6-.5 1.17a9.73 9.73 0 0 0-5.65-2.1.43.43 0 0 0-.77 0 9.74 9.74 0 0 0-5.68 2.1c-.18-.37-.35-.76-.5-1.16a12.37 12.37 0 0 1-.6-7.36 10.6 10.6 0 0 1-4.6-5.8 12.8 12.8 0 0 1-.86-5.42L36 4.22a17.63 17.63 0 0 0 .9 4.3 17.1 17.1 0 0 0 1.4 2.77 23.55 23.55 0 0 1-1.64-1.8 12 12 0 0 1-1.66-3l-1.48 4.8a14.2 14.2 0 0 0 1.1 1 11.42 11.42 0 0 0 2 1.3h-.13a13.88 13.88 0 0 1-1.5-.1 5.23 5.23 0 0 1-1.2-.2 14.6 14.6 0 0 0 1 4.1l.1.2a22.66 22.66 0 0 0 4.5-.6 18.46 18.46 0 0 1-2.7 1.2l-.9.3a5.87 5.87 0 0 0 5.7 4l1-.1a9.78 9.78 0 0 0-.9 1.1c-9.5.4-17.4 2-26.8 8.2-6.5 4.4-7.5 7-7 10.6.6 5.7 1.3 7.8-.7 13.7-2.8 8.2 6.1 19.5 8.8 22.1-.6 5.8 7.3 7.3 11 4.5 3.1.7 6-1.1 4.3-3.8l2.8-1.7c-1 5.4-1.8 10.3 3.3 14.6-1.2.3-11.7 1.5-9.2 4.6 1.3 1.5 6.2.7 7.5.2 3.3-1.3 2.4-1.6 6.7-2.3 1.4-.48 2.2-1.8.8-2.9-7.7-6-.6-14.5 6.7-14.5s14.5 8.5 6.8 14.5c-1.4 1.1-.6 2.4.8 2.82 4.3.74 3.4 1 6.8 2.3 1.3.5 6.3 1.3 7.5-.27 2.5-3-7.9-4.3-9.2-4.6 5.7-4.8 4.1-10.3 2.9-16.4l-.3-1.6a17 17 0 0 0 3.46-3l.3-.4-.4-.98 1 .1.3-.47a16.37 16.37 0 0 0 2.7-10.7 17.4 17.4 0 0 0-.43-2.6l-.2-.83-.1.53a15.38 15.38 0 0 1-.6 2.6 9.42 9.42 0 0 1-3.1 4.3 4.86 4.86 0 0 1-3.27 1 29 29 0 0 1 2.5-8.4A8 8 0 0 0 68.8 52q.5-.9 1.1-1.82c1.27-2 4.43-1.44 5.94.4 5.45 6.8.6 23.1-.87 23.8-1.9-.6-6.6.5-5.65 3.3-3.3 3.2-.22 5.7 3.4 4.9 3.7 2.74 11.6 1.3 11-4.54 2.74-2.7 11.6-14 8.8-22.2zm-26.64-16.1a3.8 3.8 0 0 1-.57-1.83 2.77 2.77 0 0 0 .58-2.15v-.18a2.4 2.4 0 0 1 0 4.16zM64.9 38.6a4.37 4.37 0 0 0 .8 2.22 1 1 0 0 1-.05.38 3 3 0 0 1-.54.94L65 42a3.1 3.1 0 0 1-.1-3.4zm-1.1-1.9a2 2 0 0 1-.1-2.2l.67.08a2.48 2.48 0 0 0 1.06 1.58 2.28 2.28 0 0 1-.27 1.68v.07a4.76 4.76 0 0 1-1.37-1.2zm.56-5a1.9 1.9 0 0 0 0-.2c1.5.63 2.62 3 1.33 4.07a1.86 1.86 0 0 1-.8-1.2c.5-.64-.1-1.8-.8-2.37a1.2 1.2 0 0 0 .2-.3zm.1 2.26c-1.76-.07-3.63-.7-4-2.44a2.63 2.63 0 0 1 0-.28H61a4 4 0 0 0 .62-.14c.47.56 1.4 1.4 2.1 1.32.38.3 1 1.15.73 1.63zm-2 22.34l-.87.6-2.4 1.68V56l2-1.43zm.82-27.3c.28.5.76 2.12.35 2.68-.56 0-1.4-.9-1.65-1.26-.38-1.1-.6-2.2-1.06-3.27A3.4 3.4 0 0 1 63.28 29zm-6-5.12a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.4zm-1.68 1.4a8.47 8.47 0 0 0 .38 1.1 4.76 4.76 0 0 0 3.5 3.15A6.44 6.44 0 0 1 56.32 26c-.1-.24-.2-.48-.27-.7h1.68a3.5 3.5 0 0 1 2.2 1.53A8.26 8.26 0 0 1 60.8 29c.1.52.3 1.15.43 1.5l-.4.08c-2.56.38-4.2-1.35-5-3.44a10.07 10.07 0 0 1-.47-1.82h.23zM54.88 24a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.43zm-2.42 0a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.43zM50 20.35a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.43zm0 1.83a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.4zM50 24a.43.43 0 1 1-.43.43A.43.43 0 0 1 50 24zm0 1.83a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.43zm0 1.83a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.5zm0 1.52a1.14 1.14 0 0 0 1.15-1.13V25.3h3.47a4.36 4.36 0 0 0 .15.74c.5 2.3 1.93 4.62 4.18 5.2v.27a.18.18 0 0 1 0 .1 5.7 5.7 0 0 0-3.74 2.9 6.22 6.22 0 0 1 2.4-1.5c0 1.9.1 7.9.1 7.9l-.5.4v-.7c0-.4.4-4-1.8-5.4a6.7 6.7 0 0 0-5.2-.3 6.72 6.72 0 0 0-5.2.3c-2.2 1.4-1.8 4.9-1.8 5.4v.8l-.5-.3.1-7.8a6.2 6.2 0 0 1 2.3 1.57 5.7 5.7 0 0 0-3.8-2.8.36.36 0 0 1 0-.1v-.3c2.2-.6 3.6-2.9 4.1-5.2l.2-.74H49V28a1.14 1.14 0 0 0 1.06 1.18zM47.63 24a.43.43 0 1 1-.43.43.43.43 0 0 1 .43-.43zm-2.42 0a.4.4 0 1 0 0 .07zm-2.4 0a.38.38 0 1 0 0 .1zm-2.7 2.75a3.5 3.5 0 0 1 2.2-1.45H44c-.08.24-.17.48-.28.73a6.45 6.45 0 0 1-3.18 3.54A4.76 4.76 0 0 0 44 26.42a8.28 8.28 0 0 0 .4-1.12h.24a10.1 10.1 0 0 1-.47 1.82c-.78 2.1-2.42 3.82-5 3.44l-.4-.08c.12-.35.32-1 .44-1.5a8.2 8.2 0 0 1 .9-2.13zM36.8 29a3.4 3.4 0 0 1 2.4-1.82c-.46 1.07-.68 2.18-1.05 3.27-.3.37-1.1 1.22-1.67 1.26-.43-.5.03-2.2.3-2.7zm-.37 3.34c.7.08 1.63-.76 2.1-1.32a4.05 4.05 0 0 0 .63.14h.54a2.5 2.5 0 0 1 0 .28c-.4 1.75-2.25 2.37-4 2.44-.3-.42.28-1.3.73-1.57zm-1.5 5.56v-.07a2.28 2.28 0 0 1-.27-1.68 2.48 2.48 0 0 0 1.06-1.58l.66-.07a2 2 0 0 1-.1 2.2 4.74 4.74 0 0 1-1.35 1.2zM35 42l-.1.17a3 3 0 0 1-.54-.94 1 1 0 0 1 0-.38 4.37 4.37 0 0 0 .8-2.22A3.1 3.1 0 0 1 35 42zm.6-10.45a1.88 1.88 0 0 0 0 .2 1.26 1.26 0 0 0 .13.28c-.67.57-1.26 1.74-.78 2.37a1.86 1.86 0 0 1-.73 1.2c-1.22-1.08-.1-3.47 1.4-4.1zm-1.74 4.55v.18a2.77 2.77 0 0 0 .58 2.15 3.8 3.8 0 0 1-.57 1.83 2.4 2.4 0 0 1 0-4.2zM34 46a3.1 3.1 0 0 0 .22-.34 4.25 4.25 0 0 1-1 2.2S35.54 46 34.6 44.7l-1-1.4a3.53 3.53 0 0 1-.47-3 3.36 3.36 0 0 0 .56.4 3.24 3.24 0 0 0 1.3 2.22 8.87 8.87 0 0 1 2.3 3c.7 2.22-2.1 3.55-2.3 6.17a8.45 8.45 0 0 0 1.4 4.3l-.2-.1a5.08 5.08 0 0 1-1.4-7 6.53 6.53 0 0 0-1.7 3.9 6.9 6.9 0 0 0 .5 2.7c-4.7-4.6-.9-8.8.1-10zM9.23 66.38c-1.35-3.3-2-6.76-1-9.72A22.7 22.7 0 0 0 9.36 45c2.9 2.48 7.55 4.64 13.4 6.28-2.1 3.23-2.45 8.5-2 13.32a8.78 8.78 0 0 1-5.23 2.8 8.44 8.44 0 0 1-6.3-1.02zm6.5 1.8a11.77 11.77 0 0 0 3.77-1.4v.33a29.7 29.7 0 0 0 1.93 8.1 7.5 7.5 0 0 1-2.1.9 39.24 39.24 0 0 1-5.16-7.6 11.82 11.82 0 0 0 1.57-.2zm17.43 8.62L30 79c1 1 1.2 2.13.42 2.8a4 4 0 0 1-3.53.23 6.83 6.83 0 0 1-6.4 1.2c-1.8-.58-4-2.1-3.5-5.05a12.37 12.37 0 0 1-1-1 7.68 7.68 0 0 0 2.8-.18c2-.3 4.1-1.3 4.5-2.64.5 1 1.1 1.52 1.6 1.5a4.4 4.4 0 0 1 2.9 0 3.17 3.17 0 0 1 1.5 1l3.7-2.62zm-3.76-1.22a6.37 6.37 0 0 0-4.54-.67c-1.48-.6-6.32-17-.88-23.7 1.5-1.9 4.67-2.4 5.95-.4l1 1.5a8 8 0 0 0 1.83 3.5 28.1 28.1 0 0 1 2.37 15.9zm4.7-2l4.1-2.87v2.6l-4.1 2.9zm.1 10a5.1 5.1 0 0 0 4.8.72 6.6 6.6 0 0 0-.14 2.23 6.9 6.9 0 0 1-4.65-1.85v-1.14zm2.1 6.1a8.83 8.83 0 0 1-1.75-3.33 6.33 6.33 0 0 0 4.53 1.2c0 .2.12.4.2.6a7.6 7.6 0 0 1-3 1.5zm4.7 1.15a3.4 3.4 0 0 1-2.82.63q-.52-.42-1-.85l.3-.1A7.78 7.78 0 0 0 39.7 89a9.14 9.14 0 0 0 1.3 1.83zm2.28-21.1l-4.1 2.9V70l4.1-2.87zm0-25.38a4.6 4.6 0 0 1-1.3.4 3.68 3.68 0 0 0 1.32-1.7 8.8 8.8 0 0 0 .48-3.27 7.3 7.3 0 0 1 .8-2.78 6 6 0 0 0-1 1.65 3.42 3.42 0 0 1 1.54-3.15 4.73 4.73 0 0 1 3.2-.66c.44.07 1.47.47 1.75.48s1.3-.4 1.74-.48a4.73 4.73 0 0 1 3.2.66 3.4 3.4 0 0 1 1.6 3.15 6 6 0 0 0-1-1.65 7.3 7.3 0 0 1 .9 2.76A8.83 8.83 0 0 0 57 43a3.67 3.67 0 0 0 1.3 1.7 4.56 4.56 0 0 1-1.3-.4c-2.1-1.1-2.17-4.1-2.2-4.1A10.67 10.67 0 0 0 55 43a3.26 3.26 0 0 1-.24-.36 9 9 0 0 1-1-4.22c0-1.17-.28-1.54-1.4-1.54h-4.6c-1.14 0-1.42.36-1.42 1.54a9 9 0 0 1-1 4.22 3.26 3.26 0 0 1-.24.36 10.64 10.64 0 0 0 .3-2.8s-.1 3-2.22 4.13zm15 12.32v1.1L57.7 57zm-4-13.52l-1.35 1H47.1l-1.34-1 .06-.1a9.3 9.3 0 0 0 1-4.53c0-1 .74-.94 1-.94h4.5a.84.84 0 0 1 1 .94 9.27 9.27 0 0 0 1 4.54zm-6 23.06l-4.1 2.9v-2.6l4.1-2.8zm.6-9.8c-.3-.1-.3-.2-.3-.2 0-.4.13-.7.26-.6s.2.4.2.9c0 0 0 .2-.14.1zm-.34-1.2a1.8 1.8 0 0 1 0-.4c-1.47.1-2.16.3-1.78-1.8 0-.4-.53-.8-.3-2 .4-2.3 1.24-2.7 3.7-2.7s3.3.5 3.72 2.8c.22 1.2-.3 1.6-.3 2.1.37 2.1-.32 1.9-1.8 1.8a1.73 1.73 0 0 1 0 .4.44.44 0 0 0-.66.2.55.55 0 0 0-.4-.2.67.67 0 0 0-.6.5.66.66 0 0 0-.57-.4.56.56 0 0 0-.4.2.44.44 0 0 0-.58-.2zm3.3 1s0 .1-.32.3c-.15.1-.15 0-.15-.1 0-.4.06-.8.2-.8s.28.3.28.7zm-.62.5s0 .2-.6.2c-.23 0-.27 0-.27-.1 0-.6.2-1.1.43-1.1s.46.5.46 1.1zm-2 0c0-.6.2-1 .43-1s.43.6.43 1.1c0 .1 0 .2-.27.2-.6 0-.6-.1-.6-.1zm0 9V63l3.47-2.43.5.77v1.44zm12.72 25.8a3.4 3.4 0 0 1-2.82-.6A9.25 9.25 0 0 0 60.4 89a7.78 7.78 0 0 0 2.2 1.46l.3.1q-.44.44-.96.9zm1.85-1.8a7.6 7.6 0 0 1-3-1.5l.1-.6a6.33 6.33 0 0 0 4.5-1.2 8.8 8.8 0 0 1-1.8 3.4zm2.1-6.1a7.2 7.2 0 0 1-.1 1.2 6.9 6.9 0 0 1-4.7 1.9 6.64 6.64 0 0 0-.2-2.2 5.1 5.1 0 0 0 4.9-.7zm6.2-23.9a15.62 15.62 0 0 1-2.9 9.8l-1.2-.2.4 1.2a15.9 15.9 0 0 1-18.2 4.7A17.83 17.83 0 0 0 72 59.7zm-3.5 3.7a8.85 8.85 0 0 0 3-3.6 17.43 17.43 0 0 1-21.4 14.9 8.86 8.86 0 0 0 4.5-1.6c4.1-2.9 2.3-7.4.5-10.7l-.4.3-2.2-3.1 3.8-2.7 2.1 3.1-.5.3c2.5 2.9 6.1 6 10.2 3.2zm-2.5-7.3a6.94 6.94 0 0 0 .5-2.8 6.53 6.53 0 0 0-1.7-3.9 5.08 5.08 0 0 1-1.4 7l-.2.1a8.46 8.46 0 0 0 1.4-4.2c-.2-2.7-3.1-4-2.3-6.2a8.9 8.9 0 0 1 2.4-3c1.1-1.1 1.3-1.8 1.2-2.2a3.37 3.37 0 0 0 .5-.4 3.54 3.54 0 0 1-.5 3l-1 1.4c-.9 1.3 1.4 3.1 1.4 3.1a4.26 4.26 0 0 1-1-2.2 3 3 0 0 0 .2.3c1 1.3 4.9 5.5.2 10zm11.1-4.8c5.8-1.6 10.5-3.8 13.4-6.3a22.74 22.74 0 0 0 1.1 11.6c1 3 .3 6.5-1 9.8a8.44 8.44 0 0 1-6.4 1 8.78 8.78 0 0 1-5.3-2.8c.4-4.8.1-10-2-13.2zm8.6 17.1a39.33 39.33 0 0 1-5.2 7.6 7.58 7.58 0 0 1-2.1-.8 29.75 29.75 0 0 0 1.9-8.1v-.3a11.8 11.8 0 0 0 3.7 1.4 12.2 12.2 0 0 0 1.6.3zm-6.4 14.9a6.82 6.82 0 0 1-6.3-1.3 4 4 0 0 1-3.6-.2c-1-.8-.4-2.3 1.1-3.4a1.32 1.32 0 0 1-.2-.2c-.5-.7.2-1.7 1.6-2.2a4.4 4.4 0 0 1 2.9 0c.6 0 1.1-.5 1.7-1.5.4 1.3 2.5 2.3 4.5 2.7a7.7 7.7 0 0 0 2.7.2 12.86 12.86 0 0 1-1 1c.5 3-1.7 4.5-3.5 5.1z" },
    { "id": 2, "path": "M48.5 38.4a4.76 4.76 0 0 1-1.13-.16s.32.88 2.7.86 2.68-.86 2.68-.86a4.74 4.74 0 0 1-1.14.17zm3.92-8.34a1.4 1.4 0 0 0-.37.34l3.2-.06s-.18-.34-1.25-.5a4.13 4.13 0 0 0-.53 0c1-.3 1.28-.53 2.15-.24a2 2 0 0 1 .9.63s-1-2-2.35-1.52-.76.3-1.88.7a1.82 1.82 0 0 1-1.5 0 1.6 1.6 0 0 0 1.5.8zm-4.57-.74c-1.12-.37-.64-.23-1.88-.66s-2.34 1.52-2.34 1.52a2 2 0 0 1 .9-.63c.86-.28 1.15 0 2.14.25a4.16 4.16 0 0 0-.53 0c-1.07.18-1.25.5-1.25.5l3.2.05a1.38 1.38 0 0 0-.4-.34 1.6 1.6 0 0 0 1.5-.8 1.82 1.82 0 0 1-1.5.2zm1.95 22.8c0-.65-.66-.8-1.4-.7a1.07 1.07 0 0 0-1.06 1.07c0 .7.3 1.2 1 1.2a1.62 1.62 0 0 0 1.46-1.6zm2.2 1.62c.75 0 1.07-.5 1-1.25a1.07 1.07 0 0 0-1-1.1c-.74-.1-1.35 0-1.4.7a1.62 1.62 0 0 0 1.4 1.6z"}
  ],
  "sayings": [
    { "id": 0, "saying": "This drink, I like it! ANOTHER!"},
    { "id": 1, "saying": "Do I look to be in a gaming mood?"},
    { "id": 2, "saying": "You people are so petty, and tiny."},
    { "id": 3, "saying": "You’re big. I’ve fought bigger."},
    { "id": 4, "saying": "You should know that when you betray me, I will kill you."},
    { "id": 5, "saying": "He’s adopted."},
    { "id": 6, "saying": "Jane’s better."},
    { "id": 7, "saying": "Fortunately, I am mighty!"}
  ]
}];

// for (let god of gods) {
//   console.log(god.full_name);
// };


function add(items) {
  const sum = items.reduce((total, amount) => total + amount);
  // console.log(sum);
  return sum;
}

// Returns random number between 1 and 100
function randomNumber() {
  const number = Math.floor(Math.random() * 100 + 1);
  console.log(`Random Number ${number}`);
  return number;
}

class Fighter {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = []
  }
  wasHit() {
    this.health -= randomNumber();
    if (this.health <= 0) {
      console.log(`${this.name} is dead ☠️`);
      return `${this.name} is dead ☠️`;
    } else {
      console.log(`Ouch ${this.name} got hit 🔪 ${this.health}hp left 😵`);
      return `Ouch ${this.name} got hit 🔪 ${this.health}hp left 😵` ;
    }
    console.log(`Health 💉 ${this.health}`);
    return `Health 💉 ${this.health}`;
  }
  powerUp(powerType) {
    this.power.push(powerType);
    console.log(`${this.name} has 💥 ${this.power} Power Points`);
    return `${this.name} has 💥 ${this.power} Power Points`;
  }
  info() {
    if (this.health <= 0) {
      console.log(`${this.name} is dead but here is his stats: ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`);
      return `${this.name} is dead but here is his stats: ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`;
    } else {
      console.log(`${this.name} has ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`);
      return `${this.name} has ${add(this.power)} power points 💫 and has ${this.health}hp ⛑`;
    }
  }
  win() {
    if (this.health <= 0) {
      console.log(`${this.name.toUpperCase()} is dead... RIP ${this.name} ⚰️`);
      return `${this.name.toUpperCase()} is dead... RIP ${this.name} ⚰️`;
    } else {
      console.log(`${this.name.toUpperCase()} is a survivor 🏆 With ${add(this.power)} power points 💫 and ${this.health}hp the true warrior is ${this.name} 🎉`);
      return `${this.name.toUpperCase()} is a survivor 🏆 With ${add(this.power)} power points 💫 and ${this.health}hp the true warrior is ${this.name} 🎉`;
    }
  }
}

class God extends Fighter {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.staff = '';
  }
  equipWeapon() {
    // this.staff = 'Mjolnir';
    console.log(`${this.name} has his ${this.type}! ⚡️`);
    return `${this.name} has his ${this.type}! ⚡️`;
    // return this.staff;
  }
}

// const thor = new Fighter('Thor');
const thor = new God('Thor', 'Mjolnir');
const loki = new God('Loki', 'Chitauri Scepter');
loki.powerUp(randomNumber());
thor.powerUp(randomNumber());

const thorText = `
  <p>${thor.equipWeapon()}</p>
  <p>${thor.wasHit()}</p>
  <p>${thor.info()}</p>
  <p>${thor.win()}</p>
  <h3>Thor Odinson</h3>
`;

const thorElement = document.getElementById('viking1');
thorElement.innerHTML = thorText;

const lokiText = `
  <p>${loki.equipWeapon()}</p>
  <p>${loki.wasHit()}</p>
  <p>${loki.info()}</p>
  <p>${loki.win()}</p>
  <h3>Loki of Asgard</h3>
`;

const lokiElement = document.getElementById('viking2');
lokiElement.innerHTML = lokiText;

// Testing

const testElement = document.getElementById('battlefield');

for (let god of gods) {
console.log(god);
console.log(god.svg[0].path);
  const text = `
    <div class="fighter">
      <svg id="${god.name.toLowerCase()}SVG" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGradent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="5%" stop-color="#F7D696"/>
            <stop offset="50%" stop-color="#EEBE7B"/>
            <stop offset="95%" stop-color="#CEA058"/>
          </linearGradient>
          <g>
            <path id="${god.name.toLowerCase()}Top" d="${god.svg[0].path}"/>
            <path id="${god.name.toLowerCase()}Middle" d="${god.svg[1].path}"/>
          </g>
        </defs>
        <svg class="animate-path" width="100%" height="100%" viewBox="0 0 100 100" xml:space="preserve">
          <use id="drawViking1Top" class="animate-draw" xlink:href="#${god.name.toLowerCase()}Top" />
          <use id="drawViking1Middle" class="animate-draw" xlink:href="#${god.name.toLowerCase()}Middle" />
        </svg>
      </svg>
      <h3>${god.full_name}</h3>
      <div id="${god.name}" class="fight-messages">
        <p>FIGHHTTT</p>
      <div/>
      <button>Power Up</button>
      <button onclick="logThis(randomNumber(), '${god.name.toLowerCase()}')">Attack</button>
    </div>
    </div>
  `;
  testElement.innerHTML += text;
  console.log(god.full_name);
};

function alive() {
  console.log(`It's Alive 👋`);
}

function logThis(i, n) {
  console.log(`${n} ${i}`);
}
