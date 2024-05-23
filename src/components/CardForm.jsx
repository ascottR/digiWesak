import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa"; // Import the copy icon from react-icons
import axios from "axios"; // Import axios for HTTP requests

function CardForm({ card, onClose }) {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [toError, setToError] = useState(false);
  const [fromError, setFromError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (to.length > 25) {
      setToError(true);
      return;
    }
    if (from.length > 25) {
      setFromError(true);
      return;
    }
    if (
      message.split("\n").some((line) => line.length > 25) ||
      message.split("\n").length > 6
    ) {
      setMessageError(true);
      return;
    }

    const uniqueLink = `${
      window.location.origin
    }/cards?image=${encodeURIComponent(card.image)}&to=${encodeURIComponent(
      to
    )}&from=${encodeURIComponent(from)}&message=${encodeURIComponent(message)}`;

    try {
      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
          uniqueLink
        )}`
      );
      const shortUrl = response.data;
      setGeneratedLink(shortUrl);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate short link");
    }
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

  const handleToChange = (e) => {
    const input = e.target.value;
    if (input.length <= 25) {
      setToError(false);
      setTo(input);
    } else {
      setToError(true);
    }
  };

  const handleMessageChange = (e) => {
    const input = e.target.value;
    const lines = input
      .split("\n")
      .map((line) => {
        return line.length > 25 ? line.match(/.{1,25}/g).join("\n") : line;
      })
      .join("\n");
    if (lines.split("\n").length <= 6) {
      setMessageError(false);
      setMessage(lines);
    } else {
      setMessageError(true);
    }
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
              className={`w-full p-2 border ${
                toError ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={to}
              onChange={handleToChange}
              maxLength={25}
              required
            />
            {toError && (
              <p className="text-red-500 text-xs mt-1">Max 25 characters</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">From:</label>
            <input
              type="text"
              className={`w-full p-2 border ${
                fromError ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
                if (e.target.value.length <= 25) {
                  setFromError(false);
                } else {
                  setFromError(true);
                }
              }}
              maxLength={25}
              required
            />
            {fromError && (
              <p className="text-red-500 text-xs mt-1">Max 25 characters</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message:</label>
            <textarea
              className={`w-full p-2 border ${
                messageError ? "border-red-500" : "border-gray-300"
              } rounded`}
              value={message}
              onChange={handleMessageChange}
              required
              rows={6}
            ></textarea>
            {messageError && (
              <p className="text-red-500 text-xs mt-1">
                Max 6 lines, each with max 25 characters.
              </p>
            )}
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
              className="px-4 py-2 bg-purple-800 text-white rounded"
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
                className="ml-2 p-2 text-sm font-medium text-center text-white bg-purple-800 rounded-lg hover:bg-purple-950 focus:ring-4 focus:outline-none focus:ring-purple-300"
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
