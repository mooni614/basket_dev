
function Animal ({animal}){

    return(
        <div>
            <p>{animal.name}</p>
            <p>{animal.age}</p>
            <p>{animal.gender}</p>
        </div>
    );


}
function AnimalsList(){
    const animals =[
        {
            id : 1,
            name : "Cat",
            age : 2,
            gender: "M"
        }
    ];

    return(
        <div>
            <p>동물</p>
          <Animal animal={animals[0]}/>
        </div>

    );

}

export default AnimalsList;