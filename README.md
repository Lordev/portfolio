# Portfolio - lordev.me

A personal portfolio that reflects how I approach code: minimal, intentional, and well-crafted.

## 📦 Technologies

**Frontend:**
- Next.js 15 with TypeScript
- Tailwind CSS v4 - utility-first, fluid layout
- Framer Motion - entrance animations and scroll-driven effects
- Lenis - smooth scroll with section-aware navigation

## ✨ Features

**Fluid Responsive Layout:** Built to feel consistent across all screen sizes, from mobile up to large desktop displays. No awkward reflows, the layout scales as intended.

**Hero Section:** Animated autograph SVG, live availability badge, and local time display. Small details that add personality without cluttering the design.

**Smooth Navigation:** Footer bar handles both scroll-to-section and external links dynamically, driven by Lenis for buttery smooth anchoring.

**Atomic Component Architecture:** UI is composed from small primitives (`SlideButton`, `SlideText`, `Heading`, `LinkLine`) that get assembled into section-specific layouts, keeping things consistent and easy to extend.

**Parallax Scrolling:** Depth-layered scroll effects across sections give the site a physical, dimensional feel. Combined with Lenis, motion stays smooth and intentional throughout the experience.

**Asymmetric Design:** Intentional imbalance in spacing and layout to give the site a more human, editorial feel while staying minimal.

## 👩🏽‍🍳 The Process

This portfolio has gone through several design passes - certain sections reworked more than once as I found better ways to express the same content. 

One of the trickier things to get right in the design was balance in imbalance: asymmetry that feels intentional rather than accidental, composed without being rigid. 

The approach has been iterative: ship something solid, live with it, then improve it when the gap between what it is and what it should be becomes obvious.

The site is actively evolving. A blog section is planned next, alongside new project case studies as I complete them.

## 📚 What I Learned

**Boutique-style animations without overdoing it:** Learning to use Framer Motion for scroll-triggered and entrance animations that feel intentional rather than decorative. The constraint was keeping it minimal, every animation had to earn its place.

**Atomic design in practice:** Starting from the smallest possible units (`SlideText`, `Heading`) and composing upward meant that each section could be unique while sharing the same building blocks. It made iteration much faster.

**Full fluid layouts:** Making a layout that holds up on ultrawide screens without breaking the design took more thought than expected. The solution was leaning into fluid units and letting the asymmetry work in the layout's favor rather than fighting it with fixed constraints.

## 🚦 Running the Project

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Lordev/portfolio-lordev.git
    cd portfolio-lordev
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Start the development server:**
    ```bash
    yarn dev
    ```

4. Open `http://localhost:3000`

## ⚠️ Usage Notice

This project is for personal reference, recruitment, and inspiration only. Please do not copy or redistribute the content or design without explicit permission.
