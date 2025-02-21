# Search Other Sites to UNIT3D Based Sites

This tampermonkey script enhances torrent and request pages on supported UNIT3D based sites by automatically adding search links to other related sites. The script extracts the IMDb ID from the page and creates clickable links for quick searches on various torrent sites.

## Supported URLs

- **Automatic IMDb ID Extraction:** Detects an IMDb link on the page and extracts the corresponding IMDb number.
- **Custom Search Links:** Generates search links for several UNIT3D-based sites:
  - **PSS** 
  - **PTP** 
  - **ANT** 
  - **HAWK** 
  - **BHD** 
  - **BLU** 
  - **FNP** 
- **Easy Navigation:** Inserts the links into the metadata section for quick access without leaving the current page.

## Installation

1. **Install a User Script Manager:**  
   Install a user script manager such as [Tampermonkey](https://tampermonkey.net/)

2. **Add the Script:**  
   - Open your user script manager dashboard.
   - Create a new script.
   - Copy and paste the script code from this repository into the new script.
   - Save the script.

3. **Visit a Supported Page:**  
   Navigate to a supported torrent or request page. The script will automatically run on page load, detect the IMDb link, and insert the custom search links.

## How It Works

- **`insertCustomLinks`:**  
  This is the main function. It locates the metadata section (the `<ul class="meta__ids">`) and the IMDb link. If both are found, it extracts the IMDb number and creates list items with links to various torrent sites.

- **`createCustomLink`:**  
  A helper function that takes the link text, URL, and tooltip text as parameters. It creates and returns a new list item (`<li>`) containing an anchor tag (`<a>`) configured to open in a new tab.

- **Event Listener:**  
  The script waits for the window's `load` event before running the `insertCustomLinks` function to ensure that all page elements are available.

## Contributing

Contributions are welcome! If you have suggestions or improvements:
- Open an issue to discuss your idea.
- Submit a pull request with your enhancements.


Thanks to everyone who has contributed ideas, feedback, or improvements to this script.
