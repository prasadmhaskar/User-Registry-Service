const BASE_URL = "http://localhost:8080/test";

// ADD
async function addEntry(user) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return res.json();
}

// GET all
async function getAllEntries() {
    const res = await fetch(BASE_URL);
    return res.json();
}

// GET by ID
async function getEntryById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
}

// UPDATE
async function updateEntry(id, user) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return res.json();
}

// DELETE
async function deleteEntry(id) {
    return await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}
