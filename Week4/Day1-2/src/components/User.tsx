interface User {
  fname: string;
  lname: string;
  age: number;
  phone: number;
  email: string;
}
const User = (props: User) => {
  return (
    <div>
      <h1 className="font-mono font-bold text-center text-2xl">User Details</h1>
      <ul className="font-mono p-4 font-medium flex gap-10 justify-center items-center">
        <li className="flex">
          <h2 className="font-bold">First Name: </h2>
          {props.fname}
        </li>
        <li className="flex">
          <h2 className="font-bold">Last Name: </h2>
          {props.lname}
        </li>
        <li className="flex">
          <h2 className="font-bold">Age: </h2>
          {props.age}
        </li>
        <li className="flex">
          <h2 className="font-bold">Phone Number:</h2>
          {props.phone}
        </li>
        <li className="flex">
          <h2 className="font-bold">Email: </h2>
          {props.email}
        </li>
      </ul>
    </div>
  );
};

export default User;
