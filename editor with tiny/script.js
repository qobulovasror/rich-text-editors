const MediumStoryConfig = {
  selector: "#editor",
  plugins: "autoresize quickbars image media table hr paste",
  skin: "snow",
  icons: "thin",
  menubar: false,
  toolbar: false,
  content_style:
    "@import url('https://fonts.googleapis.com/css2?family=Tinos&display=swap'); body { font-family: 'Tinos', serif; font-size: 16pt; color: #292929; }",
  placeholder: "Tell your story...",
  quickbars_selection_toolbar: "bold italic link | h1 h2 | blockquote",
  quickbars_insert_toolbar: "image media table hr",
};

const MediumHeadlineConfig = {
  selector: "h1",
  plugins: "autoresize quickbars emoticons image media table hr paste",
  skin: "snow",
  icons: "thin",
  menubar: false,
  inline: true,
  toolbar: false,
  content_style:
    "@import url('https://fonts.googleapis.com/css2?family=Tinos&display=swap'); body { font-family: 'Tinos', serif; font-size: 16pt; color: #292929; }",
  placeholder: "Title",
};

tinymce.init(MediumHeadlineConfig);
tinymce.init(MediumStoryConfig);
