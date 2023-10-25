export const addArtist = async (artist) => {
    await fetch("http://localhost:3000/api/artistas/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(artist)
    })
}