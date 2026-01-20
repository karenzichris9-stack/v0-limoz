export interface Vehicle {
  id: string
  name: string
  class: "VVIP" | "VIP" | "Intermediate" | "Standard" | "Safari"
  image: string
  images: {
    exterior: string[]
    interior: string[]
  }
  videos?: string[]
  price: {
    daily: number
    weekly: number
    monthly: number
  }
  specs: {
    seats: number
    transmission: string
    fuelType: string
    driveType: string
    luggage: string
    year: number
  }
  features: string[]
  description: string
  available: boolean
  expectedArrival?: string
}

export const vehicles: Vehicle[] = [
  // VVIP Class
  {
    id: "land-cruiser-txl-2023",
    name: "LANDCRUISER 200 SERIES", // Updated name to "LANDCRUISER 200 SERIES"
    class: "VVIP",
    image: "/land-cruiser-txl-exterior-1.jpg",
    images: {
      exterior: ["/land-cruiser-txl-exterior-1.jpg", "/land-cruiser-txl-exterior-2.jpg"],
      interior: [],
    },
    videos: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20251020_114443_765%E2%80%AFAM_video-ahCcoQDbjiOIaqY97KnMhhRnLPT8Sv.MP4"],
    price: {
      daily: 250,
      weekly: 1500,
      monthly: 5500,
    },
    specs: {
      seats: 7,
      transmission: "Automatic",
      fuelType: "Diesel",
      driveType: "4WD",
      luggage: "8 Bags",
      year: 2023,
    },
    features: [
      "Dual Climate Control",
      "GPS Navigation",
      "Bluetooth Connectivity",
      "Premium Leather Seats",
      "4WD System",
      "Cruise Control",
      "Parking Sensors",
      "Reverse Camera",
      "Sunroof",
      "Premium Sound System",
    ],
    description:
      "The Land Cruiser TXL 2023 represents the pinnacle of luxury SUV design. With its powerful diesel engine, advanced 4WD system, and spacious 7-seater configuration, this vehicle is perfect for both executive travel and adventurous safari expeditions across Rwanda's stunning landscapes.",
    available: true,
  },
  {
    id: "land-cruiser-gx-2023",
    name: "Land Cruiser GX 2023",
    class: "VVIP",
    image: "/prado-gx-dark.jpg",
    images: {
      exterior: ["/prado-gx-dark.jpg"],
      interior: [],
    },
    price: {
      daily: 240,
      weekly: 1450,
      monthly: 5300,
    },
    specs: {
      seats: 7,
      transmission: "Automatic",
      fuelType: "Diesel",
      driveType: "4WD",
      luggage: "8 Bags",
      year: 2023,
    },
    features: [
      "Dual Climate Control",
      "GPS Navigation",
      "Bluetooth Connectivity",
      "Leather Seats",
      "4WD System",
      "Cruise Control",
      "Parking Sensors",
      "Reverse Camera",
      "Premium Sound System",
    ],
    description:
      "The Land Cruiser GX 2023 offers exceptional value without compromising on capability. With its robust 4WD system, spacious interior, and reliable diesel engine, this SUV is ideal for both business and leisure travel in Rwanda.",
    available: true,
  },
  {
    id: "land-cruiser-lc300-v6",
    name: "Land Cruiser LC 300 V6",
    class: "VVIP",
    image: "/land-cruiser-lc300-v6.jpg",
    images: {
      exterior: ["/land-cruiser-lc300-v6.jpg", "/lc300-exterior-side.jpg", "/lc300-exterior-front.jpg"],
      interior: ["/lc300-interior-dashboard.jpg", "/lc300-interior-seats.jpg", "/lc300-interior-tech.jpg"],
    },
    price: {
      daily: 280,
      weekly: 1700,
      monthly: 6200,
    },
    specs: {
      seats: 7,
      transmission: "Automatic",
      fuelType: "Petrol",
      driveType: "4WD",
      luggage: "8 Bags",
      year: 2024,
    },
    features: [
      "Tri-Zone Climate Control",
      "Advanced GPS Navigation",
      "Premium Bluetooth Audio",
      "Heated & Ventilated Seats",
      "Adaptive Cruise Control",
      "360° Camera System",
      "Panoramic Sunroof",
      "Premium JBL Sound",
      "Wireless Charging",
      "LED Ambient Lighting",
    ],
    description:
      "The latest Land Cruiser LC 300 V6 combines legendary off-road capability with cutting-edge luxury. Featuring a powerful V6 engine and the most advanced technology suite, this flagship SUV delivers unmatched comfort and performance for discerning travelers.",
    available: true,
  },
  {
    id: "mercedes-e-class",
    name: "Mercedes-Benz E-Class",
    class: "VVIP",
    image: "/mercedes-e-class-black.jpg",
    images: {
      exterior: [
        "/mercedes-e-class-black.jpg",
        "/mercedes-e-exterior-front-angle.jpg",
        "/mercedes-e-exterior-side-view.jpg",
        "/mercedes-e-exterior-front-quarter.jpg",
        "/mercedes-e-exterior-front-full.jpg",
      ],
      interior: ["/mercedes-e-interior-rear-cabin.jpg", "/mercedes-e-interior-dashboard.jpg"],
    },
    price: {
      daily: 220,
      weekly: 1350,
      monthly: 4800,
    },
    specs: {
      seats: 5,
      transmission: "Automatic",
      fuelType: "Petrol",
      driveType: "RWD",
      luggage: "4 Bags",
      year: 2023,
    },
    features: [
      "Auto Climate Control",
      "COMAND Navigation",
      "Burmester Sound System",
      "Premium Leather Interior",
      "Heated Front Seats",
      "Sunroof",
      "Ambient Lighting",
      "Parking Assist",
      "Blind Spot Assist",
      "Apple CarPlay & Android Auto",
    ],
    description:
      "The Mercedes-Benz E-Class epitomizes executive elegance. With its refined design, luxurious interior, and advanced safety features, this sedan provides the perfect blend of comfort and sophistication for business travel and special occasions.",
    available: true,
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    class: "VVIP",
    image: "/mercedes-s-class.jpg",
    images: {
      exterior: ["/mercedes-s-class.jpg", "/s-class-exterior-side.jpg", "/s-class-exterior-front.jpg"],
      interior: ["/s-class-interior-dashboard.jpg", "/s-class-interior-rear.jpg", "/s-class-interior-tech.jpg"],
    },
    price: {
      daily: 350,
      weekly: 2100,
      monthly: 7500,
    },
    specs: {
      seats: 5,
      transmission: "Automatic",
      fuelType: "Petrol",
      driveType: "AWD",
      luggage: "4 Bags",
      year: 2024,
    },
    features: [
      "4-Zone Climate Control",
      "MBUX Infotainment",
      "Burmester 4D Sound",
      "Executive Rear Seats",
      "Massage Function",
      "Panoramic Sunroof",
      "64-Color Ambient Lighting",
      "Active Parking Assist",
      "Night Vision",
      "Head-Up Display",
    ],
    description:
      "The Mercedes-Benz S-Class represents the ultimate in automotive luxury. With its executive rear seating, cutting-edge technology, and whisper-quiet cabin, this flagship sedan is the preferred choice for VIP transportation and high-profile events.",
    available: true,
  },
  {
    id: "toyota-hilux",
    name: "Toyota Hilux 2012",
    class: "Safari",
    image: "/toyota-hilux-2012.jpg",
    images: {
      exterior: ["/toyota-hilux-2012.jpg"],
      interior: [],
    },
    price: {
      daily: 150,
      weekly: 900,
      monthly: 3000,
    },
    specs: {
      seats: 5,
      transmission: "Automatic",
      fuelType: "Diesel",
      driveType: "4WD",
      luggage: "8 Bags",
      year: 2012,
    },
    features: [
      "4WD System",
      "Air Conditioning",
      "Bluetooth Audio",
      "Tough Suspension",
      "High Ground Clearance",
      "Tow Bar",
    ],
    description:
      "The Toyota Hilux 2012 is a robust and reliable pickup truck, perfect for safari adventures and navigating rugged terrain. With its powerful engine and 4WD capability, it ensures you reach your destination with ease.",
    available: true,
  },
  {
    id: "byd-atto-3",
    name: "BYD Atto 3",
    class: "VVIP",
    image: "/byd-atto-3.jpg",
    images: {
      exterior: ["/byd-atto-3.jpg"],
      interior: [
        "/byd-atto3-interior-front.jpg",
        "/byd-atto3-interior-sunroof.jpg",
        "/byd-atto3-interior-driver.jpg",
        "/byd-atto3-interior-rear.jpg",
      ],
    },
    price: {
      daily: 200,
      weekly: 1200,
      monthly: 4200,
    },
    specs: {
      seats: 5,
      transmission: "Automatic",
      fuelType: "Electric",
      driveType: "FWD",
      luggage: "4 Bags",
      year: 2024,
    },
    features: [
      "Electric Vehicle",
      "Panoramic Sunroof",
      "Premium Interior",
      "Advanced Safety Systems",
      "Dual Climate Control",
      "Touchscreen Infotainment",
      "Wireless Charging",
      "Ambient Lighting",
      "Regenerative Braking",
      "Fast Charging",
    ],
    description:
      "The BYD ATTO 3 represents the future of electric mobility with its stunning design and advanced technology. Featuring a spacious interior with premium materials, panoramic sunroof, and cutting-edge EV performance, this electric SUV delivers a luxurious and eco-friendly driving experience perfect for modern travelers.",
    available: true,
  },
  {
    id: "executive-van",
    name: "Executive Van",
    class: "VIP",
    image: "/executive-van-exterior-side.jpg",
    images: {
      exterior: [
        "/executive-van-exterior-side.jpg",
        "/executive-van-exterior-front.jpg",
        "/executive-van-exterior-driver-side.jpg",
        "/executive-van-exterior-rear.jpg",
      ],
      interior: ["/executive-van-interior-cabin.jpg", "/executive-van-interior-dashboard.jpg"],
    },
    price: {
      daily: 180,
      weekly: 1100,
      monthly: 3800,
    },
    specs: {
      seats: 14,
      transmission: "Automatic",
      fuelType: "Diesel",
      driveType: "RWD",
      luggage: "10 Bags",
      year: 2023,
    },
    features: [
      "Air Conditioning",
      "Comfortable Seating",
      "USB Charging Ports",
      "Bluetooth Audio",
      "Spacious Interior",
      "Large Windows",
      "Sliding Door",
    ],
    description:
      "The Executive Van is perfect for group travel, offering comfortable seating for up to 14 passengers with ample luggage space. Ideal for airport transfers, corporate shuttles, and group tours across Rwanda.",
    available: true,
  },
]

export const incomingVehicles = [
  {
    id: "upcoming-2",
    name: "Range Rover Autobiography",
    class: "VVIP",
    image: "/range-rover-autobiography.jpg",
    expectedArrival: "May 2024",
    description: "Ultimate luxury SUV combining British elegance with unmatched off-road capability.",
    features: ["Air Suspension", "Meridian Sound", "Executive Class Seating", "Terrain Response 2"],
  },
  {
    id: "upcoming-3",
    name: "Tesla Model X Plaid",
    class: "VIP",
    image: "/tesla-model-x.jpg",
    expectedArrival: "June 2024",
    description: "All-electric luxury SUV with falcon-wing doors and incredible performance.",
    features: ["1020 HP", "Falcon Wing Doors", "Autopilot", "17-inch Touchscreen"],
  },
]

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id) || incomingVehicles.find((v) => v.id === id)
}

export function getVehiclesByClass(vehicleClass: Vehicle["class"]): Vehicle[] {
  return vehicles
    .filter((v) => v.class === vehicleClass)
    .concat(incomingVehicles.filter((v) => v.class === vehicleClass))
}
