# MT Auto Clicker

MT Auto Clicker is a powerful web tool designed to streamline repetitive tasks such as auto-clicking, scrolling, swiping, form-filling, hotkeys, zooming, screen capturing, and more. Built using **Next.js** and **Tailwind CSS**, the app delivers a responsive and modern user interface to enhance efficiency and productivity.

---

## Design Choices

### 1. **Responsive Design**:
   - I used **Tailwind CSS** utility classes to ensure the application is fully responsive. 
   - The layout is designed to adjust seamlessly on various screen sizes, making it accessible on mobile, tablet, and desktop devices.
   - The advertisement `<span>` element is hidden on smaller screens using Tailwind's responsive classes (`hidden sm:block`), keeping the UI clean and focused on mobile users.
   - The typography and button sizes scale appropriately on different screen sizes with the help of responsive classes like `text-[2.5rem]`, `md:text-[3.5rem]`, and `lg:text-[4rem]`.

### 2. **Dark Mode Support**:
   - The app supports **Dark Mode**, which provides a sleek and modern look. The `isDarkMode` prop is used to toggle between light and dark themes dynamically. This enhances user experience by offering a more personalized and comfortable visual style.

### 3. **Tailwind CSS**:
   - Tailwind CSS was chosen for its flexibility and utility-first approach, allowing rapid styling and easy management of responsive design.
   - I made use of several Tailwind classes such as `bg-gray-900`, `text-white`, `py-10`, `hover:bg-gray-600`, and `transition` for smooth hover effects and transitions.

### 4. **Image Handling**:
   - The logo is rendered using the `next/image` component to optimize image loading and performance, offering automatic optimization for different screen sizes.

### 5. **User-Centric UI**:
   - The design prioritizes clarity and simplicity, with a large, bold heading and a clean, centered layout. The CTA (Call to Action) "Download" button stands out, guiding users to take the next step.

---

## Features

- **Auto-Clicking**: Automate mouse clicks with customizable intervals.
- **Auto-Scrolling**: Automatically scroll through web pages.
- **Form Filling**: Pre-fill forms with user-defined data.
- **Hotkeys**: Use keyboard shortcuts to perform tasks.
- **Zooming**: Zoom in or out of the screen.
- **Screen Capture**: Capture your screen effortlessly.
- **Dark Mode**: Toggle between light and dark themes for optimal viewing.

---

## Setup Instructions

Follow the steps below to get the project up and running locally.

### Prerequisites

- **Node.js** (v16 or above)
- **npm** (or Yarn)

### 1. **Clone the Repository**

```bash
git clone https://github.com/Ritik543/mtautoclicker.git
