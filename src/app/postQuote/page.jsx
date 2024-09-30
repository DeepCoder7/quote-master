"use client"
import QuoteCard from "@/components/QuoteCard";
import { useUplaodImage, useUploadQuote } from "@/query/queryHandler";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
// import { FaUpload, FaSpinner } from "react-icons/fa";

const QuoteCreationPage = () => {
  const [quoteText, setQuoteText] = useState("");
  const [image, setImage] = useState(null);

  const {
    mutate: uploadeImage,
  } = useUplaodImage({
    updateImage: (data) => {
      setImage(data?.[0].url)
    }
  })

  const {
    mutate: postQuote,
    isLoading
  } = useUploadQuote({
    resetValue: () => {
      setImage(null)
      setQuoteText("")
    }
  })

  const ref = useRef();

  const handleQuoteChange = (e) => {
    setQuoteText(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file)
      uploadeImage(formData)
    }
  };

  const onClickUpload = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quoteText && image) {
      postQuote({
        text: quoteText,
        mediaUrl: image
      })
    } else {
      toast.error(quoteText ? "Please Upload Image" : "Please Add some text in quote")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Create Your Quote</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="quoteText" className="block text-sm font-medium text-gray-700">
                  Quote Text
                </label>
                <textarea
                  id="quoteText"
                  name="quoteText"
                  rows="3"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter your quote here"
                  value={quoteText}
                  onChange={handleQuoteChange}
                  aria-label="Quote text input"
                ></textarea>
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <div onClick={onClickUpload} className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {/* <FaUpload className="mx-auto h-12 w-12 text-gray-400" /> */}
                    <i class="fas fa-upload"></i>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          ref={ref}
                          className="sr-only"
                          onChange={handleImageUpload}
                          accept="image/*"
                          aria-label="Upload image"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isLoading}
                aria-label="Submit quote"
              >
                {isLoading ? (
                    <i className="fas fa-spinner fa-spin text-4xl text-blue-500" />
                ) : (
                  "Submit Quote"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* New preview section */}
      {image && (
        <div className="mt-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Preview</h2>
            <div className="relative">
              <QuoteCard quote={{ mediaUrl: image, text: quoteText }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteCreationPage;
