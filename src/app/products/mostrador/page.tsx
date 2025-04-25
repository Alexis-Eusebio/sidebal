
'use client';

import { Contador } from "@/app/components/contador";
import { count } from "console";
import { useState } from "react";

export default function MostradorPage() {

    const [count,setCount]= useState(0);
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <span>Productos en el carrito</span>     
        <Contador/>
      </div>
    );
  }