import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa"; // Import the copy icon from react-icons

function CardForm({ card, onClose }) {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueLink = `${
      window.location.origin
    }/cards?image=${encodeURIComponent(card.image)}&to=${encodeURIComponent(
      to
    )}&from=${encodeURIComponent(from)}&message=${encodeURIComponent(message)}`;
    setGeneratedLink(uniqueLink);
    alert(`Share this link: ${uniqueLink}`);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(generatedLink)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl mb-4">Fill in the details for {card.name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">To:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">From:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white rounded"
            >
              Generate Link
            </button>
          </div>
        </form>
        {generatedLink && (
          <div className="mt-4">
            <p className="mb-2 text-gray-700">Generated Link:</p>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                className="w-full p-2 border border-gray-300 rounded"
                value={generatedLink}
              />
              <button
                onClick={handleCopy}
                className="ml-2 p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <FaRegCopy />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardForm;
