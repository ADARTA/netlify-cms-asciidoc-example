import React from 'react'
import PreviewWrapper from '../previewWrapper'
const asciidoctor = require('asciidoctor.js')()

const beginning = `
<link href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/css/reveal.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/css/theme/black.css" id="theme">
<link href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/lib/css/zenburn.css" rel="stylesheet">
<script>
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match(/print-pdf/gi) ?
    "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/css/print/pdf.css" :
    "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/css/print/paper.css";
  document.getElementsByTagName('head')[0].appendChild(link);
</script>
`
const ending = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/lib/js/head.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/js/reveal.js"></script>
<script>
  // See https://github.com/hakimel/reveal.js#configuration for a full list of configuration options
  Reveal.initialize({
    // Display controls in the bottom right corner
    controls: true,
    // Display a presentation progress bar
    progress: true,
    // Set a per-slide timing for speaker notes, null means none
    defaultTiming: null,
    // Display the page number of the current slide
    slideNumber: false,
    // Push each slide change to the browser history
    history: false,
    // Enable keyboard shortcuts for navigation
    keyboard: true,
    // Enable the slide overview mode
    overview: true,
    // Vertical centering of slides
    center: true,
    // Enables touch navigation on devices with touch input
    touch: true,
    // Loop the presentation
    loop: false,
    // Change the presentation direction to be RTL
    rtl: false,
    // Randomizes the order of slides each time the presentation loads
    shuffle: false,
    // Turns fragments on and off globally
    fragments: true,
    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,
    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: true,
    // Flags if speaker notes should be visible to all viewers
    showNotes: false,
    // Global override for autolaying embedded media (video/audio/iframe)
    // - null: Media will only autoplay if data-autoplay is present
    // - true: All media will autoplay, regardless of individual setting
    // - false: No media will autoplay, regardless of individual setting
    autoPlayMedia: null,
    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 0,
    // Stop auto-sliding after user input
    autoSlideStoppable: true,
    // Enable slide navigation via mouse wheel
    mouseWheel: false,
    // Hides the address bar on mobile devices
    hideAddressBar: true,
    // Opens links in an iframe preview overlay
    previewLinks: false,
    // Theme (e.g., beige, black, league, night, serif, simple, sky, solarized, white)
    // NOTE setting the theme in the config no longer works in reveal.js 3.x
    //theme: Reveal.getQueryHash().theme || 'black',
    // Transition style (e.g., none, fade, slide, convex, concave, zoom)
    transition: Reveal.getQueryHash().transition || 'slide',
    // Transition speed (e.g., default, fast, slow)
    transitionSpeed: 'default',
    // Transition style for full page slide backgrounds (e.g., none, fade, slide, convex, concave, zoom)
    backgroundTransition: 'fade',
    // Number of slides away from the current that are visible
    viewDistance: 3,
    // Parallax background image (e.g., "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'")
    parallaxBackgroundImage: '',
    // Parallax background size in CSS syntax (e.g., "2100px 900px")
    parallaxBackgroundSize: '',

    // The "normal" size of the presentation, aspect ratio will be preserved
    // when the presentation is scaled to fit different resolutions. Can be
    // specified using percentage units.
    width: 960,
    height: 700,

    // Factor of the display size that should remain empty around the content
    margin: 0.1,

    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 1.5,

    // Optional libraries used to extend on reveal.js
    dependencies: [{
        src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/lib/js/classList.js',
        condition: function () {
          return !document.body.classList;
        }
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/plugin/markdown/marked.js',
        condition: function () {
          return !!document.querySelector('[data-markdown]');
        }
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/plugin/markdown/markdown.js',
        condition: function () {
          return !!document.querySelector('[data-markdown]');
        }
      },

      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/plugin/zoom-js/zoom.js',
        async: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.3.0/plugin/notes/notes.js',
        async: true
      }
    ]
  });
</script>
`

export default class SlidesPreview extends React.Component {
  render () {
    // const data = this.props.entry.toJS().data // This or next line
    const data = this.props.entry.getIn(['data']).toJS()
    const previewHTML = asciidoctor.convert(data.body)
    console.log(previewHTML)
    return (
      <PreviewWrapper
        innerStyles={""}
        // innerHTML={`${beginning}${previewHTML}${ending}`}
        innerHTML={`${previewHTML}`}
      />
    )
  }
}
