// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
const franc = require("franc");
const langs = require("langs");
const colors = require("colors")

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`.green)
}

