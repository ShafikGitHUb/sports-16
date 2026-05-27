const getAddFacility = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities`);
    return res.json();
};
export default getAddFacility;