var smoothScroll = new scrollToSmooth('a', {
    easing: 'easeInOutBack',
    duration: 800,
    durationRelative: true,
    onScrollStart: (data) => { console.log(data); },
    onScrollUpdate: (data) => { console.log(data); },
    onScrollEnd: (data) => { console.log(data); },
  });
  smoothScroll.init();
  
  // Init Highlight JS
  hljs.initHighlightingOnLoad();