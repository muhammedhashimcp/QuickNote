import NotesList from "@/components/NotesList";


const getNotes = async () => {

  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    });
    // console.log("🚀 ~ file: page.jsx:10 ~ getNotes ~ res:", res)

    if (!res.ok) {
      throw new Error("Failed to fetch notes");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading notes: ", error);
  }
};


export default async function Dashboard() {
  try {
    const { notes } = await getNotes();
    return (
      <>
        {/* <Search /> */}
        <NotesList notes={notes} />
      </>
    );
  } catch (error) {
    console.error("Error in Dashboard component: ", error);
    return <div>Error loading notes.</div>;
  }
}


