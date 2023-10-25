export const getEveryArtist = async () => {
    const response = await fetch("http://localhost:3000/api/artistas/", {cache: "no-store"});
    return response.json();
}