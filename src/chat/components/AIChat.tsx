import { useState } from "react";
import AIIcon from "./AIIcon";
import { IoIosSend } from "react-icons/io";

const bot = {
  name: "Selene",
  status: "Disponible",
};

interface Message {
  id: number;
  content: string;
  role: "bot" | "user";
}

const defaultMessages: Message[] = [
  {
    id: 1,
    content: `¡Hola! Soy ${bot.name} ¿Cómo te puedo ayudar?`,
    role: "bot",
  },
];

const messageWidth = "w-full";

const getUserMessage = (content: string) => {
  return (
    <div
      className="flex items-end justify-end px-3"
      key={new Date().toISOString() + content + "user"}
    >
      <div className={`bg-pignus-500 p-3 rounded-lg text-wrap ${messageWidth}`}>
        <p className="text-sm text-white">{content}</p>
      </div>
      <img
        src="https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg"
        alt="Other User Avatar"
        className="w-8 h-8 rounded-full ml-3"
      />
    </div>
  );
};

const getBotMessage = (content: string) => {
  return (
    <div
      className="flex items-start px-3"
      key={new Date().toISOString() + content + "bot"}
    >
      <AIIcon />
      <div className={`ml-3 bg-gray-100 p-3 rounded-lg ${messageWidth}`}>
        <p className="text-sm text-gray-800">{content}</p>
      </div>
    </div>
  );
};

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements[0];
    const value = (input as HTMLInputElement).value;
    if (!value) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: value,
        role: "user",
      },
    ]);
    (input as HTMLInputElement).value = "";
  };

  return (
    <div className="max-w-md mx-auto border-2 border-gray-300 rounded-lg">
      <div className="bg-white rounded-lg shadow-md p-4 w-[300px] md:w-[400px]">
        <div className="flex items-center mb-4 w-full">
          <div className="ml-3">
            <p className="text-xl font-medium">{bot.name}</p>
            <p className="text-gray-500">{bot.status}</p>
          </div>
        </div>
        <div className="space-y-4 w-full">
          {messages.map((message) =>
            message.role === "bot"
              ? getBotMessage(message.content)
              : getUserMessage(message.content)
          )}
        </div>
        <form
          className="mt-4 grid grid-cols-4 items-center w-full"
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            placeholder="Escribe algo..."
            className="col-span-3 py-2 px-3 rounded-xl bg-gray-100 border-gray-300  focus:border-pignus-500 active:focus:border-pignus-500 focus:outline-none focus:ring focus:ring-pignus-500 focus:ring-opacity-50 transition duration-100 ease-in-out"
          />
          <button
            className="col-span-1 h-full bg-pignus-500 text-white px-4 py-2 rounded-xl ml-3 hover:bg-pignus-600"
            type="submit"
          >
            <IoIosSend className="mx-auto h-6 w-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
