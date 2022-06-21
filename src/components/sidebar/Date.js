function getDate() {
    var currentDate =new Date();

    return (
        <div>
            <p>{currentDate.toDateString()}</p>
        </div>
    );
}

export default getDate;