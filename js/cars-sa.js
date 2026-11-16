
// js/cars-sa.js
// AutoVerse South African vehicle catalogue
// Engine and performance specifications vary by model year and derivative.
// Confirm exact figures against the South African manufacturer's specification sheet.

const southAfricanCars = [];

const catalogue = {
  Toyota: [
    "86|Sports Car", "bZ4X|SUV", "Coaster|Commercial Vehicle",
    "Corolla|Sedan", "Corolla Cross|SUV", "Corolla Hatch|Hatchback",
    "FJ Cruiser|Off-road", "Fortuner|SUV", "Hiace|Commercial Vehicle",
    "Hiace Ses'fikile|MPV", "Hilux Double Cab|Bakkie",
    "Hilux Extended Cab|Bakkie", "Hilux Single Cab|Bakkie",
    "Land Cruiser 76|Off-road", "Land Cruiser 79 Double Cab|Bakkie",
    "Land Cruiser 79 Single Cab|Bakkie", "Land Cruiser 300|Off-road",
    "Land Cruiser Prado|SUV", "Quantum Bus|MPV",
    "Quantum Panel Van|Commercial Vehicle", "RAV4|SUV",
    "Rumion|MPV", "Starlet|Hatchback", "Starlet Cross|SUV",
    "Urban Cruiser|SUV", "Vitz|Hatchback"
  ],

  Volkswagen: [
    "Amarok|Bakkie", "Caddy|MPV", "Caddy Cargo|Commercial Vehicle",
    "Caravelle|MPV", "Crafter|Commercial Vehicle",
    "Golf 1.4|Hatchback", "Golf GTI|Sports Hatchback",
    "New T-ROC|SUV", "Polo|Hatchback", "Polo Sedan|Sedan",
    "Polo Vivo|Hatchback", "T-Cross|SUV", "Taigo|SUV",
    "Tayron|SUV", "Tiguan|SUV", "Touareg|SUV",
    "Transporter|Commercial Vehicle", "Transporter Kombi|MPV"
  ],

  Isuzu: [
    "D-Max Double Cab|Bakkie", "D-Max Extended Cab|Bakkie",
    "D-Max Single Cab|Bakkie", "mu-X|SUV"
  ],

  Audi: [
    "A1|Hatchback", "A3|Sedan", "A3 Sportback|Hatchback",
    "A5|Coupe", "A6|Sedan", "A7|Sedan", "A8|Luxury Sedan",
    "e-TRON|Electric SUV", "Q2|SUV", "Q3|SUV", "Q5|SUV",
    "Q7|SUV", "Q8|SUV"
  ],

  BMW: [
    "1 Series|Hatchback", "1 Series F40|Hatchback",
    "2 Series|Coupe", "2 Series Gran Coupe|Sedan",
    "3 Series G20|Sedan", "3 Series G80|Sports Sedan",
    "4 Series|Coupe", "4 Series F32|Coupe",
    "4 Series Gran Coupe|Sedan", "5 Series|Sedan",
    "7 Series|Luxury Sedan", "8 Series|Coupe",
    "i3|Electric Hatchback", "i4|Electric Sedan",
    "i7|Electric Luxury Sedan", "iX|Electric SUV",
    "iX1|Electric SUV", "iX3|Electric SUV",
    "M5|Performance Sedan", "X1|SUV", "X2|SUV",
    "X3|SUV", "X4|SUV", "X5|SUV", "X6|SUV",
    "X7|Luxury SUV", "XM|Performance SUV", "Z4|Convertible"
  ],

  Nissan: [
    "ALL-New X-Trail|SUV", "Magnite|SUV", "Magnite Kuro|SUV",
    "Navara Double Cab|Bakkie", "Navara Single Cab|Bakkie",
    "Tekton|SUV"
  ],

  Renault: [
    "Captur|SUV", "Duster|SUV", "Kiger|SUV",
    "Kwid|Hatchback", "Kwid Limited Edition|Hatchback",
    "Trafic Panel Van|Commercial Vehicle",
    "Trafic Passenger|MPV", "Triber|MPV",
    "Triber Express|Commercial Vehicle"
  ],

  Suzuki: [
    "Across|SUV", "Baleno|Hatchback", "Celerio|Hatchback",
    "DZire|Sedan", "Eeco|MPV", "Ertiga|MPV",
    "Fronx|SUV", "Grand Vitara|SUV", "Jimny|Off-road",
    "Jimny 5-door|Off-road", "S-Presso|Hatchback",
    "Super Carry|Commercial Vehicle", "Swift|Hatchback",
    "XL6|MPV"
  ],

  "Mercedes-Benz": [
    "A-Class|Hatchback", "A-Class Sedan|Sedan",
    "AMG GT|Sports Car", "C-Class|Sedan", "CLA|Coupe",
    "CLE|Coupe", "CLE Coupe|Coupe", "E-Class|Luxury Sedan",
    "EQE|Electric Sedan", "EQS|Electric Luxury Sedan",
    "G-Class|Off-road", "GLA|SUV", "GLB|SUV",
    "GLC|SUV", "GLE|SUV", "Maybach S580|Luxury Sedan",
    "S-Class|Luxury Sedan", "SL|Convertible",
    "Sprinter|Commercial Vehicle", "V-Class|MPV",
    "Vito|Commercial Vehicle"
  ]
};

