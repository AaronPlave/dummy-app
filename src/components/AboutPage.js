import React from 'react';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
    return (
        <div>
      <h2 className="alt-header">About</h2>
      <p>
        Imagery from <a target="_blank" href="http://hirise.lpl.arizona.edu">HiRISE</a> Flickr Wallpaper <a target="_blank" href="https://www.flickr.com/photos/71688597@N05/albums/72157633359968647">album</a>.
        Color palettes generated using the <a target="_blank" href="https://github.com/lokesh/color-thief">Color Thief</a> library. 
      </p>
      <p><a target="_blank" href="https://github.com/AaronPlave/dummy-app">Project Source</a></p>
    </div>
    );
};

export default AboutPage;
