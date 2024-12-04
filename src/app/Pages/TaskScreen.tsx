import { CloseRingDuotone1 } from "@/assets";
import Image from "next/image";
import React, { FC } from "react";
import { icons } from "../lib/helpers";

const TaskScreen: FC<{ setShowAddTask: (value: boolean) => void }> = ({
  setShowAddTask,
}) => {
  return (
    <div className=" h-screen w-screen absolute top-0 left-0 flex justify-end items-center z-50 bg-black/50">
      <section className=" bg-white h-[97vh] w-1/2 rounded-lg px-4 py-5 slidein">
        <header className="flex justify-between items-center">
          <p className="text-2xl font-bold">Task Details</p>
          <div
            className=" flex justify-center h-10 w-10 items-center border-2 border-gray-500/20 rounded-xl"
            onClick={() => setShowAddTask(false)}
          >
            <Image
              src={CloseRingDuotone1}
              alt="logo"
              height={25}
              className=" cursor-pointer"
              width={25}
            />
          </div>
        </header>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2 my-4">
            <label className=" text-grayBlue" htmlFor="title">
              Task Name
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Task Name"
              id="title"
              className=" border-2 border-gray-500/20 py-2 rounded-xl px-3 outline-none focus:border-blue"
            />
          </div>

          <div className="flex flex-col gap-2 my-4">
            <label className=" text-grayBlue" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter a short description"
              rows={8}
              className=" border-2 border-gray-500/20 py-2 rounded-xl px-3 outline-none focus:border-blue "
            />
          </div>

          <div className=" flex flex-col gap-2 my-4">
            <label  className=" text-grayBlue" htmlFor="icon">Icon</label>
            <div className=" flex gap-4">
              {icons.map((icon) => (
                <div
                  key={icon.name}
                  className=" cursor-pointer border-2 border-gray-500/20 rounded-xl p-2"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    height={30}
                    width={30}
                  />
                </div>
              ))}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default TaskScreen;
