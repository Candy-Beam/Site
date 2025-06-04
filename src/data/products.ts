export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  description: string;
  features: string[];
  photos: string[];
}

export type ProductCategory = 'Cake Toppers' | 'Cupcake Stands' | 'Custom Designs';

export const products: Record<string, Product> = {
  // Cake Toppers
  "birthday-number-toppers": {
    id: "birthday-number-toppers",
    name: "Birthday Number Toppers",
    category: "Cake Toppers",
    price: "$15",
    shortDescription: "Custom age numbers in various styles",
    description: "Make any birthday celebration extra special with our precision laser-cut number toppers. Available in multiple elegant fonts and finishes, these toppers are perfect for milestone birthdays, sweet sixteen parties, or any age celebration. Each topper is crafted from food-safe acrylic and can be customized with different colors and effects.",
    features: [
      "Food-safe acrylic material",
      "Multiple font options available", 
      "Ages 1-100+ supported",
      "Glitter and metallic finishes available",
      "Easy to clean and reuse"
    ],
    photos: [
      "/images/birthday-toppers-1.svg",
      "/images/birthday-toppers-2.svg",
      "/images/birthday-toppers-3.svg"
    ]
  },
  "wedding-cake-toppers": {
    id: "wedding-cake-toppers", 
    name: "Wedding Cake Toppers",
    category: "Cake Toppers",
    price: "$35",
    shortDescription: "Elegant Mr & Mrs designs",
    description: "Celebrate your special day with our beautifully crafted wedding cake toppers. From classic 'Mr & Mrs' designs to custom names and dates, each piece is laser-cut with precision and attention to detail. Our wedding toppers are made from premium materials and can be kept as a lasting memento of your big day.",
    features: [
      "Premium acrylic and wood options",
      "Custom names and dates",
      "Elegant script and modern fonts",
      "Mirror and brushed finishes",
      "Keepsake quality construction"
    ],
    photos: [
      "/images/wedding-toppers-1.svg",
      "/images/wedding-toppers-2.svg", 
      "/images/wedding-toppers-3.svg",
      "/images/wedding-toppers-4.svg"
    ]
  },
  "baby-shower-toppers": {
    id: "baby-shower-toppers",
    name: "Baby Shower Toppers", 
    category: "Cake Toppers",
    price: "$20",
    shortDescription: "Cute designs for your special day",
    description: "Welcome the little one with our adorable baby shower cake toppers. Featuring sweet designs like baby carriages, rattles, and custom names, these toppers add the perfect touch to any baby celebration. Available in pink, blue, or neutral colors to match any theme.",
    features: [
      "Adorable baby-themed designs",
      "Pink, blue, and neutral color options",
      "Custom baby names available",
      "Smooth, rounded edges for safety",
      "Lightweight and easy to position"
    ],
    photos: [
      "/images/baby-shower-toppers-1.svg",
      "/images/baby-shower-toppers-2.svg"
    ]
  },
  "holiday-themed-toppers": {
    id: "holiday-themed-toppers",
    name: "Holiday Themed Toppers",
    category: "Cake Toppers", 
    price: "$18",
    shortDescription: "Seasonal designs for all holidays",
    description: "Celebrate every season and holiday with our festive cake toppers. From Halloween pumpkins to Christmas trees, Valentine's hearts to Easter bunnies, we have designs for every occasion. Each topper captures the spirit of the holiday with intricate details and vibrant colors.",
    features: [
      "Designs for all major holidays",
      "Seasonal color schemes",
      "Intricate detail work",
      "Weather-resistant materials",
      "Mix and match compatible"
    ],
    photos: [
      "/images/holiday-toppers-1.svg",
      "/images/holiday-toppers-2.svg",
      "/images/holiday-toppers-3.svg",
      "/images/holiday-toppers-4.svg",
      "/images/holiday-toppers-5.svg"
    ]
  },

  // Cupcake Stands
  "3-tier-acrylic-stand": {
    id: "3-tier-acrylic-stand",
    name: "3-Tier Acrylic Stand",
    category: "Cupcake Stands",
    price: "$45", 
    shortDescription: "Holds up to 36 cupcakes",
    description: "Display your cupcakes in style with our elegant 3-tier acrylic stand. This crystal-clear stand showcases your treats beautifully while maximizing table space. Perfect for parties, events, or bakery displays. The sturdy construction ensures stability while the clear material won't compete with your beautiful creations.",
    features: [
      "Crystal clear acrylic construction",
      "Holds up to 36 standard cupcakes",
      "Easy assembly with included hardware",
      "Dishwasher safe (top rack)",
      "Stackable for storage"
    ],
    photos: [
      "/images/3-tier-stand-1.svg",
      "/images/3-tier-stand-2.svg"
    ]
  },
  "5-tier-tower-stand": {
    id: "5-tier-tower-stand", 
    name: "5-Tier Tower Stand",
    category: "Cupcake Stands",
    price: "$65",
    shortDescription: "Perfect for large parties",
    description: "Make a dramatic statement with our impressive 5-tier tower stand. Ideal for weddings, large parties, and special events, this stand can display up to 80 cupcakes in a stunning tower formation. The graduated tiers create a beautiful visual impact while ensuring easy access to treats on every level.",
    features: [
      "Impressive 5-tier tower design",
      "Holds up to 80 cupcakes",
      "Graduated tier sizing",
      "Premium acrylic construction", 
      "Professional presentation quality"
    ],
    photos: [
      "/images/5-tier-stand-1.svg",
      "/images/5-tier-stand-2.svg",
      "/images/5-tier-stand-3.svg"
    ]
  },
  "rotating-display-stand": {
    id: "rotating-display-stand",
    name: "Rotating Display Stand", 
    category: "Cupcake Stands",
    price: "$55",
    shortDescription: "360° rotating base",
    description: "Our innovative rotating display stand brings your cupcakes to life with smooth 360° rotation. Perfect for showcasing your creations from every angle, this stand features a quiet, smooth-turning base and multiple tiers. Great for retail displays, parties, or anywhere you want to add a touch of elegance and functionality.",
    features: [
      "Smooth 360° rotation mechanism",
      "Quiet operation",
      "Multi-tier display",
      "Heavy-duty base for stability",
      "Easy to load and access treats"
    ],
    photos: [
      "/images/rotating-stand-1.svg",
      "/images/rotating-stand-2.svg",
      "/images/rotating-stand-3.svg",
      "/images/rotating-stand-4.svg"
    ]
  },
  "collapsible-wood-stand": {
    id: "collapsible-wood-stand",
    name: "Collapsible Wood Stand",
    category: "Cupcake Stands", 
    price: "$40",
    shortDescription: "Easy storage design",
    description: "Combine rustic charm with practical functionality in our collapsible wood stand. Crafted from sustainably sourced wood with food-safe finishes, this stand offers the warmth of natural materials with the convenience of easy storage. Perfect for rustic weddings, farmhouse themes, or anyone who loves natural aesthetics.",
    features: [
      "Sustainably sourced wood",
      "Food-safe finish",
      "Easy assembly and breakdown",
      "Compact storage footprint",
      "Rustic and elegant design"
    ],
    photos: [
      "/images/wood-stand-1.svg",
      "/images/wood-stand-2.svg"
    ]
  },

  // Custom Designs
  "logo-engravings": {
    id: "logo-engravings",
    name: "Logo Engravings",
    category: "Custom Designs",
    price: "From $25",
    shortDescription: "Business logos on various materials", 
    description: "Bring your brand to life with our precision logo engraving services. We can reproduce your business logo on a variety of materials including wood, acrylic, and metal. Perfect for promotional items, corporate events, or adding a professional touch to your baked goods presentations.",
    features: [
      "Multiple material options",
      "High-precision laser engraving",
      "Vector file optimization",
      "Bulk quantity discounts",
      "Professional finish quality"
    ],
    photos: [
      "/images/logo-engravings-1.svg",
      "/images/logo-engravings-2.svg",
      "/images/logo-engravings-3.svg"
    ]
  },
  "name-plates": {
    id: "name-plates",
    name: "Name Plates", 
    category: "Custom Designs",
    price: "From $20",
    shortDescription: "Personalized name displays",
    description: "Create personalized displays with our custom name plates. Perfect for labeling treats at parties, creating place cards for events, or adding a personal touch to gift presentations. Available in multiple fonts, materials, and sizes to match any aesthetic or occasion.",
    features: [
      "Multiple font and size options",
      "Various material choices",
      "Event and party applications",
      "Quick turnaround time",
      "Bulk ordering available"
    ],
    photos: [
      "/images/name-plates-1.svg",
      "/images/name-plates-2.svg"
    ]
  },
  "cookie-stencils": {
    id: "cookie-stencils",
    name: "Cookie Stencils",
    category: "Custom Designs", 
    price: "From $15",
    shortDescription: "Food-safe stencils for decorating",
    description: "Take your cookie decorating to the next level with our precision-cut food-safe stencils. Create professional-looking designs with ease, whether you're dusting with powdered sugar, applying royal icing, or creating chocolate patterns. Each stencil is designed for durability and easy cleaning.",
    features: [
      "Food-safe material construction",
      "Easy to clean and sanitize",
      "Precise cut patterns",
      "Durable and reusable",
      "Custom design services available"
    ],
    photos: [
      "/images/cookie-stencils-1.svg",
      "/images/cookie-stencils-2.svg",
      "/images/cookie-stencils-3.svg"
    ]
  },
  "cake-decorating-tools": {
    id: "cake-decorating-tools",
    name: "Cake Decorating Tools",
    category: "Custom Designs",
    price: "From $30", 
    shortDescription: "Custom tools for professionals",
    description: "Enhance your cake decorating arsenal with our custom-designed tools. From texture rollers to fondant cutters, smoother tools to specialty scrapers, we create precision tools that help professional bakers and enthusiasts achieve perfect results every time.",
    features: [
      "Professional-grade construction",
      "Custom tool design service",
      "Ergonomic handle designs",
      "Food-safe materials only",
      "Professional baker approved"
    ],
    photos: [
      "/images/decorating-tools-1.svg",
      "/images/decorating-tools-2.svg",
      "/images/decorating-tools-3.svg",
      "/images/decorating-tools-4.svg"
    ]
  }
};

export function getProductById(id: string): Product | undefined {
  return products[id];
}

export function getAllProducts(): Product[] {
  return Object.values(products);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return Object.values(products).filter(product => product.category === category);
}