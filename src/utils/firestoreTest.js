import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

async function testFirestoreWrite() {
  try {
    const docRef = await addDoc(collection(db, "events"), {
      name: "John's Wedding",
      date: "2025-06-12",
      location: "Serena Hotel",
    });

    console.log("✅ Firestore write successful! Document ID:", docRef.id);
  } catch (error) {
    console.error("❌ Error writing to Firestore:", error);
  }
}

testFirestoreWrite();
