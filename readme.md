# 🧭 GuideLine  
**An augmented reality tool that visually guides users through the breadboarding process.**

<div align="center">
  <img src="https://github.com/user-attachments/assets/d922fa10-e793-4f2e-bfef-2549a86a8704" alt="GuideLine Logo" width="450"/>
</div>

---

## 🧠 Inspiration⼁

As students running a robotics club, we kept seeing the same thing:

> New members join, excited to learn electronics — but the moment breadboards and schematics come out, they freeze.

- The diagrams are confusing  
- The connections aren’t clear  
- One small mistake can break everything

Eventually, they give up — not because they lack potential, but because the tools fail them.

**We built GuideLine because everyone deserves a chance to build and learn without being held back by bad UX and intimidating tools.**

---

## 💡 What It Does⼁

GuideLine is an augmented reality tool that visually guides users through the breadboarding process.

- Upload a schematic (from Fritzing, KiCad, or EAGLE)  
- Point your phone at your breadboard  
- See glowing highlights showing exactly where each wire and component goes  
- Follow step-by-step instructions until your circuit is complete  

📍 *It’s like a GPS for electronics.*

<div align="center">
  <img src="https://github.com/user-attachments/assets/45dddb5f-9e82-491f-b727-7fa1f43747c1" alt="AR Demo" width="450"/>
</div>

---

## ⚙️ How It Works⼁

- **AR & Computer Vision** detect and calibrate the physical breadboard layout  
- **Schematic Parser** extracts wiring instructions and component locations  
- **Real-Time AR Overlay** lights up individual holes for each connection  
- **Step-by-Step Mode** guides the user through each placement with optional haptic feedback  

<div align="center">
  <img src="https://github.com/user-attachments/assets/d25b9d5b-7a9b-4157-b8a4-93764cc8e27a" alt="Screenshot 1"/>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/a8be3283-9f94-4cca-afba-0ef523d0d9dd" alt="Screenshot 2"/>
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/0524f210-8a32-4bb0-8391-114fb58c3dca" alt="Screenshot 3"/>
</div>

---

## 🏆 Accomplishments⼁

- Functional AR interface with real-time wiring overlays  
- Accurate schematic parsing from Fritzing exports  
- Breadboard recognition using corner detection + homography mapping  
- Optimized mobile performance to maintain 30 FPS with AR overlays  

---

## 📚 What We Learned⼁

- Computer vision + AR is way more fragile on mobile than expected  
- Robust schematic parsing across platforms (Fritzing, KiCad, EAGLE) is non-trivial  
- UI/UX matters as much as the tech — if users don’t trust it, they won’t use it  
- Cross-functional collaboration is essential in CV, AR, and mobile development  

---

## 🚀 What’s Next for GuideLine⼁

- Add support for more schematic formats (e.g. KiCad netlists, JSON)  
- Build a real-time feedback system to detect incorrect placements  
- Integrate with education platforms (classroom/curriculum support)  
- Launch a community schematic library for beginners  
- Polish the UI, expand to iOS, and test in schools & makerspaces  
