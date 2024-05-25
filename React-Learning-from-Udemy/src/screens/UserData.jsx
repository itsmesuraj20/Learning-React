import UserDataComponent from "./UserDataComponent";

function UserList(){

    const data = [{
        name : "Suraj",
        gender : "Male",
        age : "21",
        emailId: "surajsingh@gmail.com"
    },{
        name : "Suryash",
        gender : "Male",
        age : "1",
        emailId: "suryash@gmail.com"
    },{
        name : "Shreyashi",
        gender : "Female",
        age : "22",
        emailId: "shreyashi06@gmail.com"
    }]

    return (
        <div>
          {data.map((user, index) => (
            <UserDataComponent
              key={index}
              name={user.name}
              gender={user.gender}
              age={user.age}
              emailId={user.emailId}
            />
          ))}
        </div>
      );

}


export default UserList;

//Start from here : https://youtu.be/M2u6AS0Mx8A?si=Eic2lwxiNGrHhKgy&t=3322