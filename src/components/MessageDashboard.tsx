import React, { useState } from "react";
import axios from "axios";

type Message = {
  _id: string;
  name: string;
  email: string;
  content: string;
  createdAt: string;
};

const MessageDashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showMessages, setShowMessages] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:5000/api/messages");
      setMessages(res.data);
      setShowMessages(true);
    } catch (err) {
      setError("Failed to load messages.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">User Messages</h2>

      <button
        onClick={fetchMessages}
        className="mb-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Show Messages
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {showMessages && (
        <>
          {messages.length === 0 ? (
            <p>No messages found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {messages.map((msg) => (
                <div
                  key={msg._id}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{msg.name}</h3>
                    <span className="text-xs text-gray-500">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{msg.email}</p>
                  <p className="text-gray-800 text-sm">{msg.content}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MessageDashboard;
