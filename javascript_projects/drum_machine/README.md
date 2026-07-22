# 🥁 Drum Machine

A simple and interactive Drum Machine built with **HTML**, **CSS**, and **JavaScript**. The application allows users to play different drum sounds either by clicking the on-screen drum pads or by pressing the corresponding keys on their keyboard.

This project was built as part of the **freeCodeCamp Front End Development Libraries Certification**.

---

## 📸 Preview

![Drum Machine Screenshot](screenshot.png)

> *Replace `screenshot.png` with a screenshot of your project after uploading it to your repository.*

---

## 🚀 Features

- Play drum sounds by clicking any drum pad.
- Play drum sounds using the keyboard (`Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`).
- Display the name of the sound currently being played.
- Responsive grid layout for the drum pads.
- Instant replay of sounds by resetting the audio playback position.

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6)

---

## 🎵 Drum Pad Mapping

| Key | Sound |
|-----|-------|
| Q | Heater-1 |
| W | Heater-2 |
| E | Heater-3 |
| A | Heater-4 |
| S | Heater-6 |
| D | Dsc_Oh |
| Z | Kick_n_Hat |
| X | RP4_KICK_1 |
| C | Cev_H2 |

---

## 📂 Project Structure

```
drum-machine/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

Each drum pad contains an HTML `<audio>` element with a unique keyboard ID.

When a user:

- **Clicks a drum pad**, JavaScript locates the corresponding audio element and plays the sound.
- **Presses a keyboard key**, JavaScript listens for the `keydown` event, matches the pressed key to the appropriate audio element, and plays the sound.

Before playing a sound, the audio playback is reset using:

```javascript
audio.currentTime = 0;
```

This allows the same sound to be triggered repeatedly without waiting for it to finish.

---

## ▶️ Running the Project

1. Clone the repository.

```bash
git clone https://github.com/yourusername/drum-machine.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

No installation or additional dependencies are required.

---

## 📚 What I Learned

While building this project, I gained practical experience with:

- DOM manipulation
- Event listeners
- Keyboard events
- Mouse events
- Working with HTML Audio elements
- CSS Grid
- Flexbox
- JavaScript loops (`forEach`)
- Querying and traversing the DOM
- Updating page content dynamically

---

## 🔮 Future Improvements

- Add drum pad animations when activated.
- Add volume control.
- Support multiple sound banks.
- Add power on/off functionality.
- Improve mobile responsiveness.
- Display cleaner sound names instead of audio filenames.

---

## 👨‍💻 Author

**Daniel Omodiagbe**

Computer Engineering Graduate (First Class)

GitHub: https://github.com/Omodiagbe-Daniel

LinkedIn: 

---

## 📄 License

This project is open source and available under the MIT License.
