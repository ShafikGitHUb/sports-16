const getAddFacility = async () => {
    const res = await fetch("http://localhost:5000/all-facilities");
    return res.json();
};
export default getAddFacility;