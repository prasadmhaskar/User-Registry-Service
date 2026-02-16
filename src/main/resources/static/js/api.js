const BASE_URL = "http://localhost:8080/test";

async function handleResponse(res) {
    if (!res.ok) {
        // If 404 or 500, try to parse the error message
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Error: ${res.statusText}`);
    }
    // Only parse JSON if there is content (DELETE usually has no content)
    return res.status !== 204 ? res.json() : null;
}

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
    return handleResponse(res);
}

// UPDATE
async function updateEntry(id, user) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    });
    return handleResponse(res);
}

// DELETE
async function deleteEntry(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
    return handleResponse(res);
}
