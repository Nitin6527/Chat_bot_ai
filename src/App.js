import { useEffect, useState } from "react";
import { BsRobot } from "react-icons/bs";
import ChatArea from "./components/ChatArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { v4 as uuid } from "uuid";
const { Configuration, OpenAIApi } = require("openai");

function App() {
  const unique_id = uuid();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_URL,
  });

  const openai = new OpenAIApi(configuration);

  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    setLoading(true);
    if (message) {
      try {
        const result = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: message,
          temperature: 0.5,
          max_tokens: 4000,
        });
        let response = result.data.choices[0].text;
        setChat([...chat, { id: unique_id, req: message, res: response }]);
        setApiError("");
      } catch (e) {
        setApiError("Something is going wrong, Please try again!");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    handleChat();
  }, [message]);

  return (
    <div className="fixed bottom-10 right-10">
      {isOpen ? (
        <div className="flex shadow-lg flex-col justify-between rounded-xl w-96 chat-box ">
          <Header setIsOpen={setIsOpen} />
          <ChatArea chat={chat} apiError={apiError} loading={loading} />
          <div className="w-full flex justify-center items-center">
            <hr className="w-11/12" />
          </div>
          <Footer setInputValue={setMessage} apiError={apiError?.length} />
        </div>
      ) : (
        <div
          className="shadow-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-xl rounded-full p-4 inline-block hover:cursor-pointer transition hover:scale-110 ease-in-out"
          onClick={(prev) => setIsOpen((prev) => !prev)}
        >
          <BsRobot className="text-blue-50" />
        </div>
      )}
    </div>
  );
}

export default App;
