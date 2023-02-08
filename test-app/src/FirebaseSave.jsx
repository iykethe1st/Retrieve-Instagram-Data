import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";

const FirebaseSave = ({ userData }) => {
  const data = ["Ikenna", "TechBillman"];
  const saveData = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Instagram Data"), {
        instagramData: userData,
      });
      console.log("document written with Id: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
};

export default FirebaseSave;
