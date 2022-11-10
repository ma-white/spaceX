
const fetchData = async (setData: (json: any) => void) => {
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    const json = await response.json();
    setData(json);
};

export {fetchData};