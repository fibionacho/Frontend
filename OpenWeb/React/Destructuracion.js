const user = {
    name: "Nacho",
    surname: "Bize",
    courses: ["DIW","DWES", "DWEC"]
};

//extraccion de atributos desde los parametros del objeto

const getFullName = ({name, surname}) => `${name} ${surname}`;

const {name, surname}= user;
console.log(name);
console.log("getFullName: ", getFullName(user));



//Destructurar un objeto en otro

const newUser = {
    ...user,
    name:"Andrea"
};


//Extraer y renombrar atributos del objeto

const {name: newName}= newUser;
console.log("newName: ",newName);


//Estraer y asignar de arrays

const [firstCourse, ...otherCourses]= newUser.courses;
console.log("firstCourse: ", firstCourse);
console.log("otherCourses: ", otherCourses);


//acortar asignación de clave de objeto
const newObject = {newName, firstCourse};
console.log("newObject: ", newObject)