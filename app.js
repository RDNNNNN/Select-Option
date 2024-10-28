// 加載DOM元素後執行JavaScript內容
document.addEventListener("DOMContentLoaded", function () {
  // 抓取下拉按鈕
  const dropdownButton = document.getElementById("dropdownButton");
  // 抓取選項元素
  const optionsContainer = document.getElementById("optionsContainer");
  // 抓取已選擇的標籤元素
  const selectedTagsContainer = document.getElementById("selectedTags");
  // 為下拉按鈕添加點擊事件，當點擊時使用optionsContainer.classList.toggle("hidden")來顯示或隱藏選項元素
  dropdownButton.addEventListener("click", () => {
    optionsContainer.classList.toggle("hidden");
  });
  // 為選項元素添加變更事件,當多選內容變更時，會觸發selectedTagsContainer.innerHTML = ""會使用空字串來清空已選擇的標籤元素，以確保新的內容顯示不會與之前的重複
  optionsContainer.addEventListener("change", () => {
    selectedTagsContainer.innerHTML = "";
    // 選取所有已被選取的checkbox，並使用forEach迴圈方法來添加到已選擇的標籤元素
    document
      .querySelectorAll(".checkbox-option:checked")
      .forEach((checkbox) => {
        // 建立新的<span>元素用於顯示標籤
        const tag = document.createElement("span");
        // 設定標籤的樣式
        tag.className =
          "inline-flex items-center bg-gray-300 text-gray-700 rounded px-2 py-1 text-sm mr-2";
        // 將標籤的值設定為選取的checkbox
        tag.textContent = checkbox.value;
        // 將標籤添加到已選擇的標籤元素
        selectedTagsContainer.appendChild(tag);
      });
  });
});
