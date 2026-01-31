# AI Chat Chrome Extension

AI Chat Chrome Extension is a lightweight Chrome extension that provides instant AI chat inside Chrome’s Side Panel using Google’s Gemini 2.5 Flash model.
The side panel enables persistent, non-intrusive conversations, allowing users to interact with AI while continuing to browse the web.

The extension is built with Chrome Manifest V3, focusing on privacy-first design, secure API key handling, and clean, production-ready architecture.

# Demo

Video Demo: Add Loom / YouTube link here
Quick Preview: Add GIF or screenshot

The demo showcases real-time AI chat inside Chrome’s side panel while browsing different websites.

# Features

AI Chat in Chrome Side Panel -
Persistent AI chat experience accessible alongside any webpage.

Secure API Key Management -
User API keys are stored securely using chrome.storage.sync (no hardcoding, no backend).

Fast & Lightweight -
Event-driven background logic with minimal permissions.

Clean & Minimal UI -
Simple, readable interface optimized for side panel usage.

Manifest V3 Compliant -
Built using Chrome’s latest extension security and architecture standards.

# Tech Stack

Frontend: JavaScript (ES6+), HTML5, CSS3

AI API: Google Gemini AI (gemini-2.5-flash)

Browser APIs: Chrome Extensions Manifest V3 - tabs, storage, scripting

# Installation & Setup
1️⃣ Prerequisites

Google Chrome Browser

Gemini API Key (from Google AI Studio)

2️⃣ Local Setup
git clone https://github.com/hiteshkhatri74/AI-Chat-Chrome-Extension.git

Open Chrome → chrome://extensions

Enable Developer mode

Click Load unpacked

Select the cloned project folder

Click the extension icon → open Settings

Paste your Gemini API key and save

# Technical Highlights (For Developers)

Side Panel Architecture - 
Uses Chrome’s Side Panel API for persistent multi-tab friendly UI.

Service Worker Background - 
Event-based background logic compliant with Manifest V3.

Secure Storage - 
API keys are stored using Chrome’s synced storage (no hardcoding).

Privacy-First Design - 
No automatic webpage content access and no external data storage.

Error Handling - 
Graceful handling of:
   - Invalid or missing API keys
   - Network/API failures

# Security & Privacy

No external database

No tracking or analytics

No server-side storage

All user data remains inside the browser

# Why this project matters

This project demonstrates:

Strong understanding of modern Chrome Extension architecture

Responsible permission and privacy handling

Clean frontend and async logic

Practical AI API integration

Product-focused engineering mindset

# Future Improvements

Optional page-content reading via explicit user action

Context-aware prompts

Chat history persistence

Streaming AI responses

Keyboard shortcuts
No tracking

No server-side storageok 
