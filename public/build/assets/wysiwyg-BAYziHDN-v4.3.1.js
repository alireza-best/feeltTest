import{t}from"./tinymce-D75crZP1-v4.3.1.js";function n(i={}){return t.baseURL=`${FleetCart.baseUrl}/build/assets/tinymce`,t.init({selector:".wysiwyg",theme:"silver",height:350,menubar:!1,branding:!1,image_advtab:!0,automatic_uploads:!0,media_alt_source:!1,media_poster:!1,relative_urls:!1,toolbar_mode:"sliding",directionality:FleetCart.rtl?"rtl":"ltr",cache_suffix:`?v=${FleetCart.version}`,content_style:"body { color: #333333; }",plugins:"lists, link, table, image, media, paste, autosave, autolink,quickbars, wordcount, code, fullscreen",toolbar:"styleselect | bold italic underline strikethrough blockquote | bullist numlist | alignleft aligncenter alignright alignjustify | outdent indent | forecolor removeformat | table | image media link | code fullscreen",quickbars_selection_toolbar:"bold italic | quicklink h2 h3 blockquote quickimage quicktable",images_upload_handler(a,o,r){let l=new FormData;l.append("file",a.blob(),a.filename()),$.ajax({method:"POST",url:route("admin.media.store"),data:l,processData:!1,contentType:!1}).then(e=>{o(e.path)}).catch(e=>{r(e.responseJSON.message)})},...i}),t}export{n as t};
