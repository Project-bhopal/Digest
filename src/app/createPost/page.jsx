"use client";
import React, { useState } from "react";

const CreatePost = () => {
  const [contentSections, setContentSections] = useState([
    { id: 1, type: "", items: [] },
  ]);

  const addContentSection = () => {
    setContentSections([
      ...contentSections,
      { id: contentSections.length + 1, type: "", items: [] },
    ]);
  };

  const removeContentSection = (id) => {
    setContentSections(contentSections.filter((section) => section.id !== id));
  };

  const handleTypeChange = (id, type) => {
    setContentSections(
      contentSections.map((section) =>
        section.id === id ? { ...section, type } : section
      )
    );
  };

  const addListItem = (id) => {
    setContentSections(
      contentSections.map((section) =>
        section.id === id
          ? { ...section, items: [...section.items, ""] }
          : section
      )
    );
  };

  const handleListItemChange = (id, index, value) => {
    setContentSections(
      contentSections.map((section) =>
        section.id === id
          ? {
              ...section,
              items: section.items.map((item, i) =>
                i === index ? value : item
              ),
            }
          : section
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch("/api/posts/create", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        // alert("Post created successfully!");
      } else {
        // alert("Error creating post.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full md:p-8 p-4 border-t-4 border-lime">
      <h1 className="text-center font-semibold text-3xl text-gray-700 dark:text-white mb-8">
        Create a New Post
      </h1>
      <div className="w-full flex justify-center ">
        <form
          id="createPostForm"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white dark:bg-[#04031D] shadow-md rounded-lg md:p-8 p-4 border  border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Post Heading */}
            <div>
              <label
                htmlFor="postHeading"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Post Heading
              </label>
              <input
                type="text"
                id="postHeading"
                name="postHeading"
                className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                required
              />
            </div>

            {/* Subheading */}
            <div>
              <label
                htmlFor="subheading"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Subheading
              </label>
              <input
                type="text"
                id="subheading"
                name="subheading"
                className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                required
              >
                <option value="">Select a Category</option>
                <option value="technology">Technology</option>
                <option value="lifestyle">Lifestyle</option>
              </select>
            </div>

            {/* Image Post */}
            <div>
              <label
                htmlFor="imagePost"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Image Post
              </label>
              <input
                type="file"
                id="imagePost"
                name="imagePost"
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>

            {/* Created By */}
            <div>
              <label
                htmlFor="createdBy"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Created By
              </label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                required
              />
            </div>

            {/* Designation */}
            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700 dark:text-white"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Post Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Post Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
              required
            />
          </div>

          {/* Content Sections */}
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Content Section
          </h3>
          {contentSections.map((section) => (
            <div
              key={section.id}
              className="border dark:border-none p-4 rounded-lg mb-6 bg-gray-50 dark:bg-[#141332]"
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor={`contentHeading${section.id}`}
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Content Heading
                  </label>
                  <input
                    type="text"
                    id={`contentHeading${section.id}`}
                    name="contentHeading[]"
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`contentDescription${section.id}`}
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Content Description
                  </label>
                  <textarea
                    id={`contentDescription${section.id}`}
                    name="contentDescription[]"
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`contentType${section.id}`}
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Content Type
                  </label>
                  <select
                    id={`contentType${section.id}`}
                    name="contentType[]"
                    onChange={(e) =>
                      handleTypeChange(section.id, e.target.value)
                    }
                    className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                  >
                    <option value="">Select Content Type</option>
                    <option value="image">Image</option>
                    <option value="list">List</option>
                    <option value="quote">Quote</option>
                  </select>
                </div>

                {section.type === "image" && (
                  <div>
                    <label
                      htmlFor={`imageUpload${section.id}`}
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id={`imageUpload${section.id}`}
                      name="imageUpload[]"
                      className="mt-1 block w-full text-sm text-gray-500"
                    />
                  </div>
                )}

                {section.type === "list" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">
                      List Items
                    </label>
                    {section.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) =>
                            handleListItemChange(
                              section.id,
                              index,
                              e.target.value
                            )
                          }
                          name={`listItems[${section.id}][]`}
                          placeholder="Enter List Item"
                          className="block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addListItem(section.id)}
                      className="text-sm text-lime-600 hover:underline"
                    >
                      Add More List Items
                    </button>
                  </div>
                )}

                {section.type === "quote" && (
                  <div>
                    <label
                      htmlFor={`quoteText${section.id}`}
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Quote
                    </label>
                    <input
                      type="text"
                      id={`quoteText${section.id}`}
                      name="quoteText[]"
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                    />
                    <br />
                    <label
                      htmlFor={`quoteAuthor${section.id}`}
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Created By
                    </label>
                    <input
                      type="text"
                      id={`quoteAuthor${section.id}`}
                      name="quoteAuthor[]"
                      className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm border focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => removeContentSection(section.id)}
                  className="text-sm text-red-600 hover:underline mt-2"
                >
                  Remove Content Section
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={addContentSection}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600"
            >
              Add New Content Section
            </button>
            <button
              type="submit"
              className="px-16 py-2 bg-[#6DBA16] hover:bg-[#7ab03c] text-white dark:text-white text-sm font-semibold  rounded-md hover:bg-lime-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
