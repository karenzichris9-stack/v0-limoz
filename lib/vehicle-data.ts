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
    name: "LANDCRUISER 200 SERIES",
    class: "VVIP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-egc8KI38IiKSztE6aQiaGG6g6sgRhS.jpeg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-egc8KI38IiKSztE6aQiaGG6g6sgRhS.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_4.JPG-zJiR3PLeAfiPxJm4xPTLOpkT6hAb11.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_2.JPG-u8glNtvvJHAZk1Iz8PzmwfuL487cUX.jpeg",
      ],
      interior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_6.JPG-jBOiUqeilcvdJSKZK2MOwJALKiG0ul.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_7.JPG-g3QVPH1oZ0z3DiYNAtRRUX6OMXR3Fb.jpeg",
      ],
    },
    videos: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI_20251020_114443_765%E2%80%AFAM_video-ahCcoQDbjiOIaqY97KnMhhRnLPT8Sv.MP4"],
    price: {
      daily: 250,
      weekly: 1500,
      monthly: 5500,
    },
    specs: {
      seats: 5,
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
      "The Land Cruiser TXL 2023 represents the pinnacle of luxury SUV design. With its powerful diesel engine, advanced 4WD system, and spacious 5-seater configuration, this vehicle is perfect for both executive travel and adventurous safari expeditions across Rwanda's stunning landscapes.",
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-WrxsMDFksxi3P5qPvkrPk7pmDqVrIe.jpg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-WrxsMDFksxi3P5qPvkrPk7pmDqVrIe.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-DQSobRZzETOspR2StT429CxZbqv5fl.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-BtJSR3aH9vJoB62Lxfd2uw5yZJy3Pj.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-DkFPy8ImfgFYUVJprFW5UPrxu2edu9.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-dLqCnHmk4BNDIJrPOVjTIUqudqIDx9.jpg",
      ],
      interior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-vbkQLKhBRSttPa2fNCrxNkqCOyKDi2.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-J4zEpF5W1tZzS1uvyOuO7K61ZBnzqL.jpg",
      ],
    },
    price: {
      daily: 280,
      weekly: 1700,
      monthly: 6200,
    },
    specs: {
      seats: 5,
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
      "The latest Land Cruiser LC 300 V6 combines legendary off-road capability with cutting-edge luxury. Featuring a powerful V6 engine and the most advanced technology suite, this flagship SUV delivers unmatched comfort and performance for discerning travelers in its exclusive 5-seater configuration.",
    available: true,
  },
  {
    id: "mercedes-e-class",
    name: "Mercedes-Benz E-Class",
    class: "VVIP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-36G0tDy4DEWgLfAEmcizyNSBcMqqtX.jpeg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-36G0tDy4DEWgLfAEmcizyNSBcMqqtX.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_2.JPG-MRqcIM1VoYaWpVc6lSrYarxIKmemEs.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_13.JPG-LFjoIIeOA21zpCD4psyOaEEv9BeqTc.jpeg",
      ],
      interior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_8.JPG-rau0eAGds1TAKD7J9FRzHOP9jWWgWP.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_9.JPG-GdQUKgDPUkVUheG4djrzFpHmgANYth.jpeg",
      ],
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
    id: "byd-atto-3",
    name: "BYD Atto 3",
    class: "VIP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-RrbGvsNwRaf1If4M9dIausD5EngzFg.jpg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-RrbGvsNwRaf1If4M9dIausD5EngzFg.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-DiF6bOboOCVOVH6k3z8y6F84Djs0FU.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-5WTiZwgcOJQ4FBWXdOXBHiFZeZWD09.jpg",
      ],
      interior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-DINoOO1stVwLtdUYLSEjrfaVpHwshh.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-WRLVOIeLhG5KVgWR1CN5FmstpKU0jL.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-Y5dVfuEH2ZeboCaCAW9aaPg9NXZ2mf.jpg",
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
      "The BYD ATTO 3 is a premium electric SUV that combines innovative EV technology with sophisticated design. Featuring a spacious and comfortable interior, advanced driver assistance systems, panoramic sunroof, and rapid charging capabilities, the ATTO 3 offers an eco-conscious luxury experience perfect for environmentally aware travelers seeking modern comfort.",
    available: true,
  },
  {
    id: "byd-dolphin",
    name: "BYD Dolphin",
    class: "VIP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-WZKPPE161FNsLy0SHrcuxpY19ZEoLJ.jpeg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-WZKPPE161FNsLy0SHrcuxpY19ZEoLJ.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_3.JPG-JvlnX72bQ2jlvqYn1qGrp1n3l2aPMo.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_5.JPG-caUgRfdojrDWkbd6kDsy9e67JkZIgg.jpeg",
      ],
      interior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_10.JPG-ZCsSHtDfBCvqoywuc9U1XpqQpYJ7FF.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_7.JPG-cOszM4G75T55H2bCfXwKQVFXy466x4.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_9.JPG-kXIQdAQ7C9vIkjZC1NmWwp8Ti7y9Vz.jpeg",
      ],
    },
    price: {
      daily: 150,
      weekly: 900,
      monthly: 3200,
    },
    specs: {
      seats: 5,
      transmission: "Automatic",
      fuelType: "Electric",
      driveType: "FWD",
      luggage: "3 Bags",
      year: 2024,
    },
    features: [
      "Electric Vehicle",
      "Premium Interior Design",
      "Advanced Safety Systems",
      "Dual Climate Control",
      "Touchscreen Dashboard",
      "LED Lighting",
      "Regenerative Braking",
      "Fast Charging Capability",
      "Compact Luxury Design",
      "Modern Connectivity",
    ],
    description:
      "The BYD Dolphin is a stylish and efficient electric sedan that brings modern innovation to urban luxury travel. With its sleek design, premium interior, and eco-friendly electric powertrain, the Dolphin offers sophisticated comfort for discerning travelers seeking an elegant and sustainable transportation solution.",
    available: true,
  },
  {
    id: "land-cruiser-250-series",
    name: "Land Cruiser 250 Series",
    class: "VVIP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-Zi80ljBntElUSKTW4XNceq6YEPJuti.jpeg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_1.JPG-Zi80ljBntElUSKTW4XNceq6YEPJuti.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_8.JPG-aozKY0h9esC3ooI8OzT7hHnP5p3pel.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-AEfmdKuKtNjhohLFaqLA3qWLvJBr0m.jpeg",
      ],
      interior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_13.JPG-ZbnS8xtLcN1T4hoxTwrOVyc6dEXrZx.jpeg",
      ],
    },
    price: {
      daily: 300,
      weekly: 1800,
      monthly: 6500,
    },
    specs: {
      seats: 5,
      transmission: "Automatic",
      fuelType: "Petrol",
      driveType: "4WD",
      luggage: "8 Bags",
      year: 2024,
    },
    features: [
      "Dual Entertainment Screens",
      "Panoramic Sunroof",
      "Premium Leather Interior",
      "Tri-Zone Climate Control",
      "Advanced 4WD System",
      "Digital Instrument Cluster",
      "Touchscreen Infotainment",
      "Rear AC Controls",
      "LED Ambient Lighting",
      "Premium JBL Sound System",
    ],
    description:
      "The all-new Land Cruiser 250 Series represents the next generation of Toyota's legendary off-road SUV. Featuring a bold boxy design, premium leather interior with dual entertainment screens, panoramic sunroof, and advanced technology throughout, this 5-seater vehicle combines rugged capability with executive luxury for discerning travelers.",
    available: true,
  },
  {
    id: "toyota-rav4-2024",
    name: "Toyota RAV4 2024",
    class: "VVIP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_7.JPG-nZrGmqN07Kuhj9qDVHmgE4oowUjDvD.jpeg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_7.JPG-nZrGmqN07Kuhj9qDVHmgE4oowUjDvD.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_3.JPG-W6O3hIgtWfW2Hl5aTBvkQyABUyRuMh.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_2.JPG-Xu4iBIjAv6jQeteV5kdHirkxhcBMRB.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_5.JPG-l74YYmEJqQpWUO39WSyLnp2nZLoBa9.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_13.JPG-d7zJEVosZBt9yGeZvyAHIHLzIo97v0.jpeg",
      ],
      interior: [],
    },
    price: {
      daily: 180,
      weekly: 1100,
      monthly: 4000,
    },
    specs: {
      seats: 5,
      transmission: "Automatic",
      fuelType: "Petrol",
      driveType: "AWD",
      luggage: "5 Bags",
      year: 2024,
    },
    features: [
      "Dual Climate Control",
      "Toyota Safety Sense",
      "Premium Audio System",
      "Leather Seats",
      "Roof Rails",
      "LED Headlights",
      "Reverse Camera",
      "Parking Sensors",
      "Apple CarPlay & Android Auto",
      "Wireless Charging",
    ],
    description:
      "The Toyota RAV4 2024 combines modern styling with legendary Toyota reliability. With its spacious interior, advanced safety features, and capable AWD system, this compact SUV is perfect for both city driving and weekend adventures across Rwanda.",
    available: true,
  },
  {
    id: "executive-van",
    name: "Executive Van",
    class: "VIP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-Ni0AiKCM6DsxBU8Yp0QDxbVOSEEWcv.jpeg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-Ni0AiKCM6DsxBU8Yp0QDxbVOSEEWcv.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_4.JPG-WKjDEQqEmRpXXsqXVqefdzywTFqXD8.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_3.JPG-qJmL8La5RmwckTIi1hakghtdw7uBCo.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_2.JPG-l3uyK6iL3zvNJHZPe1DAgjHU5C8os5.jpeg",
      ],
      interior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_8.JPG-ktn9mEVJLZVP6nOURhIAHUpTP9yQ6g.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_11.JPG-UnidE58AxrX3UbbjCGrhdcbZbxRSNE.jpeg",
      ],
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
  {
    id: "coaster-bus",
    name: "Coaster Bus",
    class: "Standard" as const,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.JPG-7CQAadPk36u5ZkCBP7V5TTthzmc1ce.jpeg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.JPG-7CQAadPk36u5ZkCBP7V5TTthzmc1ce.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-bO1G6QkzG3Bd2EMMvR5wH3iwJHfqxR.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-Lsu8ht7ulNPKOXcc3qVuiWh4GWclOh.jpeg",
      ],
      interior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.JPG-1GVx5v9a8jJnruLFxAwXXVXe7FtN7K.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.JPG-VUjWlOCCrxkhh1GVYwnvRxvbRne0VU.jpeg",
      ],
    },
    price: {
      daily: 250,
      weekly: 1500,
      monthly: 5000,
    },
    specs: {
      seats: 32,
      transmission: "Manual",
      fuelType: "Diesel",
      driveType: "RWD",
      luggage: "12 Bags",
      year: 2022,
    },
    features: [
      "Large Capacity Seating",
      "Air Conditioning",
      "Comfortable Seats",
      "Large Windows",
      "Spacious Interior",
      "Professional Driver",
      "Route Flexibility",
      "Group Travel",
    ],
    description:
      "The Coaster Bus is perfect for large group transportation with comfortable seating for up to 32 passengers. Ideal for corporate events, church groups, family outings, and group tours across Rwanda.",
    available: true,
  },
  {
    id: "tunland-foton",
    name: "Tunland Foton",
    class: "Utility" as const,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICONNECTSOLUTIONS_132.JPG-VueGBiFJ0vw1jeVjHyPUP8x9hZFUPd.jpeg",
    images: {
      exterior: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICONNECTSOLUTIONS_132.JPG-VueGBiFJ0vw1jeVjHyPUP8x9hZFUPd.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICONNECTSOLUTIONS_130.JPG-lIarXgHDWtQfuuueskGw5LvLVcl5kA.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICONNECTSOLUTIONS_129.JPG-6giSvDHWayrYu6MXXf2MJMqpOZgraL.jpeg",
      ],
      interior: [],
    },
    price: {
      daily: 120,
      weekly: 700,
      monthly: 2500,
    },
    specs: {
      seats: 5,
      transmission: "Manual",
      fuelType: "Diesel",
      driveType: "RWD",
      luggage: "3 Bags",
      year: 2022,
    },
    features: [
      "Air Conditioning",
      "Double Cab Pickup",
      "Reliable Engine",
      "Good Fuel Economy",
      "Spacious Cargo Area",
      "Durable Construction",
      "Easy Maintenance",
    ],
    description:
      "The Tunland Foton is a reliable and affordable double-cab pickup truck perfect for local transport, small businesses, and short-distance travel. Its durability and low operating costs make it an excellent choice for budget-conscious travelers.",
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

