import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Textarea } from "../ui/textarea";
import { SearchIcon, SendIcon } from "lucide-react";
import { fakeDoctors, fakePatients, fakeChats } from "../../data/examples";
import { Chat } from "@/interfaces";

export default function Chats() {
  const [chats, setChats] = React.useState<Chat[]>(fakeChats);
  const [selectedChat, setSelectedChat] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>("");

  const handleAddMessage = (chatId: string) => {
    const newMessage = {
      id: `m${chats[selectedChat].messages.length + 1}`,
      content: message,
      senderId: fakeDoctors[0].id,
      receiverId: fakePatients[0].id,
      timestamp: new Date().toISOString(),
    };
    const newChats = chats.map((chat) => {
      if (chat.id === chatId) {
        return {
          ...chat,
          messages: [...chat.messages, newMessage],
        };
      }
      return chat;
    });
    setChats(newChats);
    setMessage("");
  };

  return (
    <div className="grid min-h-[calc(100vh-90px)] w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      {/* Chats */}
      <div className="border-r bg-gray-100/40 max-h-[calc(100vh-90px)] overflow-y-auto">
        <div className="grid gap-2">
          {chats.map((chat, index) => (
            <button
              key={chat.id}
              className={`flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200/50 ${
                index === selectedChat ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedChat(index)}
            >
              <Avatar className="border w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>
                  {
                    fakePatients.find((p) => p.id === chat.patientId)?.profile
                      .firstName[0]
                  }
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start gap-0.5">
                <p className="text-sm font-medium leading-none">
                  {
                    fakePatients.find((p) => p.id === chat.patientId)?.profile
                      .firstName
                  }{" "}
                  {
                    fakePatients.find((p) => p.id === chat.patientId)?.profile
                      .lastName
                  }
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-left">
                  {chat.messages[chat.messages.length - 1].content} &middot;{" "}
                  {new Date(
                    chat.messages[chat.messages.length - 1].timestamp
                  ).toLocaleTimeString()}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Chats</h1>
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search chats..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                />
              </div>
            </form>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-between gap-4 p-4 md:gap-8 md:p-6">
          {/* Chat Messages */}
          <div className="flex flex-col">
            {chats[selectedChat].messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-4 ${
                  message.senderId === fakeDoctors[0].id ? "justify-end mb-2" : ""
                }`}
              >
                {message.senderId !== fakeDoctors[0].id && (
                  <Avatar className="shrink-0">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`${
                    message.senderId === fakeDoctors[0].id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800"
                  } rounded-lg p-4 max-w-[70%]`}
                >
                  <p>{message.content}</p>
                </div>
                {message.senderId === fakeDoctors[0].id && (
                  <Avatar className="shrink-0">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      {
                        fakePatients.find(
                          (p) => p.id === chats[selectedChat].patientId
                        )?.profile.firstName[0]
                      }
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>

          {/* Input Text */}
          <form
            className="bg-gray-100 dark:bg-gray-950 p-4 flex items-center space-x-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddMessage(chats[selectedChat].id);
            }}
          >
            <Textarea
              placeholder="Type your message..."
              className="flex-1 rounded-lg p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">
              <SendIcon className="w-5 h-5" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
}
