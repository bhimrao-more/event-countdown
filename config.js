// ─── Firebase Configuration ────────────────────────────────────────────────
// Setup:
// 1. Go to https://console.firebase.google.com
// 2. Create project → Add Web App → copy the config object below
// 3. In your project: Build → Realtime Database → Create Database → Start in test mode
// 4. Replace every "YOUR_..." with your actual values

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ─── Admin PIN ─────────────────────────────────────────────────────────────
// Change this before deploying. Keep it secret — it's the only lock on admin.html.
const ADMIN_PIN = "1234";
