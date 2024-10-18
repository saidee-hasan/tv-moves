import { users } from "../constants";

export default function Category() {
  return (
    <div className="">
      <div className="text-gray-500  bg-gray-100 p-4 sm:ml-40 gap-2  translate-all duration-300 mt-14 dark:bg-gray-800 p-4 sm:ml-40 md:ml-56 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {users.map((user, index) => (
            <li
              className="bg-orange-400 text-center p-2 rounded-xl"
              key={index}
            >
              {user.name}
            </li>
          ))}
        </div>
  
      </div>
    </div>
  );
}
