import React from "react";

const dummyData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  description: `This is the description for item ${i + 1}`,
}));

export default function ScrollableList() {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Scrollable List</h3>

      <div style={styles.list} className="max-h-" >
        {dummyData.map((item) => (
          <div key={item.id} style={styles.item} className={item.id == 2 ? "sticky top-10":""}>
            <b>{item.title}</b>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "8px",
  },
  list: {
    overflowY: "auto",
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "8px",
  },
  item: {
    padding: "8px",
    marginBottom: "6px",
    backgroundColor: "#f9f9f9",
    borderRadius: "4px",
  },
};
