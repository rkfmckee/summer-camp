const getDataAsync = async () => {
    const response = await fetch("http://127.0.0.1:5001/api/home-page");
    const data = await response.json();
    console.log(data);
    return { ...data.data };
};

const GetData = async () => {
    const data = await getDataAsync();

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    );
};

export default GetData;
