const RenderResultsHTML = (searchResults) => {
  let resultsHTML = "";
  for (let i = 0; i < searchResults.length; i++) {
    /* // Show all information in the list item instead of pop-up
        resultsHTML += `
            <li class="flex flex-row p-4 gap-4 rounded-lg dark:hover:bg-gray-600">
                <img class="max-w-[84px] aspect-21/32 rounded-lg" src="${searchResults[i].coverImage}" alt="${searchResults[i].title} cover">
                <div class="flex flex-col justify-center">
                    <span class="text-2xl">${searchResults[i].title}</span>
                    <a href="./?q=${searchResults[i].author}" class="text-base text-purple-400">${searchResults[i].author}</a>
                    <span class="text-sm"><span class="font-bold">Published: </span>${searchResults[i].releaseDate}</span>
                    <span class="text-sm"><span class="font-bold">Pages: </span>${searchResults[i].pages}</span>
                </div>
            </li>
        `;
         */
    resultsHTML += `
            <li ontouchstart="renderDetails(event)" onmouseenter="renderDetails(event)" onmouseleave="removeDetails(event)" id="book_${searchResults[i].id}" class="book-item flex flex-col p-4 rounded-lg dark:hover:bg-gray-600 hover:bg-rose-200">
                    <span class="text-xl sm:text-2xl">${searchResults[i].title}</span>
                    <span class="text-base"><a href="./?q=${searchResults[i].author}" class="text-rose-400 dark:text-purple-400">${searchResults[i].author}</a></span>
                </div>
            </li>
        `;
  }
  return resultsHTML;
};
