const products = [
    {
        id: "bap-01",
        titulo: "Ball Pits 01",
        imagen: "images/product/1.png",
        medidas: "40*100",
        numero: "01",
        categoria: {
            nombre: "Ball Pits",
            id: "cat--1",
            tamaño: ["l", "m", "xl"],
            color: ["black", "red", "yellow"]
        },
        precio: 1000
    },
    {
        id: "sop-02",
        titulo: "Soft Play 01",
        imagen: "images/product/2.png",
        medidas: "40*100",
        numero: "02",
        categoria: {
            nombre: "Soft Play",
            id: "cat--2",
            tamaño: ["l", "xl", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "wdg-03",
        titulo: "Weddings 01",
        imagen: "images/product/3.png",
        medidas: "40*100",
        numero: "03",
        categoria: {
            nombre: "Weddings",
            id: "cat--3",
            tamaño: ["l", "x", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "dm-04",
        titulo: "Domes 01",
        imagen: "images/product/4.png",
        numero: "04",
        medidas: "40*100",
        categoria: {
            nombre: "Domes",
            id: "cat--4",
            tamaño: ["l", "x", "s"],
            color: ["yellow", "black", "blue"]
        },
        precio: 1000
    },
    {
        id: "ifb-05",
        titulo: "CasaBlanca",
        imagen: "images/product/5.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "05",
        information: "Meet the CasaBlanca Bounce House – an elegant, house-shaped inflatable that adds sophistication to any event. Ideal for kids' birthdays, teenage parties, first communions, and weddings, this modern design ensures hours of bouncing fun!",
        medidas: "13 X 13 X 13.5 ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "550 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "white",
        },
        precio: 575,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "cart-06",
        titulo: "Cart 01",
        imagen: "images/product/6.png",
        medidas: "40*100",
        numero: "06",
        categoria: {
            nombre: "Cart",
            id: "cat--6",
            tamaño: ["l", "s", "m"],
            color: ["black", "red", "blue"]
        },
        precio: 1000
    },
    {
        id: "bap-01",
        titulo: "Abrigo 02",
        imagen: "images/product/7.png",
        medidas: "40*100",
        numero: "07",
        categoria: {
            nombre: "Abrigos",
            id: "cat--1",
            tamaño: ["l", "m", "xl"],
            color: ["black", "red", "yellow"]
        },
        precio: 1000
    },
    {
        id: "sop-02",
        titulo: "Abrigo 03",
        imagen: "images/product/8.png",
        medidas: "40*100",
        numero: "08",
        categoria: {
            nombre: "Abrigos",
            id: "cat--2",
            tamaño: ["l", "xl", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "wdg-03",
        titulo: "Abrigo 04",
        imagen: "images/product/9.png",
        medidas: "40*100",
        numero: "09",
        categoria: {
            nombre: "Abrigos",
            id: "cat--3",
            tamaño: ["l", "x", "s"],
            color: ["yellow", "black", "blue"]
        },
        precio: 1000
    },
    {
        id: "dm-04",
        titulo: "Abrigo 05",
        imagen: "images/product/10.png",
        medidas: "40*100",
        numero: "10",
        categoria: {
            nombre: "Abrigos",
            id: "cat--4",
            tamaño: ["l", "xl", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "ifb-05",
        titulo: "White Castle",
        imagen: "images/product/11.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "11",
        information: "The White Castle is a classic and chic addition to any event! Versatile enough for every theme, this castle is shaded for Miami's hot days. It features hidden balloon hooks for effortless balloon installations.",
        medidas: "13 X 13 X 10.2 ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "550 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "white",
        },
        precio: 575,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "cart-06",
        titulo: "Camiseta 02",
        imagen: "images/product/12.png",
        medidas: "40*100",
        numero: "12",
        categoria: {
            nombre: "Camisetas",
            id: "cat--6",
            tamaño: ["l", "x", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "bap-01",
        titulo: "Camiseta 03",
        imagen: "images/product/13.png",
        medidas: "40*100",
        numero: "13",
        categoria: {
            nombre: "Camisetas",
            id: "cat--1",
            tamaño: ["l", "xl", "s", "m"],
            color: ["yellow", "red", "orange"]
        },
        precio: 1000
    },
    {
        id: "sop-02",
        titulo: "Camiseta 04",
        imagen: "images/product/14.png",
        medidas: "40*100",
        numero: "14",
        categoria: {
            nombre: "Camisetas",
            id: "cat--2",
            tamaño: ["l", "x", "s"],
            color: ["yellow", "black", "blue"]
        },
        precio: 1000
    },
    {
        id: "wdg-03",
        titulo: "Camiseta 05",
        imagen: "images/product/15.png",
        medidas: "40*100",
        numero: "15",
        categoria: {
            nombre: "Camisetas",
            id: "cat--3",
            tamaño: ["l", "x", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "dm-04",
        titulo: "Camiseta 06",
        imagen: "images/product/16.png",
        medidas: "40*100",
        numero: "16",
        categoria: {
            nombre: "Camisetas",
            id: "cat--4",
            tamaño: ["l", "xl", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "ifb-05",
        titulo: "The Summit Slide",
        imagen: "images/product/44.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "17",
        information: "A bounce house with a slide, ideal for children to enjoy endlessly throughout your event.<br><br>They can't ever get enough of this fun! It is the perfect size for most Miami backyards, and the flat top helps fit in many indoor areas. A trendy item this year!<br><br>",
        medidas: "13 X 13 X 10 ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "550 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "white",
        },
        precio: 675,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "cart-06",
        titulo: "Camiseta 08",
        imagen: "images/product/18.png",
        medidas: "40*100",
        numero: "18",
        categoria: {
            nombre: "Camisetas",
            id: "cat--6",
            tamaño: ["l", "s", "m"],
            color: ["black", "red", "blue"]
        },
        precio: 1000
    },
    {
        id: "bap-01",
        titulo: "Pantalón 01",
        imagen: "images/product/19.png",
        medidas: "40*100",
        numero: "19",
        categoria: {
            nombre: "Pantalones",
            id: "cat--1",
            tamaño: ["l", "xl", "s", "m"],
            color: ["yellow", "red", "orange"]
        },
        precio: 1000
    },
    {
        id: "sop-02",
        titulo: "Pantalón 02",
        imagen: "images/product/20.png",
        medidas: "40*100",
        numero: "20",
        categoria: {
            nombre: "Pantalones",
            id: "cat--2",
            tamaño: ["l", "x", "s"],
            color: ["yellow", "black", "blue"]
        },
        precio: 1000
    },
    {
        id: "wdg-03",
        titulo: "Pantalón 03",
        imagen: "images/product/21.png",
        medidas: "40*100",
        numero: "21",
        categoria: {
            nombre: "Pantalones",
            id: "cat--3",
            tamaño: ["l", "x", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "dm-04",
        titulo: "Pantalón 04",
        imagen: "images/product/22.png",
        medidas: "40*100",
        numero: "22",
        categoria: {
            nombre: "Pantalones",
            id: "cat--4",
            tamaño: ["l", "x", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "ifb-05",
        titulo: "Toddler Castle",
        imagen: "images/product/45.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "23",
        information: "The White Toddler Bounce House is perfect for little ones, fitting well in small spaces yet ensuring big fun! Whether rented solo or paired with our other play areas, it's a popular choice, allowing for a dedicated space for toddlers alongside larger options for older kids.",
        medidas: "8 X 8 X 8 ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "175 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "white",
        },
        precio: 450,
        AddOn: 250,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "cart-06",
        titulo: "Pantalón 05",
        imagen: "images/product/24.png",
        medidas: "40*100",
        numero: "24",
        categoria: {
            nombre: "Pantalones",
            id: "cat--6",
            tamaño: ["l", "m", "xl"],
            color: ["black", "red", "yellow"]
        },
        precio: 1000
    },
    {
        id: "bap-01",
        titulo: "Pantalón 05",
        imagen: "images/product/25.png",
        medidas: "40*100",
        numero: "25",
        categoria: {
            nombre: "Pantalones",
            id: "cat--1",
            tamaño: ["l", "s", "m"],
            color: ["black", "red", "blue"]
        },
        precio: 1000
    },
    {
        id: "sop-02",
        titulo: "Pantalón 05",
        imagen: "images/product/26.png",
        medidas: "40*100",
        numero: "26",
        categoria: {
            nombre: "Pantalones",
            id: "cat--2",
            tamaño: ["l", "xl", "s", "m"],
            color: ["yellow", "red", "orange"]
        },
        precio: 1000
    },
    {
        id: "wdg-03",
        titulo: "Pantalón 05",
        imagen: "images/product/27.png",
        medidas: "40*100",
        numero: "27",
        categoria: {
            nombre: "Pantalones",
            id: "cat--3",
            tamaño: ["l", "x", "s"],
            color: ["yellow", "black", "blue"]
        },
        precio: 1000
    },
    {
        id: "dm-04",
        titulo: "Pantalón 05",
        imagen: "images/product/28.png",
        medidas: "40*100",
        numero: "28",
        categoria: {
            nombre: "Pantalones",
            id: "cat--4",
            tamaño: ["l", "x", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "ifb-05",
        titulo: "Dune Bounce House",
        imagen: "images/product/46.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "29",
        information: "Our versatile beige bounce house is an ideal choice for neutral events, including safari-themed birthdays, gender-neutral celebrations, boho-inspired baby showers, and any muted tones themes. Its subtle hue effortlessly complements various color palettes, adding a touch of elegance to your chosen theme.",
        medidas: "13 X 13 X 10 ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "550 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "beige",
        },
        precio: 575,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "cart-06",
        titulo: "Pantalón 05",
        imagen: "images/product/30.png",
        medidas: "40*100",
        numero: "30",
        categoria: {
            nombre: "Pantalones",
            id: "cat--6",
            tamaño: ["l", "s", "m"],
            color: ["black", "red", "blue"]
        },
        precio: 1000
    },
    {
        id: "bap-01",
        titulo: "Ball Pits 01",
        imagen: "images/product/31.png",
        medidas: "40*100",
        numero: "31",
        categoria: {
            nombre: "Ball Pits",
            id: "cat--1",
            tamaño: ["l", "m", "xl"],
            color: ["black", "red", "yellow"]
        },
        precio: 1000
    },
    {
        id: "sop-02",
        titulo: "Soft Play 01",
        imagen: "images/product/32.png",
        medidas: "40*100",
        numero: "32",
        categoria: {
            nombre: "Soft Play",
            id: "cat--2",
            tamaño: ["l", "xl", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "wdg-03",
        titulo: "Weddings 01",
        imagen: "images/product/33.png",
        medidas: "40*100",
        numero: "33",
        categoria: {
            nombre: "Weddings",
            id: "cat--3",
            tamaño: ["l", "x", "s"],
            color: ["black", "orange", "blue"]
        },
        precio: 1000
    },
    {
        id: "dm-04",
        titulo: "Domes 01",
        imagen: "images/product/34.png",
        medidas: "40*100",
        numero: "34",
        categoria: {
            nombre: "Domes",
            id: "cat--4",
            tamaño: ["l", "x", "s"],
            color: ["yellow", "black", "blue"]
        },
        precio: 1000
    },
    {
        id: "ifb-05",
        titulo: "Frost Bounce House",
        imagen: "images/product/47.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "35",
        information: "This subtle pastel blue bounce house is gender-neutral, making it a versatile choice for a wide array of themes. From Frozen and Bluey to Surfer, First Communions, Baby Showers, Hot Air Balloon, Hanukkah, and any pastel or muted-color celebrations",
        medidas: "13 X 14 X 11ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "600 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "light_blue",
        },
        precio: 625,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "cart-06",
        titulo: "Cart 01",
        imagen: "images/product/36.png",
        medidas: "40*100",
        numero: "36",
        categoria: {
            nombre: "Cart",
            id: "cat--6",
            tamaño: ["l", "s", "m"],
            color: ["black", "red", "blue"]
        },
        precio: 1000
    },
    {
        id: "ifb-05",
        titulo: "Blush Bounce House",
        imagen: "images/product/48.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "37",
        information: "This Pastel Pink Bounce House is a princess' dream! Its sophisticated peaks add a touch of grace. Embracing a minimalist charm with a coquette flair, it's perfect for themes like Princess, Unicorn, Vintage, Love Shack Fancy, Barbie, Fairies, and anything pink!",
        medidas: "13 X 14 X 12ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "600 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "light_pink",
        },
        precio: 625,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "ifb-05",
        titulo: "Midnight Bounce House",
        imagen: "images/product/49.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "38",
        information: "The black bounce house brings the wow factor to any event. This dark bounce sets the tone for a stylish and exciting atmosphere. For an extra touch of fun, pair it up with our black Bliss Ball Pit. Popular themes for this bouncer are Race Cars, Wednesday Addams, Halloween, Minecraft, Star Wars, Weddings and teen/adult birthdays.",
        medidas: "13 X 13 X 13.5 ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "600 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "black",
        },
        precio: 625,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "ifb-05",
        titulo: "Ruby Bounce House",
        imagen: "images/product/50.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "39",
        information: "This vibrant red bounce house is perfect for “primary color theme”  where you still don’t want to compromise the aesthetics. With versatile options like Super Mario, Strawberry Shortcake, Superheroes, Hello Kitty, Minnie Mouse, Mickey Mouse, Carnival, Pirate, Sailor, Firefighter, Spiderman, and more, this bounce house seamlessly fits into a variety of themes. A popular choice for festive celebrations, it becomes a must-have every Christmas and Valentine's Day!",
        medidas: "13 X 13 X 9 ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "550 Lbs",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "red",
        },
        precio: 575,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "50 ft. Extension Cord",
                top3: "Stakes or Sandbags",
                top4: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
    {
        id: "ifb-05",
        titulo: "Bubble Bliss",
        imagen: "images/product/51.png",
        imagenMediana: "",
        imagenGrande: "",
        numero: "40",
        information: "The Bubble Dome is guaranteed to be the highlight of your event! Loved by both children and adults, it serves as the perfect photo opportunity. It not only adds a festive touch to your celebration but also becomes the focal point the moment guests arrive. We customize the balloons to match your theme and include a basic outside garland to ensure that the sandbags, used for safety, are seamlessly covered.",
        medidas: "16 X 10 X 9.5 ft",
        infoAdicional1: "Requires an additional 5 x 2 ft of space <br> around the back for the blower and air tunnel",
        capacidad: "4-5 People at a time (Attendant will assist)<br><br>The more people in it, the less the balloons will circulate",
        cantidad: "N/A",
        categoria: {
            nombre: "Inflatables",
            id: "cat--5",
            color: "customizable",
        },
        precio: 975,
        AddOn: 875,
        infoAdicional2: "+ tax and delivery",
        taps: {
            taps1: {
                titulo: "Includes:",
                top1: "Up to 4 hours of fun!",
                top2: "On-Site Attendant",
                top3: "Inside Balloons to match your event’s palettes",
                top4: "(Premium Garlands available for $190)",
                top5: "50 ft. Extension Cord",
                top6: "Sandbags",
                top7: "Blower",

                titulo2: "Add-Ons:",
                pto1: "-    Custom Branding: Starting at $125",
                pto2: "-	Generator (4 Hours): $100",
                pto3: "-	Additional Hour: $100",
                pto4: "-	Mega Blocks Area / Jumbo Legos: $250",
                pto5: "-	Toddler Bounce House: $250",
            },
            taps2: {
                titulo: "Requirements:",
                top1: "Setup Area: We can set up on turf, grass, carpet, concrete and asphalt. We will not set up on dirt, rocks, gravel, sand or mulched areas. Setup will not be conducted on sloping terrain, or rooftop. Area must be cleared, clean and dry prior to our staff arriving",
                top2: "Power: Our Inflatables are inflated using a fully enclosed electric blower unit that is powered by a standard 110 volt, 15 AMP, three-prong electrical outlet. Each blower will need to be on a separate circuit and cannot be shared with any other units or vendors.",
                top3: "Access: Clear and unobstructed access is crucial for a smooth setup process. Ensure that there is a direct path from where our truck parks to the designated setup area. If stairs or an elevator are required to reach the setup location, please notify us in advance to make necessary arrangements",
                top4: "Gated Communities, Buildings and Venues: Many locations restrict commercial trucks during weekends or have limited hours. Confirm that our 17ft Box Truck can enter the premises. We cannot be held responsible if access is denied and unable to set up. In the event we cannot enter the premises for pickup, an additional day's charge will be incurred for each day the equipment remains until retrieval, along with a $250 inconvenience fee.",
            },
            taps3: {
                titulo: "Safety Rules:",
                top1: "We are insured and SIOTO Certified",

                titulo2: "Safety Rules:",
                pto1: "An adult must supervise at all times.",
                pto2: "No shoes, eyeglasses, jewelry, or sharp objects allowed on the unit.",
                pto3: "No food or drinks allowed.",
                pto4: "Keep pets away.",
                pto5: "Avoid the inflatable if pregnant or with medical conditions.",
                pto6: "No use during winds over 15 mph, thunderstorms, or lightning.",
                pto7: "No wrestling, tumbling, flipping, climbing, or pulling.",
                pto8: "Keep kids away from the back and blower.",
                pto9: "Enter only if an attendant is on duty.",
                pto10: "No rough play, tumbling, climbing, or piling on.",
                pto11: "Match adults with adults and children with children.",
                pto12: "If using slides, sit with feet in front; no headfirst sliding; one rider at a time.",
                pto13: "Don't move the inflatable from the original location.",
            },

        }
    },
];

const contentProducts = document.querySelector(".product__list");
const productInfo = document.querySelector(".modal-content");
const body = document.querySelector("body")
const modal = document.querySelector("#productModal")
let productModalbtnClose = document.querySelector("#closeBtn");

function loadProducts() {

    // contentProducts.innerHTML = "";

    products.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("col-md-4", "single__pro", "col-lg-3", "col-sm-12", `${product.categoria.id}`)
        div.innerHTML =
            `
        <div class="product foo">
            <div class="product__inner">
                <div class="pro__thumb">
                    <a href="#">
                        <img src="${product.imagen}" alt="${product.titulo}">
                    </a>
                </div>
                <div class="product__hover__info">
                    <ul class="product__action">
                    <!--<li class="quick-view_modal" id="">
                            <a title="Quick View" class="quick-view modal-view detail-link">
                                    <span class="ti-plus">
                                    </span>
                            </a>
                        </li>-->
                        <li class="product-selected_details" id="${product.numero}">
                            <a title="Product Details">
                                <span
                                        class="ti-shopping-cart">
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="add__to__wishlist">
                    <a data-bs-toggle="tooltip" title="Add To Wishlist" class="add-to-cart"
                        href="wishlist.html"><span class="ti-heart"></span></a>
                </div>
            </div>
            <div class="product__details">
                <h2><a >${product.titulo}</a></h2>
                <ul class="product__price">
                    <li class="new__price">$${product.precio}</li>
                </ul>
            </div>
        </div>
    `;
        contentProducts.append(div);
    })
    //actualizarBtns()
    btnsDetails()
}

loadProducts();

btnTypes = document.querySelectorAll(".btnType");
//console.log(btnTypes)


function productSelected() {

    btnTypes.forEach(btnType => {
        btnType.addEventListener("click", typeProduct);
    })
}
productSelected()

function typeProduct(e) {
    let idProduc = e.currentTarget.id;
    //console.log(e.currentTarget.id)

    const productTypes = products.filter(product => product.id === idProduc);


    if (productTypes.every(product => product.id === idProduc) === true) {
        window.location.href = 'shopTypes.html'
    }

    localStorage.setItem("ItenLocal", JSON.stringify(productTypes))

}

// function actualizarBtns() {
//     productModalbtn = document.querySelectorAll(".quick-view_modal");


//     productModalbtn.forEach(button =>{
//         button.addEventListener("click", callModal);
//     });
// }

// const productSelectedModals=[]

// function callModal(e){
//     const numberProduct = e.currentTarget.id;

//     const productTypes = products.find(product => product.numero === numberProduct);


//     productSelectedModals.push(productTypes)


//     if (productSelectedModals.some(product => product.numero === numberProduct) === true) {

//         productSelectedModals.forEach(productSelectedModal => {
//             let div = document.createElement("div");
//             div.classList.add("modal-body")
//             div.setAttribute("id", `${productSelectedModal.id}`)
//             div.innerHTML =
//                 `
//                 <div class="modal-product">
//                 <!-- Start product images -->
//                 <div class="product-images">
//                     <div class="main-image images">
//                         <img alt="big images" src="images/product/big-img/1.jpg">
//                     </div>
//                 </div>
//                 <!-- end product images -->
//                 <div class="product-info">
//                                     <h1>${productSelectedModal.titulo}</h1>
//                                     <div class="rating__and__review">
//                                     </div>
//                                     <div class="price-box-3">
//                                         <div class="s-price-box">
//                                             <span class="new-price">$${productSelectedModal.precio}</span>
//                                         </div>
//                                     </div>
//                                     <div class="quick-desc">
//                                         ${productSelectedModal.information}
//                                     </div>
//                                     <div class="select__color">
//                                         <h2>Color</h2>
//                                         <ul class="color__list">
//                                             <li class="${productSelectedModal.categoria.color}"><a title="${productSelectedModal.categoria.color}">${productSelectedModal.categoria.color}</a></li>
//                                         </ul>
//                                     </div>
//                                     <div class="select__size">
//                                         <h2>Size</h2>
//                                         <ul class="size__list">
//                                             <li class="l__size"><a>&nbsp;${productSelectedModal.medidas}</a></li>
//                                         </ul>
//                                     </div>
//                                     <div class="social-sharing">
//                                         <div class="widget widget_socialsharing_widget">
//                                             <h3 class="widget-title-modal">Share this product</h3>
//                                             <ul class="social-icons">
//                                             <li><a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
//                                             <li><a href="" target="_blank"><i class="fa-brands fa-pinterest-p"></i></a></li>
//                                             </ul>
//                                         </div>
//                         </div>
//                     <!--<div class="addtocart-btn">
//                         <a id=${productSelectedModal.numero} class="product_details">Product Details</a>
//                     </div>-->
//                 </div>

//             `;
//             productInfo.append(div);

//         })

//         body.classList. toggle("open-modal")
//         modal.classList.toggle("show")


//     }

//     productModalbtnClose.addEventListener("click", () =>{
//         body.classList.remove("open-modal");
//         modal.classList.remove("show");
//         delete productSelectedModals[0]

//     })

// }

// callModal()


function btnsDetails() {
    productbtnDetails = document.querySelectorAll(".product-selected_details");
    //console.log(productbtnDetails)

    productbtnDetails.forEach(button => {
        button.addEventListener("click", callDetails);
    });
}


function callDetails(e) {
    const numberProductReference = e.currentTarget.id;
    //console.log(numberProductReference)

    let productDetails = products.filter(product => product.numero === numberProductReference);
    //console.log(productDetails)
    if (productDetails = products.some(product => product.numero === numberProductReference) == true) {
        window.location.href = 'product-details.html'
    }

    localStorage.setItem("ItenLocal", JSON.stringify(productDetails))

}

callDetails()