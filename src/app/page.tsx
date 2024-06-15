import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center	 w-screen h-screen bg-green-50">
      <form className="flex flex-col">
        
        <input className="bg-green-100 h-12 w-96 rounded-lg border border-green-400 
          text-green-950 mb-3 p-3 placeholder-slate-400  
          focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600
          " type="text" placeholder="usuário" />
        
        <input className="bg-green-100 h-12 w-96 rounded-lg border border-green-400 
          text-green-950 mb-3 p-3 placeholder-slate-400   
          focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600
          " type="password" placeholder="senha"/>
        
        {/* <input className="bg-green-950 h-12 w-96 rounded-lg cursor-pointer" type="button" 
          value="entrar" /> */}
        
        <button className="bg-green-950 h-12 w-96 rounded-lg cursor-pointer
          hover:bg-green-800 active:bg-green-800
          focus:outline-none focus:ring focus:ring-violet-300">entrar</button>
      
      </form>
    </main>
  );
}
