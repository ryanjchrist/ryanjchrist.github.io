---
layout: posts
title:  "Prototyping Projects"
tagline: ""
date:   2024-05-01 00:00:00 +0000
tags: [Arduino & Circuitry, Prototyping]
author_profile: true
author: Ryan Christ
highlight_home: true
categories: project
header:
    overlay_image: "/assets/images/GolfCircuitSkem1.png"
    teaser: "/assets/images/Golf.jpg"
description: add
---
Developed several prototypes using Arduino microcontrollers and laser-cut components to create interactive and functional designs.

# Mini Golf
The mini golf simulator as part of a larger Rube Goldberg machine. The mechanism positions the golf ball via a pipe into the designated “tee” spot. An ultrasonic sensor detects the ball and initiates the sequence.

Automation Sequence: After a 1-second delay, the golf club—powered by a servo motor—retracts, and a front gate lifts. The servo swings the club to hit the ball as it rolls into the hole. After the ball lands in the hole, a buzzer begins playing the olymipic theme song as the ball continue on to further assemblies. This project combined sensor automation and some mechanical design to create a successful Rube Goldberg machine.

<div id="nanogallery1"></div>
<script>
  $("#nanogallery1").nanogallery2({
  // ### gallery settings ###
  thumbnailHeight:  150,
  thumbnailWidth:   150,
  itemsBaseURL:     '/assets/images/',

  // ### gallery content ###
  items: [
      { src: 'Golf.jpg', srct: 'Golf.jpg' },
      { src: 'GolfCircuitSkem1.png', srct: 'GolfCircuitSkem1.png' },
      { src: 'GolfCircuitSkem2.png', srct: 'GolfCircuitSkem2.png' },
  ]
});
</script>

# Spotify Picture Frame
I designed and created a personalized wedding gift for my brother and his wife using Adobe Illustrator and laser-cut on a Trotec laser cutter.

* Spotify Code Integration: Embedded a scannable Spotify barcode to play "Fly Me To The Moon" by Frank Sinatra
* Two-Plate Design: Allows a photo to be displayed between two clear acrylic plates.

<div id="nanogallery2"></div>
<script>
  $("#nanogallery2").nanogallery2({
  // ### gallery settings ###
  thumbnailHeight:  150,
  thumbnailWidth:   150,
  itemsBaseURL:     '/assets/images/',

  // ### gallery content ###
  items: [
      { src: 'Spotify.gif', srct: 'Spotify.gif' },
      { src: 'SpotifyAI.png', srct: 'SpotifyAI.png' },
  ]
});
</script>