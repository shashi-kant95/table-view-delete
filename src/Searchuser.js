function Searchuser(props) {
  const searchData = (event) => {
    let value = event.target.value.toLowerCase();
    let data = props.data.filter((ele) => {
      return ele.username.toLowerCase().includes(value);
    });

    console.log(data);

    props.searchedData(data);
  };

  return (
    <>
      <input onChange={searchData} />
    </>
  );
}

export default Searchuser;
