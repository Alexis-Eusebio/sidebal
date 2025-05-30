import Image from 'next/image';
import { GrCloudComputer } from "react-icons/gr";
import { CgPiano } from "react-icons/cg";
import { GiSoccerBall } from "react-icons/gi";

const elementos =[
    {
        path: "/productos/cajas",
        titulo: "Cajas de juguetes",
        subtitulo: "Cajas de juguetes",
        icono: <GrCloudComputer />
    },
    {
        path: "/productos/pianos",
        titulo: "Pianos",
        subtitulo: "Para aprender",
        icono: <CgPiano />
    },{
        path: "/productos/balones",
        titulo: "Balones",
        subtitulo: "Balones de soccer",
        icono: <GiSoccerBall />
    }

];

export const MenuLateral = () => {
    return (

        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">
                    <GrCloudComputer /> Dash<span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Bienvenido,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full w-8 h-8"
                            src="https://i.abcnewsfe.com/a/7c76ddba-5378-46ca-ad27-0ac814697d1d/scotus-1-gty-gmh-250408_1744126476481_hpMain_16x9.jpg?w=992"
                            alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Mi tienda
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>

                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-5 text-white">Dashboard</span>
                        <span className="text-sm text-white/50 hidden md:block">Data Overview</span>
                    </div>
                </a>
                <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg text-slate-300 font-bold leading-5">Database</span>
                        <span className="text-sm text-slate-500 hidden md:block">Database Manager</span>
                    </div>
                </a>

            </div>
        </div>
    );
}


// npm i react-icons
// https://react-icons.github.io/react-icons/
// https://react-icons.github.io/react-icons/search/#q=disk
