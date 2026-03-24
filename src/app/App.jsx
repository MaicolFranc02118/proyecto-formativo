import { CreateUserPage } from "@/features/users";

export default function App(){
  return(
    <div className="min-h  text-center grid grid-cols-1 gab-4 ">
      <h1 className="text-white  text-4xl font-bold bg-fuchsia-800 p-6">
        Con Rico programar  Maicol..
      </h1>

      <CreateUserPage />

  
    </div>
  );
}