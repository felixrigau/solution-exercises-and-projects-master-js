var app = {
  canvas:null,
  image:null,
  tools:{
    /**
     * This method create a new image with texts, using the html5 canvas.
     * @param {htmlTag} image - The image to transform.
     * @param {string} textAbove - The text above of the image.
     * @param {string} textBelow - The text below of the image.
     * @param {object} properties - Set of properties for the texts and image.
     * @param {number} properties.textSize - The font size for both texts
     * @param {string} properties.textColor - The color (hex format) for both texts
     * @param {number} properties.textPadding - Padding top for the text above et padding bottom fot the text below
     * @param {string} properties.imageFormat - Format to image. ex. 'image/png'
     * @returns {string} Return a Base64 DataURI string of the new image
     */
    createImage: function (image, textAbove, textBelow, properties) {
      var canvas = document.createElement('canvas'),
          context = canvas.getContext('2d');

      image.width > 0 ? canvas.width = image.width : canvas.width = 300
      image.height > 0 ? canvas.height = image.height : canvas.height = 300

      context.drawImage(image, 0, 0);
      context.font = properties.textSize +'px helvetica';
      context.fillStyle = properties.textColor;
      context.textAlign = 'center';
      context.textBaseline = 'hanging';

      if (textAbove) {
        context.fillText(textAbove, canvas.width/2, properties.textPadding);
      }
      if (textBelow) {
        context.fillText(textBelow, canvas.width/2, canvas.height - properties.textSize - properties.textPadding);
      }

      return canvas.toDataURL(properties.imageFormat);
    },

    create: function () {

      var image = document.querySelector('#image'),
          textAbove = document.querySelector('.first_text').value,
          textBelow = document.querySelector('.second_text').value,
          properties = {
            textSize: 50,
            textColor: '#FFF',
            textPadding: 10,
            imageFormat: 'image/png'
          };

      app.tools.createImage(image, textAbove, textBelow, properties);
    }
  },
};

(function () {

  var createBtn = document.querySelector('.create');
  createBtn.addEventListener('click',app.tools.create, true);

})();
