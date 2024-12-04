"use client";

import Image from "next/image";
import { EditDuotone, Logo } from "@/assets/index";
import AddTask from "./Components/AddTask";
import { use, useState } from "react";
import TaskScreen from "./Pages/TaskScreen";

export default function Home() {
  const [isDBConnected, setIsDBConnected] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="h-screen w-screen relative ">
      <main className="  h-screen w-screen py-5 flex flex-col max-w-4xl  mx-auto">
        <header className="flex justify-center items-center  flex-col gap-4">
          <div className="flex  items-center gap-8">
            <Image src={Logo} alt="logo" height={60} width={60} />
            <p className="text-5xl font-light">My Task List</p>
            <Image src={EditDuotone} alt="logo" height={35} width={35} />
          </div>
          <p className="text-lg ">Tasks to keep organised</p>
        </header>
        <AddTask setShowAddTask={setShowAddTask} showAddTask={showAddTask} />
      </main>
      {showAddTask && <TaskScreen setShowAddTask={setShowAddTask} />}
    </div>
  );
}