// Coaster Bus vehicle data
export const coasterBus = {
  id: "coaster-bus",
  name: "Coaster Bus",
  class: "Standard" as const,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.JPG-7CQAadPk36u5ZkCBP7V5TTthzmc1ce.jpeg",
  images: {
    exterior: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.JPG-7CQAadPk36u5ZkCBP7V5TTthzmc1ce.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-bO1G6QkzG3Bd2EMMvR5wH3iwJHfqxR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-Lsu8ht7ulNPKOXcc3qVuiWh4GWclOh.jpeg",
    ],
    interior: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.JPG-1GVx5v9a8jJnruLFxAwXXVXe7FtN7K.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.JPG-VUjWlOCCrxkhh1GVYwnvRxvbRne0VU.jpeg",
    ],
  },
  price: {
    daily: 250,
    weekly: 1500,
    monthly: 5000,
  },
  specs: {
    seats: 33,
    transmission: "Manual",
    fuelType: "Diesel",
    driveType: "RWD",
    luggage: "12 Bags",
    year: 2022,
  },
  features: [
    "Large Capacity Seating",
    "Air Conditioning",
    "Comfortable Seats",
    "Large Windows",
    "Spacious Interior",
    "Professional Driver",
    "Route Flexibility",
    "Group Travel",
  ],
  description:
    "The Coaster Bus is perfect for large group transportation with comfortable seating for up to 33 passengers. Ideal for corporate events, church groups, family outings, and group tours across Rwanda.",
  available: true,
}
