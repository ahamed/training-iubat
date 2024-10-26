# HTML Fundamentals Course Outline

## Module 1: HTML Introduction and Versions
- Overview of HTML and its role in web development
- Brief history and progression of HTML versions
- Key features introduced in HTML5
	- Semantic Elements: Introduced tags like `<header>`, `<footer>`, `<section>` for better document structure.
	- Multimedia Support: Added native `<audio>` and `<video>` tags for easy media embedding.
	- Canvas API: Provided `<canvas>` element for rendering graphics via JavaScript.
	- SVG Support: Enabled scalable vector graphics for resolution-independent visuals.
	- Improved Form Controls: New input types (email, date, etc.) and attributes (required, placeholder) for enhanced forms.
	- Local and Session Storage: Allowed client-side data storage with `localStorage` and `sessionStorage`.
	- Geolocation API: Enabled access to user location with consent for location-based services.
	- Offline Capabilities: Introduced AppCache for offline access, paving the way for offline web apps.
	- WebSockets: Supported real-time, two-way communication between client and server.
	- Web Workers: Allowed background script execution for improved performance in heavy tasks.
	- Drag and Drop: Enabled native drag-and-drop functionality within the browser.
	- Enhanced Accessibility and ARIA Roles: Improved accessibility with semantic elements and ARIA roles.
	- History API: Enabled manipulation of browser history for single-page applications (SPAs).

## Module 2: HTML Syntax and Structure
- Basic HTML document structure and layout
- Understanding tags, elements, and attributes
- Best practices for clean and maintainable HTML

## Module 3: HTML Headings, Formatting, Attributes, Elements, and Nested Elements
- Usage of heading tags to structure content
- Common text formatting tags and their uses
- Attributes and their role in enhancing elements
- Nesting elements for structured HTML

## Module 4: Semantic vs. Non-Semantic Elements
- Introduction to semantic HTML elements
- Differences between semantic and non-semantic tags
- Benefits of semantic HTML for accessibility and SEO

## Module 5: Working with Tables
- Creating basic tables with rows and cells
- Using attributes for table styling and layout
- Techniques for creating responsive tables

## Module 6: Forms in HTML
- Overview of form elements and input types
- Using form attributes and labels effectively
- HTML5 form validation for user-friendly forms

## Module 7: Media Tags - Audio, Video, and Iframe
- Embedding audio and video elements
- Controlling media playback with attributes
- Embedding external content with iframes

## Module 8: Lists in HTML
- Creating ordered and unordered lists
- Working with description lists for definitions
- Nesting lists for structured content

## Module 9: Images and Picture Elements
- Inserting images and using alt text for accessibility
- Utilizing the picture element for responsive images
    ```html
    <picture>
        <source media="(min-width: 1024px)" srcset="large-mountain.jpg">
        <source media="(min-width: 768px)" srcset="medium-mountain.jpg">
        <source media="(min-width: 480px)" srcset="small-mountain.jpg">
        <img src="default-mountain.jpg" alt="Mountain view with clear skies">
    </picture>
    ```
- Best practices for optimizing images on the web

## Module 10: HTML Layout Design
- Structuring layouts with semantic elements
- Introduction to Flexbox and Grid for layout design
- Basic responsive design techniques for flexible layouts

## Final Project: Building a Personal Portfolio Page
- Creating a full HTML page with multimedia, forms, and a structured layout
- Applying all course concepts in a practical project