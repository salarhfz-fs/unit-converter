console.log(`
A Unit Converter web app in pure JS 😍
Author: Salar Hafezi 🫡 <salar.hfz@gmail.com>
Github repo: https://github.com/salarhfz-fs/unit-converter 😎
`)

// Constants
const METER_TO_FEET_RATIO = 3.281;
const LITERS_TO_GALLONS = 3.785;
const KILOGRAMS_TO_POUNDS = 2.205;

// Helpers
const meterToFeet = meter => (meter * METER_TO_FEET_RATIO).toFixed(3);
const feetToMeter = feet => (feet / METER_TO_FEET_RATIO).toFixed(3);
const litersToGallons = liters => (liters / LITERS_TO_GALLONS).toFixed(3);
const gallonsToLiters = gallons => (gallons * LITERS_TO_GALLONS).toFixed(3);
const kilogramsToPounds = kilogram => (kilogram * KILOGRAMS_TO_POUNDS).toFixed(3);
const poundsToKilograms = pounds => (pounds / KILOGRAMS_TO_POUNDS).toFixed(3);
const generateResult = (input, type) => {
    let result = '';
    switch (type) {
        case 0:
            result = `${input} meters = ${meterToFeet(input)} feet | ${input} feet = ${feetToMeter(input)} meters`;
            break;
        case 1:
            result = `${input} liters = ${litersToGallons(input)} gallons | ${input} gallons = ${gallonsToLiters(input)} liters`;
            break;
        case 2:
            result = `${input} kilos = ${kilogramsToPounds(input)} pounds | ${input} pounds = ${poundsToKilograms(input)} kilos`;
            break;
        default:
            break;
    }
    return result;
}

// DOM queries
const input_el = document.getElementById('input-el');
const convert_btn = document.getElementById('convert-btn');
const result_sections = document.querySelectorAll('.result');

// Event handlers
function handleConvert() {
    if (!input_el.value) return;
    result_sections.forEach((section, idx) => {
        const result = generateResult(input_el.value, idx);
        section.textContent = result;
    })
}

convert_btn.addEventListener('click', handleConvert);
input_el.addEventListener('keypress', e => { if (e.key === 'Enter') handleConvert() });
