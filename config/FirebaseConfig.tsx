// firebaseConfig.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import { getAuth } from 'firebase/auth'; // para recuperar la instancia si ya fue creada
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// (Opcional) ayuda a depurar cuando las env están vacías
console.log('Firebase Config:', {
  ...firebaseConfig,
  apiKey: firebaseConfig.apiKey ? '***' : undefined, // no logues la key real
});

// ✅ App: reusa la existente si ya está creada
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Auth con persistencia en AsyncStorage (solo inicializa una vez)
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch {
  // Si ya estaba inicializado, recupera la instancia
  auth = getAuth(app);
}

// ✅ Firestore (idempotente)
const db = getFirestore(app);

// ✅ Analytics: solo en web y si está soportado
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (Platform.OS === 'web') {
  isSupported()
    .then((ok) => {
      if (ok) analytics = getAnalytics(app);
      else console.log('Firebase Analytics no soportado en este entorno');
    })
    .catch((e) => console.log('Error comprobando analytics:', e));
}

export { app, db, auth, analytics };
