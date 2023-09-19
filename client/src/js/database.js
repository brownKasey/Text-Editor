import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (content) => {
  console.error("putDb not implemented");

  //creates a connection to the database and the version #
  const jateDb = await openDB("jate", 1);

  //creates a new transaction and specifies the database and data privledges
  const tx = jateDb.transaction("jate", "readwrite");

  //open up the desired object store
  const store = tx.objectStore("jate");

  //use add method on the store to pass content in
  const request = store.add();

  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");

initdb();