// General descriptions for each vehicle category.
// These are descriptions of the vehicle type, not manufacturer-certified figures.
const categoryDescriptions = {
  "Hatchback": "A compact passenger car designed for everyday driving, easy parking and practical luggage access.",
  "Sports Hatchback": "A performance-focused hatchback with sporty styling, responsive handling and enhanced engine performance.",
  "Sedan": "A passenger car with a separate boot, comfortable cabin and a balanced combination of performance and practicality.",
  "Sports Sedan": "A high-performance sedan designed for powerful acceleration, responsive handling and sporty driving.",
  "Luxury Sedan": "A premium sedan offering refined comfort, advanced technology and a high-quality interior.",
  "Coupe": "A stylish performance-oriented car with a sporty roofline and emphasis on design and driving enjoyment.",
  "Convertible": "A car with a retractable or removable roof for open-air driving.",
  "Sports Car": "A performance vehicle engineered for acceleration, handling and an engaging driving experience.",
  "Performance Sedan": "A high-performance four-door car with powerful engine options and performance-focused engineering.",
  "SUV": "A versatile sport utility vehicle offering elevated seating, passenger space and everyday practicality.",
  "Electric SUV": "An SUV powered by an electric motor and battery instead of a conventional petrol or diesel engine.",
  "Electric Hatchback": "A compact electric passenger vehicle designed for efficient urban and everyday driving.",
  "Electric Sedan": "An electric-powered sedan offering quiet operation, instant motor response and modern technology.",
  "Electric Luxury Sedan": "A premium electric sedan combining luxury equipment, electric performance and advanced technology.",
  "Off-road": "A vehicle designed for challenging terrain, with off-road capability and rugged construction.",
  "Bakkie": "A light commercial pickup designed for carrying loads, work duties and everyday transport.",
  "MPV": "A multi-purpose family vehicle designed for flexible seating and passenger space.",
  "Commercial Vehicle": "A practical vehicle designed mainly for business, cargo transportation or commercial operations."
};

const specificationNotes = {
  "Hatchback": "Commonly available with small-capacity petrol engines; transmission and power depend on the derivative.",
  "Sports Hatchback": "Performance petrol engine; power, torque, acceleration and transmission depend on the specific GTI or performance derivative.",
  "Sedan": "Petrol, diesel or hybrid options may be available depending on the model; exact output varies by derivative.",
  "Sports Sedan": "Performance-oriented engine and suspension; exact power and torque depend on the selected model.",
  "Luxury Sedan": "Premium petrol, diesel, hybrid or electric powertrains depending on the model and year.",
  "Coupe": "Engine options range from standard petrol units to high-performance engines, depending on the derivative.",
  "Convertible": "Performance-focused powertrain; exact engine and output depend on the model version.",
  "Sports Car": "Performance engine and sports-focused drivetrain; exact output depends on the model year and derivative.",
  "Performance Sedan": "High-output performance engine, performance braking and tuned suspension; figures vary by version.",
  "SUV": "Petrol, diesel, hybrid or electric powertrain depending on the model; some versions offer all-wheel drive.",
  "Electric SUV": "Battery-electric motor; battery capacity, range, charging speed and output depend on the version.",
  "Electric Hatchback": "Battery-electric powertrain; range and motor output depend on the derivative.",
  "Electric Sedan": "Battery-electric motor; power, torque, battery capacity and range depend on the model.",
  "Electric Luxury Sedan": "Premium battery-electric powertrain with advanced technology; range and output vary by version.",
  "Off-road": "Typically features rugged suspension and off-road drivetrain options; 4x4 availability depends on the version.",
  "Bakkie": "Petrol or diesel engines depending on the model; payload, towing capacity and 4x2 or 4x4 options vary.",
  "MPV": "Designed for passenger capacity and family use; engine and seating configurations vary by derivative.",
  "Commercial Vehicle": "Engine, payload, load volume and transmission depend on the commercial configuration."
};

// Build the full AutoVerse database.
let nextId = 1;

Object.entries(catalogue).forEach(([brand, models]) => {
  models.forEach((entry) => {
    const [name, category] = entry.split("|");

    const slug = `${brand}-${name}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    southAfricanCars.push({
      id: nextId++,
      name: `${brand} ${name}`,
      brand,
      category,
      year: "Check current model year",
      body: category,
      engine: "Varies by South African derivative",
      capacity: "Check manufacturer specification",
      power: "Check manufacturer specification",
      torque: "Check manufacturer specification",
      transmission: "Manual or automatic, depending on derivative",
      drivetrain: "Varies by derivative",
      fuel: "Petrol, diesel, hybrid or electric, depending on model",
      acceleration: "Check manufacturer specification",
      speed: "Check manufacturer specification",
      seats: "Depends on body style and derivative",
      image: `images/${slug}.jpg`,
      description: categoryDescriptions[category] ||
        "Vehicle specifications and features depend on the selected derivative.",
      specDescription:
        `${brand} ${name}: ${specificationNotes[category] ||
        "Specifications vary by derivative."} ` +
        "Confirm engine capacity, power (kW), torque (Nm), transmission, " +
        "drivetrain, acceleration and top speed using the official South African specification sheet."
    });
  });
});

// Make the database available to your website.
console.log("AutoVerse South African cars:", southAfricanCars.length);

// If using this file as a separate script in the browser:
window.southAfricanCars = southAfricanCars;
